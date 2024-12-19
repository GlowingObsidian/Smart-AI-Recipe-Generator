import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "@prisma/client";
import { CookingPot, Egg } from "lucide-react";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const parsedRecipe = JSON.parse(recipe.recipeJSON);
  return (
    <Card className="p-5 max-w-fit bg-primary-100 dark:bg-zinc-900 border-primary-300 dark:border-primary-800">
      <CardTitle className="text-lg">{parsedRecipe.title}</CardTitle>
      <CardDescription>{parsedRecipe.description}</CardDescription>
      <CardContent className="p-0">
        {/*Ingredients*/}
        <p className="mt-5 font-semibold text-primary-800">Ingredients:</p>
        <div className="p-3 mt-3 bg-primary-200 dark:bg-zinc-950 rounded-lg">
          {Object.entries(parsedRecipe.ingredients).map(
            ([ingredient, amount]) => (
              <div className="flex items-center gap-2 my-1" key={ingredient}>
                <CookingPot size={16} strokeWidth={0.5} />
                <p>
                  <strong>{ingredient}</strong>: {String(amount) || "N/A"}
                </p>
              </div>
            )
          )}
        </div>
        {/*Instructions*/}
        <p className="my-5 font-semibold text-primary-800">Instructions:</p>
        <ul className="space-y-2">
          {parsedRecipe.instructions.map(
            (instruction: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 border-primary-800 border text-sm rounded-full mr-3">
                  {index + 1}
                </span>
                <span>{instruction}</span>
              </li>
            )
          )}
        </ul>
        {/*Nutritional Info*/}
        <p className="mt-5 font-semibold text-primary-800">
          Nutritional Information:
        </p>
        <div className="p-3 mt-3 bg-primary-200 dark:bg-zinc-950 rounded-lg">
          {Object.entries(parsedRecipe.nutritional_info).map(
            ([nutrient, amount]) => (
              <div className="flex items-center gap-2 my-1" key={nutrient}>
                <Egg size={16} strokeWidth={0.5} />
                <p>
                  <strong>{nutrient}</strong>: {String(amount) || "N/A"}
                </p>
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
