import { Ingredient } from "./ingredient";

export interface Recipe {
    id: string; // unique identifier (generate hash for Firestore document ID)
    name: string;
    isFavorite: boolean; //false by default
    imageURL: string;
    skillLevel: "Beginner" | "Medium" | "Advanced"; 
    timeNeeded: string;
    cuisine: string; //predefine cuisine OPTIONS here
    ingredients: Ingredient[];
    description: string;
    steps: string;
}

// added myself
export interface RecipeInfoProps {
    recipes: Recipe[];
}

export interface DishOverlayProps {
    recipe: Recipe;
    handleClose?: () => void;
}

export interface NewRecipeOverlayProps extends Partial<RecipeInfoProps> {
    handleClose?: () => void;
}

export interface BookPageProps {
    recipe: Recipe;
}