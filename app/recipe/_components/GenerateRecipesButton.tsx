"use client";

import Error from "@/app/_components/Error";
import Loader from "@/app/_components/Loader";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GenerateRecipesButton = ({ prompt }: { prompt: string }) => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleOnClick = async () => {
    setIsLoading(true);
    axios
      .post("/api/recipe/generate", {
        userID: user?.id,
        prompt: prompt,
      })
      .then((result) => {
        console.log(result.data);
        const promptID = result.data.id;
        router.push(`/recipe/${promptID}`);
        router.refresh();
      })
      .catch((error) => setError(error.response.data.error))
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      {loading && <Loader loading={loading} />}
      {error && <Error error={error} />}
      <Button onClick={handleOnClick}>Generate</Button>
    </>
  );
};

export default GenerateRecipesButton;
