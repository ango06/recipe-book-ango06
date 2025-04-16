
import { db } from "./config/firebase.ts";
import { getRecipes, getRecipe } from "./handleRecipes.ts"; 
import { getDoc } from "firebase/firestore";

const TestRecipes = () => {

    const handleGetAll = async () => {
        const recipes = await getRecipes(db);
        console.log("All Recipes:", recipes);
    };

    const handleGetOne = async () => {
        const recipe = await getRecipe(db, "Spaghetti Carbonara"); 
        if (recipe) {
            const recipeInfo = (await getDoc(recipe)).data();
            console.log("Single Recipe:", recipeInfo);
        }
    };

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleGetAll}>Get All Recipes</button>
            <button onClick={handleGetOne}>Get Recipe by Title</button>
        </div>
    );
};

export default TestRecipes;
