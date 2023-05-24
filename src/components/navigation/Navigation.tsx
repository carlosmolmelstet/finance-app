"use client";
import { usePathname } from "next/navigation";
import { NavItem, NavItemProps } from "./NavItem";
import { useNavigation } from "./useNavigation";

export function Navigation() {
  const { navigationItems } = useNavigation();

  return (
    <div className="flex flex-col space-y-4">
      {navigationItems.map((item) => (
        <NavItem
          key={item.href}
          title={item.title}
          href={item.href}
          icon={item.icon}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
}
