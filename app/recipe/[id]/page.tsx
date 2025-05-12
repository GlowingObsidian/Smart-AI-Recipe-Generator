import prisma from "@/prisma/client";
import AllRecipes from "../_components/AllRecipes";

const RecipesPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const recipes = await prisma.recipe.findMany({
    where: {
      promptID: id,
    },
  });

  const prompt = await prisma.prompt.findUnique({ where: { id: id } });

  return (
    <div className="mb-10">
      <AllRecipes prompt={prompt!} recipes={recipes} />
    </div>
  );
};

export default RecipesPage;
