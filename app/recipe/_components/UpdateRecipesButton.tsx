"use client";

import Loader from "@/app/_components/Loader";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const UpdateRecipesButton = ({ prompt }: { prompt: string }) => {
  const router = useRouter();
  const params = useParams();
  const [loading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    try {
      setIsLoading(true);
      const result = await axios.patch(`/api/recipe/${params.id}`, {
        update: prompt,
      });
      console.log(result.data);
      router.refresh();

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error updating recipes:", error);
    }
  };

  return (
    <>
      {loading && <Loader loading={loading} />}
      <Button onClick={handleOnClick}>Update</Button>
    </>
  );
};

export default UpdateRecipesButton;
