import { useNavigate } from "react-router";

import recipesData from "../recipes.json";
import RecipeRow from "../components/RecipeRow.tsx";
import { Recipe } from "../types/recipe.ts";


const RecipeList = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/new-recipe");
    };

    return (
        <>
            <h1 className="text-center top-space">Chef's List</h1>

            <input type="checkbox" id="myCheckbox" />
            <label htmlFor="myCheckbox">Favorites only</label>
            <button className="new-recipe-button" onClick={handleClick}>New Recipe</button>

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
                        {<RecipeRow recipes={recipesData.recipes as Recipe[]} />}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default RecipeList;