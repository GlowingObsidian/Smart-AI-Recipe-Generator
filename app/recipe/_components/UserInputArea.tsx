"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import GenerateRecipesButton from "./GenerateRecipesButton";
import UpdateRecipesButton from "./UpdateRecipesButton";

const UserInputArea = ({ canUpdate = false }: { canUpdate?: boolean }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-2 p-1 mx-5 lg:mx-48">
      <Input
        placeholder="Enter your instructions here..."
        onChange={(e) => setUserInput(e.target.value)}
      />
      {canUpdate ? (
        <UpdateRecipesButton />
      ) : (
        <GenerateRecipesButton prompt={userInput} />
      )}
    </div>
  );
};

export default UserInputArea;
