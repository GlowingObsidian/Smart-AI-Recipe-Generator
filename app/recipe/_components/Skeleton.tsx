import RecipeCarousel from "./RecipeCarousel";

const RSkeleton = () => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-3 items-start gap-5 mt-5 mx-5 lg:mx-36">
        {[0, 1, 2].map((_, index) => (
          <RecipeCardSkeleton key={index} />
        ))}
      </div>
      <RecipeCarousel loading recipes={[]} />
    </>
  );
};

export default RSkeleton;

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
