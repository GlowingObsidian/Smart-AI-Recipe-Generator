import React from "react";
import UserInputArea from "./_components/UserInputArea";
import RecipeCard from "./_components/RecipeCard";
import RecipeCarousel from "./_components/RecipeCarousel";

const CreatePage = () => {
  const recipes = [
    {
      name: "Garlic Parmesan Pasta",
      description:
        "A simple and flavorful pasta dish with a cheesy garlic sauce.",
      ingredients: {
        pasta: "1 pound (your choice)",
        garlic: "4 cloves, minced",
        "parmesan cheese": "1 cup, grated",
        oregano: "1 teaspoon, dried",
        butter: "2 tablespoons",
        "olive oil": "2 tablespoons",
        salt: "to taste",
        "black pepper": "to taste",
      },
      instructions: [
        "Cook pasta according to package directions.",
        "While pasta cooks, melt butter and olive oil in a pan. Add minced garlic and sauté until fragrant (about 1 minute).",
        "Stir in oregano, salt, and pepper.",
        "Drain pasta and add it to the pan with the garlic mixture.",
        "Stir in parmesan cheese until melted and creamy.",
        "Serve immediately.",
      ],
    },
    {
      name: "Pasta with Garlic, Oregano, and Blended Cheese Sauce",
      description:
        "Creamy pasta dish with a vibrant blend of cheese and herbs.",
      ingredients: {
        pasta: "1 pound (your choice)",
        garlic: "6 cloves, minced",
        "cheddar cheese": "1/2 cup, grated",
        "mozzarella cheese": "1/2 cup, grated",
        "parmesan cheese": "1/4 cup, grated",
        oregano: "2 teaspoons, dried",
        milk: "1 cup",
        butter: "2 tablespoons",
        salt: "to taste",
        "black pepper": "to taste",
      },
      instructions: [
        "Cook pasta according to package directions.",
        "While pasta cooks, melt butter in a saucepan. Add minced garlic and sauté until fragrant.",
        "Stir in milk and bring to a simmer. Reduce heat and let it simmer for 5-7 minutes, until slightly thickened.",
        "Reduce heat to low, and stir in all the cheeses until melted and smooth. Add oregano, salt, and pepper.  Stir until well combined.",
        "Drain pasta and add it to the cheese sauce. Toss to coat evenly.",
        "Serve immediately.",
      ],
    },
    {
      name: "Baked Pasta with Garlic, Oregano, and Cheese",
      description: "A hearty baked pasta dish with a flavorful topping.",
      ingredients: {
        pasta: "1 pound (short pasta like penne or rigatoni)",
        garlic: "4 cloves, minced",
        "mozzarella cheese": "1 cup, shredded",
        "parmesan cheese": "1/2 cup, grated",
        oregano: "1 tablespoon, dried",
        "tomato sauce": "1 (24 ounce) jar",
        "olive oil": "2 tablespoons",
        salt: "to taste",
        "black pepper": "to taste",
      },
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "Cook pasta according to package directions. Drain.",
        "In a large bowl, combine cooked pasta, tomato sauce, minced garlic, oregano, salt, and pepper. Mix well.",
        "Pour mixture into a greased 9x13 inch baking dish.",
        "Sprinkle mozzarella and parmesan cheese evenly over the top.",
        "Bake for 20-25 minutes, or until cheese is melted and bubbly and pasta is heated through.",
        "Let cool slightly before serving.",
      ],
    },
  ];
  return (
    <div className="mb-10">
      <UserInputArea />
      <div className="hidden lg:grid grid-cols-3 items-start gap-5 mt-10 mx-5 lg:mx-48">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.name} />
        ))}
      </div>
      <RecipeCarousel recipes={recipes} />
    </div>
  );
};

export default CreatePage;
