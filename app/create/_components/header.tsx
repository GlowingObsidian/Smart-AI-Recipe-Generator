import { ModeToggle } from "@/app/_components/ToggleThemeButton";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

const MainHeader = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <h2 className="text-lg font-semibold">PlatterBot</h2>
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default MainHeader;
