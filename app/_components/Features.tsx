const Features = () => {
  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Why Choose Our Recipe Generator?
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Discover the benefits of using AI for your culinary adventures. From
          custom meal plans to waste reduction, we have got you covered!
        </p>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Personalized Recipes
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Tailored recipes based on your preferences, dietary restrictions,
              and available ingredients.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Save Time & Reduce Waste
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Input leftover ingredients, and our AI will create delicious
              recipes, minimizing food waste.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Meal Planning Made Easy
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Generate weekly meal plans with shopping lists to simplify your
              cooking routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
