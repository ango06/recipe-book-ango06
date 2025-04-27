import { useEffect, useState } from 'react';

import { getFirestore } from "firebase/firestore";
import { getRecipe, getRecipes, changeFavorite } from "../handleRecipes.ts";

import { BookPageProps } from "../types/recipe.ts";
import { Recipe } from "../types/recipe.ts";

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Page: React.FC<BookPageProps> = ({ recipe }) => {
    const db = getFirestore();

    // local copy of recipe list
    const [localRecipes, setLocalRecipes] = useState<Recipe[]>([]); 
    // const [currentRecipe, setCurrentRecipe] = useState(recipe);
    // to update it when it actually changes?

    // upon mount or db change
    useEffect(() => {
        async function fetchData() {
            const recipeList = await getRecipes(db);
            setLocalRecipes(recipeList);
            // setCurrentRecipe(recipe);
        }
        fetchData();
    }, [db, recipe]);

    // icon style
    const bookmarkStyle: React.CSSProperties = {
        position: 'absolute',
        right: 0,
        margin: 0,
        fontSize: '40px',
        cursor: 'pointer'
    };

    const toggleFavorite = async (recipe: Recipe) => {
        const currentRecipe = recipe;

        try {
            const currentRecipeReference = await getRecipe(db, currentRecipe.name);
            if (!currentRecipeReference){
                console.warn("Recipe reference not found.");
                return;
            }

            await changeFavorite(currentRecipeReference, currentRecipe.isFavorite);
    
            // Update the local state so the UI can update immediately
            const updatedRecipes = localRecipes.map(recipe =>
                recipe.id === currentRecipe.id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
            );
            setLocalRecipes(updatedRecipes);
            console.log("FAVORITE UPDATED")
        } catch (err) {
            console.error("Failed to toggle favorite:", err);
        }
    };

    return (
        <>
            <div className="page scroll">
                <h2>{recipe.name}</h2>
                <img src={recipe.imageURL} style={{width: '100%', height: '50%'}}></img>
                <p className="text-center">{recipe.description}</p>
                <p><b>Cuisine:</b> {recipe.cuisine}</p>
                <p><b>Time required:</b> {recipe.timeNeeded}</p>
                <p><b>Skill level:</b> {recipe.skillLevel}</p>
                <p><b>Ingredients:</b> </p>
                <ul>
                    {recipe.ingredients.map(ingredient => <li key={ingredient.name}>{ingredient.name} - {ingredient.quantity}</li>)}
                </ul>
            </div>
            <div id="divider"></div>
            <div className="page scroll">
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative'}}>
                    {recipe.isFavorite ? (
                            <BookmarkIcon
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(recipe);
                                }}
                                sx={bookmarkStyle}
                            />
                        ) : (
                            <BookmarkBorderIcon
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(recipe);
                                }}
                                sx={bookmarkStyle}
                            />
                    )}
                    <h2 className="text-center">Steps</h2>
                </div>
                <p>{recipe.steps}</p>
            </div>
        </>
    )
}

export default Page;