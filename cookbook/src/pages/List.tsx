/*
export interface Recipe{
    id: string; // unique identifier (generate hash for Firestore document ID)
    name: string;
    isFavorite: boolean //false by default
    imageURL: string;
    skillLevel: "Beginner" | "Medium" | "Advanced";
    timeNeeded: string;
    cuisine: ; //predefine strings
    ingredients: Ingredient[];
    description: string;
    steps: string;
}

export interface Ingredient{
    quantity: string;
    name: string;
}

// importing recipes
import recipesData from "../data/recipes.json";

const recipes: Recipe[] = recipesData.recipes;
console.log(recipes);

// fetching recipes
const fetchRecipes = async () => {
    const response = await fetch("/recipes.json");
    const data = await response.json();
    console.log(data);
};

// add recipes
const saveRecipes = (recipes: Recipe[]) => {
    fs.writeFileSync(filePath, JSON.stringify({ recipes }, null, 2), "utf-8");
};
export const addRecipe = (newRecipe: Recipe) => {
    const data = loadRecipes();
    data.recipes.push(newRecipe);
    saveRecipes(data.recipes);
};
*/


const RecipeList = () => {


    return (
        <>
            <h1 className="text-center top-space">Chef's List</h1>

            <input type="checkbox" id="myCheckbox" />
            <label htmlFor="myCheckbox">Favorites only</label>
            <button style={{float: 'right'}}>New Recipe</button>

            <section>
                <table id="recipes">
                    <thead>
                        <tr>
                            <th>Dish</th>
                            <th>Cuisine</th>
                            <th>Time</th>
                            <th>Skill Level</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* COMPONENT STUFF */}
                        <tr>
                            <td>Test</td>
                            <td className="text-center">Test</td>
                            <td className="text-center">Test</td>
                            <td className="text-center">Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td className="text-center">Test</td>
                            <td className="text-center">Test</td>
                            <td className="text-center">Test</td>
                            <td>Test</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default RecipeList;