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
    <Card className="p-5 max-w-fit bg-primary-100 border-primary-300">
      <CardTitle className="text-lg">{recipe.name}</CardTitle>
      <CardDescription>{recipe.description}</CardDescription>
      <CardContent className="p-0">
        {/*Ingredients*/}
        <p className="mt-5 font-semibold text-primary-800">Ingredients:</p>
        <div className="p-3 mt-3 bg-primary-200 rounded-lg">
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
        <p className="my-5 font-semibold text-primary-800">Instructions:</p>
        <ul className="space-y-2">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="flex items-center">
              <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 border-primary-800 border text-sm rounded-full mr-3">
                {index + 1}
              </span>
              <span>{instruction}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
