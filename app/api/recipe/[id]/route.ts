import { gemini } from "@/app/services/gemini-client";
import { update_instruction } from "@/app/services/gemini-instruction";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const body = await request.json();

  if (!body || !body.update)
    return NextResponse.json(
      { error: "Update prompt missing in body" },
      { status: 400 }
    );

  const promptPresent = await prisma.prompt.findUnique({
    where: {
      id,
    },
    include: {
      recipes: true,
    },
  });

  if (promptPresent) {
    const recipes = promptPresent.recipes.map((recipe) =>
      JSON.parse(recipe.recipeJSON)
    );
    const model = gemini(update_instruction(JSON.stringify(recipes)));

    try {
      const output = await model.generateContent(body.update);
      const updatedRecipes = JSON.parse(output.response.text());

      if (updatedRecipes.error != null)
        return NextResponse.json(
          { error: updatedRecipes.error },
          { status: 406 }
        );

      console.log(updatedRecipes);

      await prisma.recipe.deleteMany({
        where: {
          promptID: id,
        },
      });

      updatedRecipes.recipes.map(
        async (recipe: unknown) =>
          await prisma.recipe.create({
            data: {
              recipeJSON: JSON.stringify(recipe),
              promptID: id,
            },
          })
      );

      return NextResponse.json({ ...updatedRecipes }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ e }, { status: 500 });
    }
  }

  return NextResponse.json({}, { status: 404 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const promptPresent = await prisma.prompt.findUnique({
    where: {
      id,
    },
  });

  if (promptPresent) {
    await prisma.prompt.delete({
      where: {
        id: promptPresent.id,
      },
    });

    return NextResponse.json({ id: promptPresent.id }, { status: 200 });
  }

  return NextResponse.json({}, { status: 404 });
}
