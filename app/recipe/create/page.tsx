"use client";

import Image from "next/image";
import { useState } from "react";
import RSkeleton from "../_components/Skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Prompt from "../_components/Prompt";
import Error from "@/app/_components/Error";

const CreatePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<number | null>(null);

  return (
    <div>
      {loading ? (
        <div className="px-6 py-1">
          <div className="flex gap-x-2">
            <Input placeholder="Enter your instructions here..." disabled />
            <Button disabled>Update</Button>
            <Button disabled className="bg-red-500 text-white">
              <Trash2 />
            </Button>
          </div>
          <h2 className="mx-5 lg:mx-36 mt-10 text-xl md:text-2xl font-bold text-primary-800">
            <Skeleton className="h-4 w-64" />
          </h2>
          <RSkeleton />
        </div>
      ) : (
        <>
          <Prompt
            onLoading={(loadingState) => setLoading(loadingState)}
            onError={(error) => setError(error)}
          />
          <div className="w-full mt-10 flex justify-center">
            <Image
              src="/create_image.png"
              alt="hotpot image"
              width={1000}
              height={800}
              className="w-[300px] md:w-[500px] h-[300px] md:h-[500px]"
            />
          </div>
          <div className="text-center text-md font-semibold text-gray-700 md:text-lg mx-5">
            Get creative! Start generating what you crave, like this hotpot for
            a start.
          </div>
        </>
      )}
      {error && <Error error={error} />}
    </div>
  );
};

export default CreatePage;
