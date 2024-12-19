"use client";

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
  const handleOnClick = async () => {
    try {
      setIsLoading(true);
      const result = await axios.post("/api/recipe/generate", {
        userID: user?.id,
        prompt: prompt,
      });
      console.log(result.data);
      const promptID = result.data.id;

      setIsLoading(false);

      router.push(`/recipe/${promptID}`);
      router.refresh();
    } catch (error) {
      setIsLoading(false);
      console.error("Error generating recipes", error);
    }
  };
  return (
    <>
      {loading && <Loader loading={loading} />}
      <Button onClick={handleOnClick}>Generate</Button>
    </>
  );
};

export default GenerateRecipesButton;
