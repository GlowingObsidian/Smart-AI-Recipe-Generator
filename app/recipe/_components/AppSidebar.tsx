"use client";

import { Bolt, Cog, HandPlatter, Trash2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Prompt } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {
  prompts: Prompt[];
}

export default function AppSidebar({ prompts }: Props) {
  const [selected, setSelected] = useState<Prompt | null>(null);
  return (
    <Sidebar className="w-64 h-full bg-gradient-to-b from-primary-50 to-primary-200 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-950">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Link
              href="/recipe/create"
              className="flex items-center justify-between mt-2 p-2 px-4 hover:bg-primary-200 dark:hover:bg-gray-700 rounded-md font-semibold"
              onClick={() => setSelected(null)}
            >
              New Recipe <HandPlatter size={20} strokeWidth={1} />
            </Link>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold">
            Your generations
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {prompts.map((prompt) => (
                <SidebarMenuItem key={prompt.id}>
                  <SidebarMenuButton
                    asChild
                    className={`hover:bg-primary-300 dark:hover:bg-gray-700 ${
                      selected?.id === prompt.id &&
                      "bg-primary-300 dark:bg-gray-700"
                    }`}
                    onClick={() => setSelected(prompt)}
                  >
                    <Link href={`/recipe/${prompt.id}`}>
                      <span>{prompt.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <PreferenceDialog />
        <div className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-primary-300 dark:hover:bg-gray-700">
          <Bolt /> <p className="font-semibold">Upgrade plan</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

const PreferenceDialog = () => {
  const STORAGE_KEY = "platterbotPref";
  const [preference, setPreference] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem(STORAGE_KEY);
    if (savedPreference) setPreference(savedPreference);
  }, []);

  const onSave = () => localStorage.setItem(STORAGE_KEY, preference);
  const onDelete = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPreference("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <div className="flex gap-x-2 p-3 rounded-lg cursor-pointer hover:bg-primary-300 dark:hover:bg-gray-700">
          <Cog /> <p className="font-semibold">Preference</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Saved Preference</DialogTitle>
          <DialogDescription>
            Save your preferences, so that you don&apos;t have to provide it in
            future in the prompt. It will be added automatically.
          </DialogDescription>
        </DialogHeader>
        <Textarea
          placeholder="Write you preference here..."
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        />
        <div className="flex gap-x-2">
          <DialogClose asChild>
            <Button
              className="ml-auto"
              disabled={preference === ""}
              onClick={onSave}
            >
              Save
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="bg-red-500 text-white"
              onClick={onDelete}
              disabled={preference === ""}
            >
              <Trash2 />
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
