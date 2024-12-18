import { Bolt, HandPlatter } from "lucide-react";

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

interface Props {
  prompts: Prompt[];
}

export default async function AppSidebar({ prompts }: Props) {
  return (
    <Sidebar className="w-64 h-full bg-gradient-to-b from-primary-50 to-primary-200 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-950">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Link
              href="/recipe/create"
              className="flex items-center justify-between mt-2 p-2 px-4 hover:bg-primary-200 dark:hover:bg-gray-700 rounded-md font-semibold"
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
                    className="hover:bg-primary-300 dark:hover:bg-gray-700"
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
        <div className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-primary-200 dark:hover:bg-gray-700">
          <Bolt /> <p className="font-semibold">Upgrade plan</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
