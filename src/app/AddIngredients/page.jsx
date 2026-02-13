"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Plus, 
  Mic, 
  Barcode, 
  FileText, 
  History, 
  Sparkles,
  ChevronRight,
  Package,
  Apple,
  Carrot,
  Egg,
  Milk,
  Beef,
  Coffee,
  Wheat
} from 'lucide-react';

import { findRecipes } from "@/utils/findRecipes"; // 🔥 Recipe finder
import { commonIngredients } from "@/data/common"; // 🔥 Ignore common items

export default function AddIngredients() {
  const router = useRouter();
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const categories = [
    {
      name: 'Vegetables',
      icon: <Carrot className="w-4 h-4" />,
      items: ['Potato', 'Onion', 'Tomato', 'Carrot', 'Cauliflower', 'Cabbage', 'Cucumber', 'Pumpkin']
    },
    {
      name: 'Spices',
      icon: <Sparkles className="w-4 h-4" />,
      items: ['Turmeric', 'Chili', 'Coriander', 'Cumin', 'Salt', 'Garam Masala', 'Bay Leaf', 'Cinnamon']
    },
    {
      name: 'Protein',
      icon: <Beef className="w-4 h-4" />,
      items: ['Egg', 'Chicken', 'Fish', 'Beef', 'Lamb', 'Shrimp', 'Pork']
    },
    {
      name: 'Dairy',
      icon: <Milk className="w-4 h-4" />,
      items: ['Milk', 'Yogurt', 'Cheese', 'Butter', 'Cream', 'Paneer']
    },
    {
      name: 'Fruits',
      icon: <Apple className="w-4 h-4" />,
      items: ['Banana', 'Apple', 'Orange', 'Mango', 'Guava', 'Grapes', 'Strawberry']
    },
    {
      name: 'Grains',
      icon: <Wheat className="w-4 h-4" />,
      items: ['Rice', 'Lentils', 'Flour', 'Pasta', 'Bread', 'Oats', 'Quinoa']
    },
    {
      name: 'Other',
      icon: <Package className="w-4 h-4" />,
      items: ['Oil', 'Soy Sauce', 'Vinegar', 'Honey', 'Sugar', 'Coffee', 'Tea']
    }
  ];

  // Add ingredient
  const addIngredient = (ingredient) => {
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);

      // Only add to selected if not common
      if (!commonIngredients.includes(ingredient) && !selected.includes(ingredient)) {
        setSelected([...selected, ingredient]);
      }

      setCurrentInput('');
      setSuggestions([]);
    }
  };

  // Remove ingredient
  const removeIngredient = (index) => {
    const removed = ingredients[index];
    setIngredients(ingredients.filter((_, i) => i !== index));
    if (selected.includes(removed)) {
      setSelected(selected.filter(i => i !== removed));
    }
  };

  // Quick add from category
  const handleQuickAdd = (item) => {
    addIngredient(item);
  };

  // Find Recipe button
  const handleFindRecipe = () => {
    const matched = findRecipes(selected); // selected ingredient দিয়ে match
    localStorage.setItem("recipes", JSON.stringify(matched));
    router.push("/recipes"); // redirect to recipes page
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-yellow-500/10 to-transparent border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/ingredients" className="hover:text-yellow-500">Ingredients</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-yellow-500">Add Ingredients</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-2">
            Add <span className="text-yellow-500">Ingredients</span>
          </h1>
          <p className="text-gray-400 text-lg">
            What ingredients do you have in your fridge?
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Input Methods */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Input Methods */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link href="/ingredients/add/manual" className="bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-yellow-500 rounded-lg p-4 text-center transition-all group">
                <FileText className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <span className="text-sm">Manual</span>
              </Link>
              <Link href="/ingredients/add/voice" className="bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-yellow-500 rounded-lg p-4 text-center transition-all group">
                <Mic className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <span className="text-sm">Voice</span>
              </Link>
              <Link href="/ingredients/add/scan" className="bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-yellow-500 rounded-lg p-4 text-center transition-all group">
                <Barcode className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <span className="text-sm">Scan</span>
              </Link>
              <Link href="/ingredients/add/bulk" className="bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-yellow-500 rounded-lg p-4 text-center transition-all group">
                <Package className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <span className="text-sm">Bulk</span>
              </Link>
            </div>

            {/* Manual Input Field */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-yellow-500" />
                Add Ingredients Manually
              </h2>

              <div className="relative mb-4">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => {
                    setCurrentInput(e.target.value);
                    const allItems = categories.flatMap(c => c.items);
                    const filtered = allItems.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase())).slice(0,5);
                    setSuggestions(filtered);
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && addIngredient(currentInput)}
                  placeholder="Type ingredient name (e.g., Potato, Egg, Onion)"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                />
                
                {suggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
                    {suggestions.map((suggestion, index) => (
                      <div key={index} onClick={() => addIngredient(suggestion)} className="px-4 py-2 hover:bg-yellow-500/20 cursor-pointer text-gray-300">
                        {suggestion}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {ingredients.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm text-gray-400 mb-2">Selected Ingredients:</h3>
                  <div className="flex flex-wrap gap-2">
                    {ingredients.map((ing, index) => (
                      <span key={index} className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm group">
                        {ing}
                        <button onClick={() => removeIngredient(index)} className="text-gray-500 hover:text-red-500">✕</button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Category Quick Add */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Add by Category</h2>
              <div className="space-y-4">
                {categories.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-medium text-yellow-500 mb-2 flex items-center gap-2">{category.icon} {category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIdx) => (
                        <button key={itemIdx} onClick={() => handleQuickAdd(item)} className="px-3 py-1 bg-gray-800 hover:bg-yellow-500/20 text-gray-300 rounded-full text-sm transition-colors">
                          + {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Selected Items</h2>
              
              {ingredients.length > 0 ? (
                <>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-yellow-500">{ingredients.length}</div>
                    <div className="text-sm text-gray-400">ingredients added</div>
                  </div>

                  <div className="max-h-60 overflow-y-auto mb-6 space-y-1">
                    {ingredients.map((ing, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span>{ing}</span>
                        <button onClick={() => removeIngredient(index)} className="text-gray-600 hover:text-red-500">✕</button>
                      </div>
                    ))}
                  </div>

                  <button onClick={handleFindRecipe} className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors mb-3">
                    Find Recipe ({selected.length})
                  </button>

                  <button onClick={() => {
                    localStorage.setItem('savedIngredients', JSON.stringify(ingredients));
                    alert('List saved!');
                  }} className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    Save This List
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🥗</div>
                  <p className="text-gray-500">No ingredients added yet</p>
                  <p className="text-sm text-gray-600 mt-2">Add ingredients to find recipes</p>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Recent Lists
                </h3>
                <Link href="/ingredients/my/recent-1" className="block p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg mb-2 transition-colors">
                  <div className="text-sm font-medium">Yesterday's Cooking</div>
                  <div className="text-xs text-gray-500">Potato, Egg, Onion, Chili...</div>
                </Link>
                <Link href="/ingredients/my/recent-2" className="block p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="text-sm font-medium">Weekend Meal Prep</div>
                  <div className="text-xs text-gray-500">Chicken, Potato, Tomato, Spices...</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
