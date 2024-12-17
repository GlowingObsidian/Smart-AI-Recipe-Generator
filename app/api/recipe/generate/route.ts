import { gemini } from "@/app/services/gemini-client";
import { instruction } from "@/app/services/gemini-instruction";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      text: "You have reached the endpoint for generation. Don't try rat curry, I mean it.",
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body || !body.prompt)
    return NextResponse.json(
      { error: "Prompt missing in body" },
      { status: 400 }
    );

  console.log(body);

  const model = gemini(instruction);
  const output = await model.generateContent(body.prompt);

  try {
    const generation = JSON.parse(output.response.text());

    if (generation.error != null)
      return NextResponse.json({ error: generation.error }, { status: 406 });

    const newPrompt = await prisma.prompt.create({
      data: {
        userID: body.userID,
        title: generation.title,
        prompt: body.prompt,
      },
    });

    generation.recipes.map(
      async (recipe: unknown) =>
        await prisma.recipe.create({
          data: {
            recipeJSON: JSON.stringify(recipe),
            promptID: newPrompt.id,
          },
        })
    );

    return NextResponse.json({ ...newPrompt }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ e }, { status: 500 });
  }
}
