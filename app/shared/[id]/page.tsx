import RecipeCard from "@/app/recipe/_components/RecipeCard";
import prisma from "@/prisma/client";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const recipe = await prisma.recipe.findUnique({
    where: {
      id,
    },
  });

  if (!recipe) return notFound();

  return (
    <div className="w-full">
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex justify-center items-center">
            <Link href="/">
              <Image
                src={"/PlatterBot.png"}
                alt="logo"
                height={800}
                width={1000}
                className="w-[210px] h-[45px]"
              />
            </Link>
          </div>
        </nav>
      </header>
      <div className="w-full flex justify-center p-5">
        <RecipeCard recipe={recipe} />
      </div>
    </div>
  );
};

export default page;
