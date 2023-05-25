import Image from "next/image";
import { Navigation } from "../navigation";
import { NavItemProps } from "../navigation/NavItem";

export function Sidebar() {
  return (
    <div className="sidebar hidden lg:block w-[250px] bg-gray-50 px-4 py-8">
      <Image
        src="/logo-larger.svg"
        width={150}
        height={150}
        alt="Finance Logo"
      />
      <div className="mt-8">
        <Navigation />
      </div>
    </div>
  );
}
