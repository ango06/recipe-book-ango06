// importing from recipes.json
import recipesData from "./recipes.json";

const recipes = recipesData.recipes;

console.log(recipes);

// fetching recipes
const fetchRecipes = async () => {
    const response = await fetch("/recipes.json");
    const data = await response.json();
    console.log(data);
  };

  // add recipes
const saveRecipes = (recipes) => {
    fs.writeFileSync(filePath, JSON.stringify({ recipes }, null, 2), "utf-8");
  };
  export const addRecipe = (newRecipe) => {
    const data = loadRecipes();
    data.recipes.push(newRecipe);
    saveRecipes(data.recipes);
  };
  