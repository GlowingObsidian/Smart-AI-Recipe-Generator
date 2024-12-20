import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:grid-cols-12 lg:py-16 lg:px-6">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your AI-Powered Recipe Companion
          </h1>
          <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Discover recipes tailored to your taste and dietary preferences with
            the power of AI. Simply input ingredients or cuisine types, and let
            our AI do the rest!
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/create"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-800 dark:text-white bg-primary-400 rounded-lg hover:bg-primary-500 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/hero_image.jpg" // Replace with your image path
            alt="AI Recipe Generator Illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
