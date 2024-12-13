"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const UserInputArea = () => {
  const [userInput, setUserInput] = useState("");
  if (userInput) console.log(userInput);

  return (
    <div className="flex flex-col md:flex-row gap-2 p-1 mx-5 lg:mx-48">
      <Input
        placeholder="Enter your instructions here..."
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button className="w-[138px]">Generate Recipe</Button>
    </div>
  );
};

export default UserInputArea;
