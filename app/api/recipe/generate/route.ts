import { NextRequest, NextResponse } from "next/server";

const exampleResponse = {
  title: "Vegan Lunch",
  recipes: [
    {
      title: "Vegan Lentil Soup",
      description:
        "A hearty and flavorful soup packed with protein-rich lentils and warming spices.",
      ingredients: {
        "red lentils": "1 cup",
        "vegetable broth": "4 cups",
        "carrot (diced)": "1 cup",
        "celery (diced)": "1 cup",
        "onion (diced)": "1 cup",
        "garlic cloves (minced)": "2",
        "cumin powder": "1 teaspoon",
        "coriander powder": "1 teaspoon",
        "turmeric powder": "1/2 teaspoon",
        salt: "to taste",
        "black pepper": "to taste",
        "fresh cilantro (chopped)": "for garnish",
      },
      instructions: [
        "Heat a large pot over medium heat. Add the olive oil and sauté the onion, carrot, and celery until softened.",
        "Add the garlic and cook for an additional minute.",
        "Stir in the cumin, coriander, and turmeric powders.",
        "Add the red lentils, vegetable broth, salt, and pepper. Bring to a boil, then reduce heat and simmer for 20-25 minutes, or until the lentils are tender.",
        "Stir in the fresh cilantro and serve hot.",
      ],
      nutritional_info: {
        calories: "250 kcal",
        protein: "15 g",
        carbohydrates: "30 g",
        fat: "5 g",
        fiber: "10 g",
      },
    },
    {
      title: "Chickpea Salad Sandwich",
      description:
        "A delicious and satisfying vegan sandwich with a creamy chickpea salad filling.",
      ingredients: {
        "chickpeas (cooked and drained)": "1 can",
        "celery (chopped)": "1 stalk",
        "red onion (finely chopped)": "1/4 cup",
        "fresh parsley (chopped)": "1/4 cup",
        "lemon juice": "2 tablespoons",
        "olive oil": "2 tablespoons",
        "dijon mustard": "1 teaspoon",
        salt: "to taste",
        "black pepper": "to taste",
        "bread of your choice": "2 slices",
      },
      instructions: [
        "In a medium bowl, combine chickpeas, celery, red onion, parsley, lemon juice, olive oil, dijon mustard, salt, and pepper.",
        "Mix well until combined.",
        "Spread the chickpea salad on the bread slices.",
        "Enjoy immediately or pack for lunch.",
      ],
      nutritional_info: {
        calories: "300 kcal",
        protein: "15 g",
        carbohydrates: "40 g",
        fat: "10 g",
        fiber: "8 g",
      },
    },
    {
      title: "Vegan Quinoa Bowl",
      description:
        "A colorful and nutritious quinoa bowl with roasted vegetables and a creamy tahini dressing.",
      ingredients: {
        quinoa: "1 cup",
        water: "2 tablespoons",
        "bell pepper (chopped)": "1 cup",
        "broccoli florets": "1 cup",
        "cherry tomatoes (halved)": "1 cup",
        "olive oil": "2 tablespoons",
        salt: "to taste",
        "black pepper": "to taste",
        tahini: "1/4 cup",
        "lemon juice": "2 tablespoons",
        "garlic (minced)": "1 clove",
      },
      instructions: [
        "Cook the quinoa according to package instructions.",
        "Preheat oven to 400°F (200°C). Toss the bell pepper, broccoli, and cherry tomatoes with olive oil, salt, and pepper.",
        "Spread the vegetables on a baking sheet and roast for 20-25 minutes, or until tender.",
        "While the vegetables are roasting, whisk together the tahini, lemon juice, water, and garlic in a small bowl.",
        "Once the quinoa and vegetables are cooked, assemble the bowls. Add quinoa, roasted vegetables, and drizzle with tahini dressing.",
        "Enjoy immediately or store in the refrigerator for later.",
      ],
      nutritional_info: {
        calories: "400 kcal",
        protein: "10 g",
        carbohydrates: "50 g",
        fat: "15 g",
        fiber: "8 g",
      },
    },
  ],
};

export async function GET() {
  return NextResponse.json(
    { text: "You have reached the endpoint for generation. POST here." },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body || !body.prompt)
    return NextResponse.json(
      { error: "Prompt missing in body" },
      { status: 404 }
    );

  console.log(body.prompt);

  return NextResponse.json({ generation: exampleResponse }, { status: 200 });
}
