"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";
import { Recipe } from "@prisma/client";

function RecipeCarousel({
  recipes,
  loading,
}: {
  recipes: Recipe[];
  loading?: boolean;
}) {
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
          {loading
            ? [0, 1, 2].map((_, index) => (
                <CarouselItem key={index}>
                  <RecipeCardSkeleton />
                </CarouselItem>
              ))
            : recipes.map((recipe, index) => (
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

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const RecipeCardSkeleton = () => {
  return (
    <Card className="p-5 max-w-1/3 bg-primary-100 dark:bg-zinc-900 border-primary-300 dark:border-primary-800">
      <CardTitle className="text-lg">
        <Skeleton className="h-6 w-2/3" />
      </CardTitle>
      <CardDescription>
        <Skeleton className="h-4 mt-2" />
        <Skeleton className="h-4 mt-2" />
      </CardDescription>
      <CardContent className="p-0 mt-5">
        {/* Ingredients */}
        <p className="font-semibold text-primary-800">Ingredients:</p>
        <div className="p-3 mt-3 bg-primary-200 dark:bg-zinc-950 rounded-lg space-y-2">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-3/4" />
          ))}
        </div>

        {/* Instructions */}
        <p className="my-5 font-semibold text-primary-800">Instructions:</p>
        <ul className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </ul>

        {/* Nutritional Info */}
        <p className="mt-5 font-semibold text-primary-800">
          Nutritional Information:
        </p>
        <div className="p-3 mt-3 bg-primary-200 dark:bg-zinc-950 rounded-lg space-y-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-64" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
