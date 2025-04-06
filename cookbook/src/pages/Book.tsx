import recipesData from "../recipes.json";
import Page from "../components/Page.tsx";
import { Recipe } from "../types/recipe.ts";

const RecipeBook = () => {

    const recipes = recipesData.recipes;
    
    return (
        <>
            <h1 className="text-center top-space">Cookbook</h1>

            <input type="checkbox" id="myCheckbox" />
            <label htmlFor="myCheckbox">Favorites only</label>
            <button className="new-recipe-button">New Recipe</button>
            <br />

            <div id="book" className="flexbox">
                {<Page recipes={recipes as Recipe[]} />}
            </div>
        
            <div className="page-button">
                <button>L</button>
                <button>R</button>
            </div>
        </>
    );
};

export default RecipeBook;

/* 
            <div id="book" className="flexbox">
                <div id="page">
                    <h2>Dish Name</h2>
                    <img src={empty} style={{width: '100%', height: '50%'}}></img>
                    <p className="text-center">Description</p>
                    <p>Cuisine: </p>
                    <p>Time required: </p>
                    <p>Skill level: </p>
                    <p>Ingredients:</p>
                    <ul>
                        <ol>First </ol>
                    </ul>
                </div>
                <div id="divider" />
                <div id="page">
                    <h2 className="text-center">Steps</h2>
                    <p>Steps, steps, steps, Steps, steps, steps, Steps, steps, steps, Steps, steps, steps, pSteps, steps, steps</p>
                </div>
            </div>
*/