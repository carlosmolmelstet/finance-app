import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { CartIcon, StatsIcon, WalletIcon } from "@/components/Icons/Icons";
import { NavItemProps } from "./NavItem";

interface NavigationData {
  pathname: string;
  navigationItems: NavItemProps[];
}

export function useNavigation(): NavigationData {
  const { pathname } = useRouter();

  const [navigationItems, setNavigationItems] = useState<NavItemProps[]>([
    { title: "Dashboard", href: "/dashboard", icon: <StatsIcon /> },
    { title: "Receitas", href: "/history", icon: <WalletIcon /> },
    { title: "Despesas", href: "/charge", icon: <CartIcon /> },
  ]);

  useEffect(() => {
    const paths = pathname.split("/").filter((level) => level !== "");

    setNavigationItems((items) =>
      items.map((item) => ({
        ...item,
        isActive: paths.includes(item.href.replace("/", "")),
      }))
    );
  }, [pathname]);

  return { pathname, navigationItems };
}
