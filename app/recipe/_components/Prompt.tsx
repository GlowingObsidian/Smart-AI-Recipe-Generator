"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import {} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";

const Prompt = ({
  onLoading,
  onError,
  update,
}: {
  onLoading: (state: boolean) => void;
  onError?: (error: number) => void;
  update?: boolean;
}) => {
  const router = useRouter();
  const params = useParams();
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [preference, setPreference] = useState("");

  useEffect(() => {
    const savedPreference = localStorage.getItem("platterbotPref");
    if (savedPreference) setPreference(savedPreference);
  }, []);

  const onCreate = () => {
    onLoading(true);
    axios
      .post("/api/recipe/generate", {
        userID: user?.id,
        prompt: input + (preference !== "" ? ` Note:${preference}` : ""),
      })
      .then((result) => {
        const promptID = result.data.id;
        router.push(`/recipe/${promptID}`);
        router.refresh();
      })
      .catch((e) => onError && onError(e.response.status))
      .finally(() => onLoading(false));
  };

  const onUpdate = () => {
    onLoading(true);
    axios
      .patch(`/api/recipe/${params.id}`, {
        update: input + (preference !== "" ? ` Note:${preference}` : ""),
      })
      .then(() => router.refresh())
      .catch((e) => onError && onError(e.response.status))
      .finally(() => onLoading(false));
  };

  return (
    <div className="flex px-6 py-1 gap-x-2">
      <Input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your instructions here..."
      />
      {update ? (
        <>
          <Button disabled={input === ""} onClick={onUpdate}>
            Update
          </Button>
          <DeleteButton />
        </>
      ) : (
        <Button disabled={input === ""} onClick={onCreate}>
          Create
        </Button>
      )}
    </div>
  );
};

export default Prompt;
