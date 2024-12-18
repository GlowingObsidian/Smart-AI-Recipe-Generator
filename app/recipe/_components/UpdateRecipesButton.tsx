"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const UpdateRecipesButton = ({ prompt }: { prompt: string }) => {
  const router = useRouter();
  const params = useParams();

  const handleOnClick = async () => {
    try {
      const result = await axios.patch(`/api/recipe/${params.id}`, {
        update: prompt,
      });
      console.log(result.data);
      router.refresh();
    } catch (error) {
      console.error("Error updating recipes:", error);
    }
  };

  return <Button onClick={handleOnClick}>Update</Button>;
};

export default UpdateRecipesButton;
