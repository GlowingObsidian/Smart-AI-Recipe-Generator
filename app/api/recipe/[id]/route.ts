import { NextRequest, NextResponse } from "next/server";

const updatedResponse = {
  title: "Vegan Diabetic Hot Dogs",
  recipes: [
    {
      title: "Spicy Vegan Hot Dogs",
      description:
        "A spicy vegan hot dog that's perfect for those who want a little heat. Made with plant-based sausages and topped with a tangy chili sauce.",
      ingredients: {
        "vegan hot dogs": "2",
        "vegan hot dog buns": "2",
        "vegan chili sauce": "1/4 cup",
        "vegan mayonnaise": "1 tablespoon",
        "chopped green onions": "2 tablespoons",
        "pickled jalapeños (chopped)": "1 tablespoon",
      },
      instructions: [
        "Cook the vegan hot dogs according to package instructions.",
        "Warm the hot dog buns.",
        "Top each hot dog with vegan chili sauce, vegan mayonnaise, green onions, and pickled jalapeños.",
        "Serve immediately.",
      ],
      nutritional_info: {
        calories: "300 kcal",
        protein: "20 g",
        carbohydrates: "30 g",
        fat: "10 g",
        fiber: "5 g",
      },
    },
    {
      title: "Classic Vegan Hot Dogs",
      description:
        "A classic vegan hot dog, topped with ketchup, mustard, and relish. Simple, delicious, and perfect for a quick and easy meal.",
      ingredients: {
        "vegan hot dogs": "2",
        "vegan hot dog buns": "2",
        ketchup: "2 tablespoons",
        mustard: "1 tablespoon",
        relish: "1 tablespoon",
      },
      instructions: [
        "Cook the vegan hot dogs according to package instructions.",
        "Warm the hot dog buns.",
        "Top each hot dog with ketchup, mustard, and relish.",
        "Serve immediately.",
      ],
      nutritional_info: {
        calories: "250 kcal",
        protein: "15 g",
        carbohydrates: "30 g",
        fat: "5 g",
        fiber: "5 g",
      },
    },
    {
      title: "BBQ Vegan Hot Dogs",
      description:
        "A flavorful vegan hot dog topped with a tangy BBQ sauce. Perfect for a summer cookout.",
      ingredients: {
        "vegan hot dogs": "2",
        "vegan hot dog buns": "2",
        "vegan BBQ sauce": "1/4 cup",
        "chopped onions": "2 tablespoons",
        "chopped bell peppers": "2 tablespoons",
      },
      instructions: [
        "Cook the vegan hot dogs according to package instructions.",
        "Warm the hot dog buns.",
        "Top each hot dog with BBQ sauce, onions, and bell peppers.",
        "Serve immediately.",
      ],
      nutritional_info: {
        calories: "350 kcal",
        protein: "20 g",
        carbohydrates: "40 g",
        fat: "10 g",
        fiber: "6 g",
      },
    },
  ],
};

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //if ID not found return 404
  const { id } = await params;
  console.log(id);
  const body = await request.json();

  if (!body || !body.update)
    return NextResponse.json(
      { error: "Update is not present." },
      { status: 404 }
    );

  console.log(body.update);
  return NextResponse.json({ update: updatedResponse }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  console.log(id);
  //if ID not found return 404
  return NextResponse.json({ id }, { status: 200 });
}
