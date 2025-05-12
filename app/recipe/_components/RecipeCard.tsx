"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "@prisma/client";
import { Check, CookingPot, Copy, Egg, Share } from "lucide-react";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const parsedRecipe = JSON.parse(recipe.recipeJSON);
  return (
    <Card className="p-5 max-w-fit bg-primary-100 dark:bg-zinc-900 border-primary-300 dark:border-primary-800">
      <CardTitle className="text-lg flex justify-between">
        {parsedRecipe.title}
        <ShareDialog id={recipe.id} />
      </CardTitle>
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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ShareDialog = ({ id }: { id: string }) => {
  const [copied, setCopied] = useState(false);
  const [link, setLink] = useState("");

  useEffect(() => setLink(window.location.origin + `/shared/${id}`), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Share className="size-5" />
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Share Recipe</DialogTitle>
          <DialogDescription>
            Copy the recipe link to share with everyone!
          </DialogDescription>
          <div className="flex items-center gap-3 mt-4 bg-muted p-3 rounded-lg border text-sm">
            <Input
              value={link}
              readOnly
              className="break-all text-muted-foreground"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="shrink-0"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
