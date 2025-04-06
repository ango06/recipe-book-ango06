import recipesData from "../recipes.json";
import Dish from "../components/Dish.tsx";
import { Recipe } from "../types/recipe.ts";

const DishOverlay = () => {

    return (
        <div className="top-space overlay">
            {<Dish recipes={recipesData.recipes as Recipe[]} />}
        </div>
    )
};

export default DishOverlay;