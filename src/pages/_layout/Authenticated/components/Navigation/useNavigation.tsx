import { useEffect, useState } from "react";
import {
  MdAddShoppingCart,
  MdHistory,
  MdOutlineDashboard,
} from "react-icons/md";

import { useRouter } from "next/router";

import { NavItemProps } from "./NavItem";
import { StatsIcon, CreditIcon, WalletIcon } from "@/components/Icons/Icons";

interface NavigationData {
  pathname: string;
  navigationItems: NavItemProps[];
}

export function useNavigation(): NavigationData {
  const { pathname } = useRouter();

  const [navigationItems, setNavigationItems] = useState<NavItemProps[]>([
    { title: "Dashboard", href: "/dashboard", icon: <StatsIcon /> },
    { title: "Despesas", href: "/charge", icon: <CreditIcon /> },
    { title: "Receitas", href: "/history", icon: <WalletIcon /> },
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
