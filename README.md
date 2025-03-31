# 👨‍🍳 Cookbook

> **This is a 2 part homework assignment, part 1 is due on 4/7 and part 2 is due on 4/14!**

<br>

## 📕 Background
Hello Chef! Hack4Impact-UMD Publishers is honored to have the opportunity to publish your first cookbook. We are a reputed publishing company with several well-known titles to our name, such as Brandon's Burritos, Gavin the Speed Typer, and Overcommitted Krishnan.

H4I-UMD Publishers's top priority is ensuring your cookbook reaches as many people as possible. That is why, in addition to print copies, we create **immersive online experiences** to capture those who do not read books. However, our last programmer just ran away! We're also tight on money since our Finance department only dedicates a small amount to our chefs' immersive online experiences.

We heard that you're a coder on the side. This isn't a threat, but if you want your cookbook to gain any traction you should probably help us with this 😁

<br>

## ✅ Deliverables
> **Please go to this [Figma page](https://www.figma.com/design/RhyRapbsOhwUg6NV7dOEMi/H4I-Bootcamp-Sp25---Cookbook?node-id=1-3&t=wSi6GZeXdI8py665-0), click the play button, and interact with the prototype**

### Navbar
> At the top of every page!
1. Logo/Symbol
2. Navigate to Home Page
3. Navigate to Recipe List
4. Navigate to Recipe Book

### Home Page
1. Picture of yourself
2. Description of your cookbook
 
### Recipe List
#### Add New Recipe 
1. Open overlay
2. Dish Name
3. Image URL
3. Skill Level (select from options)
4. Cuisine (select from options)
5. Time Needed
6. Ingredients (an ingredient consists of a name and quantity, create an interface that allows users to create list of ingredients)
7. Description
8. Steps
9. Close overlay button
#### Favorites Only Button
Only show recipes that have been "favorited"
#### List Header
#### Recipe Entry
1. Dish Name
2. Cuisine
3. Time Required
3. Skill Level (color coded)
4. Description
5. "Remove" Button
6. "Favorite" Button (mark recipe as "favorite")
6. Clicking on any recipe in the list should open an overlay with all information
#### Recipe Overlay
1. Dish Name
2. Picture
3. Description
4. Cuisine
5. Skill Level (color coded)
6. Ingredients
7. Steps
8. Close overlay button

<br>

### Recipe Book
#### Add New Recipe 
1. Open overlay
2. Dish Name
3. Image URL
3. Skill Level (select from options)
4. Cuisine (select from options)
5. Time Needed
6. Ingredients 
7. Description
8. Steps
9. Close overlay button
#### Favorites Only Button
Only show recipes that have been "favorited"
#### Book
##### Left Side
1. Dish Name
2. Picture
3. Description
4. Cuisine
5. Skill Level (color coded)
6. Ingredients
8. Remove recipe button
##### Divider
Create "book-like" feel
##### Right Side
1. Add all the steps
2. "Favorite" button (mark recipe as "favorite")
##### Navigtation Buttons
1. Prev recipe
2. Next recipe

## TypeScript Interface
```
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
```
## 📆 Plan
### Week 1 (04/07)
1. Create all components
2. Store and retrieve all data from recipes.JSON
```
// importing recipes
import recipesData from "../data/recipes.json";

const recipes: Recipe[] = recipesData.recipes;
console.log(recipes);
```
```
// fetching recipes
const fetchRecipes = async () => {
  const response = await fetch("/recipes.json");
  const data = await response.json();
  console.log(data);
};
```
```
// add recipes
const saveRecipes = (recipes: Recipe[]) => {
  fs.writeFileSync(filePath, JSON.stringify({ recipes }, null, 2), "utf-8");
};
export const addRecipe = (newRecipe: Recipe) => {
  const data = loadRecipes();
  data.recipes.push(newRecipe);
  saveRecipes(data.recipes);
};
```
### Week 2 (04/14)
1. Connect to Firebase!