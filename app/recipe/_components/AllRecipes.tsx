"use client";

import { Prompt as PromptType, Recipe } from "@prisma/client";
import Prompt from "./Prompt";
import RecipeCard from "./RecipeCard";
import RecipeCarousel from "./RecipeCarousel";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import RSkeleton from "./Skeleton";

const AllRecipes = ({
  prompt,
  recipes,
}: {
  prompt: PromptType;
  recipes: Recipe[];
}) => {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <div className="px-6 py-1">
      <div className="flex gap-x-2">
        <Input placeholder="Enter your instructions here..." disabled />
        <Button disabled>Update</Button>
        <Button disabled className="bg-red-500 text-white">
          <Trash2 />
        </Button>
      </div>
      <h2 className="mx-5 lg:mx-36 mt-10 text-xl md:text-2xl font-bold text-primary-800">
        <Skeleton className="h-4 w-64" />
      </h2>
      <RSkeleton />
    </div>
  ) : (
    <>
      <Prompt update onLoading={(state) => setLoading(state)} />
      <h2 className="mx-5 lg:mx-36 mt-10 text-xl md:text-2xl font-bold text-primary-800">
        {prompt?.title}
      </h2>
      <div className="hidden lg:grid grid-cols-3 items-start gap-5 mt-5 mx-5 lg:mx-36">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
      <RecipeCarousel recipes={recipes} />
    </>
  );
};

export default AllRecipes;
