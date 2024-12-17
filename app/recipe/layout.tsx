import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";
import MainHeader from "./_components/header";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";

export const dynamic = "force-dynamic";

export default async function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) return console.log("Unauthorized user");

  const prompts = await prisma.prompt.findMany({
    where: {
      userID: userId,
    },
  });
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen overflow-hidden">
        <AppSidebar prompts={prompts} />
        <div className="flex flex-col flex-1">
          <header>
            <MainHeader />
          </header>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
