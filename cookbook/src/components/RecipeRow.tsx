import { RecipeInfoProps } from "../types/recipe.ts";

const RecipeRow: React.FC<RecipeInfoProps> = ({ recipes }) => {
    return (
        <>
            {recipes.map(recipe => (
                <tr>
                    <td>{recipe.name}</td>
                    <td className="text-center">{recipe.cuisine}</td>
                    <td className="text-center">{recipe.timeNeeded}</td>
                    <td className="text-center">{recipe.skillLevel}</td>
                    <td>{recipe.description}</td>
                </tr>
            ))}
        </>
    )
}

export default RecipeRow;