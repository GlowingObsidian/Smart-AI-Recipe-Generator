"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";

const GenerateRecipesButton = ({ prompt }: { prompt: string }) => {
  const router = useRouter();
  const { user } = useUser();
  const handleOnClick = async () => {
    const result = await axios.post("/api/recipe/generate", {
      userID: user?.id,
      prompt: prompt,
    });

    console.log(result.data);
    const promptID = result.data.newPrompt.id;
    router.push(`/recipe/${promptID}`);
  };
  return <Button onClick={handleOnClick}>Generate</Button>;
};

export default GenerateRecipesButton;
