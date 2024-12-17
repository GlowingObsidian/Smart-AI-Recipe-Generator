"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import RecipeCard, { Recipe } from "./RecipeCard";
import { useState, useEffect } from "react";

function RecipeCarousel({ recipes }: { recipes: Recipe[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mt-10 space-y-2 visible lg:hidden">
      <p className="text-center font-bold">
        Recipe {current} of {count}
      </p>
      <Carousel setApi={setApi} className="w-full max-w-xs mx-auto md:max-w-md">
        <CarouselContent>
          {recipes.map((recipe, index) => (
            <CarouselItem key={index}>
              <RecipeCard recipe={recipe} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default RecipeCarousel;
