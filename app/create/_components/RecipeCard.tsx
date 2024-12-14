import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CookingPot } from "lucide-react";

export interface Recipe {
  name: string;
  description: string;
  ingredients: { [key: string]: string | undefined };
  instructions: string[];
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Card className="p-5 bg-primary-100 dark:bg-zinc-900 border-primary-300 dark:border-primary-800">
      <CardTitle className="text-lg">{recipe.name}</CardTitle>
      <CardDescription>{recipe.description}</CardDescription>
      <CardContent className="p-0">
        {/*Ingredients*/}
        <p className="mt-5 font-semibold text-primary-800">Ingredients:</p>
        <div className="p-3 mt-3 bg-primary-200 dark:bg-zinc-950 rounded-lg">
          {Object.entries(recipe.ingredients).map(([ingredient, amount]) => (
            <div className="flex items-center gap-2 my-1" key={ingredient}>
              <CookingPot size={16} strokeWidth={0.5} />
              <p>
                <strong>{ingredient}</strong>: {amount || "N/A"}
              </p>
            </div>
          ))}
        </div>
        {/*Instructions*/}
        <p className="mt-5 font-semibold text-primary-800">Instructions:</p>
        {recipe.instructions.map((instruction, index) => (
          <div key={index} className="flex items-center my-2 gap-2 text-sm">
            <p className="border border-primary-800 rounded-full py-1 px-2">
              {index + 1}
            </p>
            <p>{instruction}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
