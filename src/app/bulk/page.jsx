'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Plus,
  Trash2, 
  AlertCircle,
  CheckCircle,
  Search
} from 'lucide-react';

export default function BulkAddPage() {
  const [bulkInput, setBulkInput] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load existing ingredients from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ingredish_ingredients');
    if (saved) {
      try {
        setIngredients(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading ingredients:', e);
      }
    }
  }, []);

  // Parse comma-separated input
  const handleBulkAdd = () => {
    if (!bulkInput.trim()) return;

    setIsLoading(true);
    
    // Split by comma, clean up whitespace, remove empty strings
    const newItems = bulkInput
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0)
      .map((item, index) => ({
        id: Date.now() + index,
        name: item,
        quantity: '',
        unit: '',
        addedAt: new Date().toISOString()
      }));

    // Combine with existing ingredients
    const updatedIngredients = [...ingredients, ...newItems];
    
    // Save to localStorage
    localStorage.setItem('ingredish_ingredients', JSON.stringify(updatedIngredients));
    
    // Update state
    setIngredients(updatedIngredients);
    setBulkInput('');
    
    // Show success message
    setShowSuccess(true);
    setIsLoading(false);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  // Delete single ingredient
  const deleteIngredient = (id) => {
    const updated = ingredients.filter(item => item.id !== id);
    setIngredients(updated);
    localStorage.setItem('ingredish_ingredients', JSON.stringify(updated));
  };

  // Clear all ingredients
  const clearAll = () => {
    if (confirm('Are you sure you want to clear all ingredients?')) {
      setIngredients([]);
      localStorage.removeItem('ingredish_ingredients');
    }
  };

  // Find recipes with current ingredients
  const findRecipes = () => {
    const ingredientNames = ingredients.map(i => i.name).join(', ');
    const searchQuery = encodeURIComponent(ingredientNames + ' recipes');
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      
      {/* Header */}
      <div className="bg-neutral border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link 
              href="/ingredients/add"
              className="btn btn-circle btn-ghost text-white hover:bg-gray-800"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Bulk Add Ingredients
              </h1>
              <p className="text-gray-400 mt-1">
                Add multiple ingredients at once, separated by commas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Success Alert */}
        {showSuccess && (
          <div className="alert alert-success mb-6 max-w-4xl mx-auto">
            <CheckCircle className="w-6 h-6" />
            <span>Successfully added ingredients!</span>
          </div>
        )}

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Instructions Card */}
          <div className="bg-neutral rounded-2xl p-6 lg:p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              How to Use
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>Type ingredient names separated by commas (e.g., "Potato, Onion, Tomato")</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>Click "Add All" to save them to your ingredient list</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>Use "Find Recipes" to search for recipes using your ingredients</span>
              </li>
            </ul>
          </div>

          {/* Input Section */}
          <div className="bg-neutral rounded-2xl p-6 lg:p-8 border border-gray-800">
            <label className="form-control">
              <div className="label">
                <span className="label-text text-white font-semibold text-lg">
                  Enter Ingredients
                </span>
                <span className="label-text-alt text-gray-400">
                  Comma-separated
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered bg-black border-gray-700 focus:border-yellow-500 text-white h-32 text-lg"
                placeholder="Example: Potato, Onion, Tomato, Carrot, Egg, Chicken, Rice"
                value={bulkInput}
                onChange={(e) => setBulkInput(e.target.value)}
              ></textarea>
              <div className="label">
                <span className="label-text-alt text-gray-400">
                  {bulkInput.split(',').filter(i => i.trim()).length} ingredients will be added
                </span>
              </div>
            </label>

            <button
              onClick={handleBulkAdd}
              disabled={!bulkInput.trim() || isLoading}
              className="btn bg-yellow-500 hover:bg-yellow-600 text-black border-none w-full mt-4 font-semibold text-lg"
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  <Plus className="w-5 h-5 mr-2" />
                  Add All ({bulkInput.split(',').filter(i => i.trim()).length})
                </>
              )}
            </button>
          </div>

          {/* Current Ingredients List */}
          {ingredients.length > 0 && (
            <div className="bg-neutral rounded-2xl p-6 lg:p-8 border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Your Ingredients ({ingredients.length})
                </h2>
                <div className="flex gap-3">
                  <button
                    onClick={clearAll}
                    className="btn btn-sm bg-red-500/10 hover:bg-red-500/20 text-red-500 border-red-500/30"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Clear All
                  </button>
                  <button
                    onClick={findRecipes}
                    className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-black border-none"
                  >
                    <Search className="w-4 h-4 mr-1" />
                    Find Recipes
                  </button>
                </div>
              </div>

              {/* Ingredients Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ingredients.map((item) => (
                  <div
                    key={item.id}
                    className="bg-black rounded-lg p-4 border border-gray-800 flex justify-between items-center hover:border-yellow-500 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-500 font-bold text-lg">
                          {item.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">
                          {item.name}
                        </p>
                        {item.quantity && (
                          <p className="text-sm text-gray-400">
                            {item.quantity} {item.unit}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteIngredient(item.id)}
                      className="btn btn-sm btn-ghost text-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-black rounded-lg p-4 border border-gray-800">
                    <p className="text-gray-400 text-sm">Total Items</p>
                    <p className="text-3xl font-bold text-yellow-500">
                      {ingredients.length}
                    </p>
                  </div>
                  <div className="bg-black rounded-lg p-4 border border-gray-800">
                    <p className="text-gray-400 text-sm">Recently Added</p>
                    <p className="text-xl font-bold text-white truncate">
                      {ingredients[ingredients.length - 1]?.name || '-'}
                    </p>
                  </div>
                  <div className="bg-black rounded-lg p-4 border border-gray-800 col-span-2 md:col-span-1">
                    <p className="text-gray-400 text-sm">Ready to Cook?</p>
                    <button
                      onClick={findRecipes}
                      className="text-sm text-yellow-500 font-semibold hover:underline mt-1"
                    >
                      Search Recipes →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {ingredients.length === 0 && (
            <div className="bg-neutral rounded-2xl p-12 border border-gray-800 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-10 h-10 text-gray-600" />
              </div>
              <p className="text-2xl font-bold text-white mb-2">
                No Ingredients Yet
              </p>
              <p className="text-gray-400">
                Start by typing ingredients above and click "Add All"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}