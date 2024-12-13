const Pricing = () => {
  return (
    <section id="pricing" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
          Affordable Plans for Everyone
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 text-center lg:text-xl">
          Whether you’re a casual cook or a professional chef, we’ve got the
          right plan for you.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-50 rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Free
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Perfect for exploring our basic features.
            </p>
            <ul className="mb-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li>✓ Access to 10 basic recipes</li>
              <li>✓ Weekly meal plans</li>
              <li>✓ Limited ingredient combinations</li>
            </ul>
            <a
              href="#"
              className="block px-5 py-3 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Get Started
            </a>
          </div>
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Pro
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Ideal for regular cooks and food enthusiasts.
            </p>
            <ul className="mb-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li>✓ All Free features</li>
              <li>✓ 50 recipes</li>
              <li>✓ Advanced ingredient analysis</li>
            </ul>
            <a
              href="#"
              className="block px-5 py-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              Upgrade to Pro
            </a>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Enterprise
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Designed for restaurants and food industry professionals.
            </p>
            <ul className="mb-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li>✓ All Pro features</li>
              <li>✓ Bulk recipe generation</li>
              <li>✓ API integration</li>
            </ul>
            <a
              href="#"
              className="block px-5 py-3 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
