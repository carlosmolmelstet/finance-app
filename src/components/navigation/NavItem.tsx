import Link from "next/link";
import { ReactNode } from "react";

export interface NavItemProps {
  title: string;
  icon: ReactNode;
  href: string;
  isActive?: boolean;
}

export function NavItem({ title, href, icon, isActive }: NavItemProps) {
  const baseClass =
    "flex items-center space-x-1 font-normal hover:text-emerald-500 text-lg cursor-pointer";
  const activeClass = isActive ? "text-emerald-500" : "text-gray-500";

  return (
    <Link href={href} className={`${baseClass} ${activeClass}`}>
      {icon}
      <p>{title}</p>
    </Link>
  );
}
