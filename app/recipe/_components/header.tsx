import { ModeToggle } from "@/app/_components/ToggleThemeButton";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const MainHeader = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <Link href="/">
          <Image
            src={"/PlatterBot.png"}
            alt="logo"
            height={800}
            width={1000}
            className="w-[140px] h-[30px]"
          />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default MainHeader;
