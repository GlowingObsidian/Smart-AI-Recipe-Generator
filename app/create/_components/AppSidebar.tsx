import { Bolt } from "lucide-react";

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

const items = [
  {
    id: "1",
    title: "Vegan Pasta with Seasonal Vegetables",
    url: "#",
  },
  {
    id: 2,
    title: "Gluten-Free Breakfast Ideas",
    url: "#",
  },
  {
    id: 3,
    title: "Quick Chicken Dinner for Two",
    url: "#",
  },
  {
    id: 4,
    title: "Low-Carb Snacks with Avocado",
    url: "#",
  },
  {
    id: 5,
    title: "Dairy-Free Desserts to Savor",
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 h-full bg-gradient-to-b from-primary-50 to-primary-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold">
            Your generations
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild className="hover:bg-primary-300">
                    <Link href={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <Bolt /> <p className="font-semibold">Upgrade plan</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
