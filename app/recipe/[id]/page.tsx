import React from "react";
import UserInputArea from "../_components/UserInputArea";
import prisma from "@/prisma/client";
import RecipeCard from "../_components/RecipeCard";
import RecipeCarousel from "../_components/RecipeCarousel";

const RecipesPage = async ({ params }: { params: { id: string } }) => {
  const recipes = await prisma.recipe.findMany({
    where: {
      promptID: params.id,
    },
  });
  return (
    <div className="mb-10">
      <UserInputArea canUpdate={true} />
      <div className="hidden lg:grid grid-cols-3 items-start gap-5 mt-10 mx-5 lg:mx-48">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
      <RecipeCarousel recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
