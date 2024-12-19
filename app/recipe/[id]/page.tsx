import React from "react";
import UserInputArea from "../_components/UserInputArea";
import prisma from "@/prisma/client";
import RecipeCard from "../_components/RecipeCard";
import RecipeCarousel from "../_components/RecipeCarousel";

const RecipesPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const recipes = await prisma.recipe.findMany({
    where: {
      promptID: id,
    },
  });

  const prompt = await prisma.prompt.findUnique({ where: { id: id } });
  return (
    <div className="mb-10">
      <UserInputArea canUpdate={true} />
      <h2 className="mx-5 lg:mx-36 mt-10 text-xl md:text-2xl font-bold text-primary-800">
        {prompt?.title}
      </h2>
      <div className="hidden lg:grid grid-cols-3 items-start gap-5 mt-5 mx-5 lg:mx-36">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
      <RecipeCarousel recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
