import { addDoc, collection, deleteDoc, DocumentReference, getDocs, query, updateDoc, where } from "firebase/firestore";
import { Firestore } from 'firebase/firestore';

import { db } from "./config/firebase.ts";
import { Recipe } from "./types/recipe.ts";

// get all recipes
export async function getRecipes(db: Firestore) {
    const recipesCol = collection(db, 'recipes');
    const recipeSnapshot = await getDocs(recipesCol);
    const recipeList = recipeSnapshot.docs.map(doc => doc.data()) as Recipe[];
    return recipeList;
}

// get a recipe by name
export async function getRecipe(db: Firestore, name: string){
    const recipesCol = collection(db, "recipes");
    const q = query(recipesCol, where("name", "==", name));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        console.warn(`No recipe found with dish name: ${name}`);
        return null;
    }

    return snapshot.docs[0].ref;
}

// add a new recipe
export async function addRecipe(db: Firestore, recipe: Recipe){ // interface
    const recipes = collection(db, "recipes");
    await addDoc(recipes, {
        name: recipe.name,
        isFavorite: recipe.isFavorite,
        imageURL: recipe.imageURL,
        skillLevel: recipe.skillLevel,
        timeNeeded: recipe.timeNeeded,
        cuisine: recipe.cuisine,
        ingredients: recipe.ingredients,
        description: recipe.description,
        steps: recipe.steps,
    });
}

// remove a recipe
export async function removeRecipe(recipe: DocumentReference){
    await deleteDoc(recipe);
}

// handling favorites
export async function changeFavorite(recipe: DocumentReference, current: boolean){
    await updateDoc(recipe, {
        isFavorite: !current
    });
}

// testing
export async function main() {
    const recipes = await getRecipes(db)
    console.log("Handle recipes file: ", recipes);
}

main();