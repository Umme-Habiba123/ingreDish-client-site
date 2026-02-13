import recipes from "@/data/recipes.json";
import { commonIngredients } from "@/data/common";

export const findRecipes = (selectedIngredients) => {

  const filteredUserIngredients = selectedIngredients.filter(
    ing => !commonIngredients.includes(ing.toLowerCase())
  );

  return recipes.filter(recipe => {

    const filteredRecipeIngredients = recipe.ingredients.filter(
      ing => !commonIngredients.includes(ing.toLowerCase())
    );

    return filteredRecipeIngredients.every(ing =>
      filteredUserIngredients.includes(ing)
    );

  });
};
