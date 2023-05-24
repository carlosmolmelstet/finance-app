import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MdAddShoppingCart,
  MdHistory,
  MdOutlineDashboard,
} from "react-icons/md";
import { NavItemProps } from "./NavItem";

interface NavigationData {
  pathname: string;
  navigationItems: NavItemProps[];
}

export function useNavigation(): NavigationData {
  const pathname = usePathname();

  const [navigationItems, setNavigationItems] = useState<NavItemProps[]>([
    { title: "Dashboard", href: "/dashboard", icon: <MdOutlineDashboard /> },
    { title: "Novo Lançamento", href: "/charge", icon: <MdAddShoppingCart /> },
    { title: "Histórico", href: "/history", icon: <MdHistory /> },
  ]);

  useEffect(() => {
    const paths = pathname.split("/").filter((level) => level !== "");

    console.log("pathname", pathname);
    setNavigationItems((items) =>
      items.map((item) => ({
        ...item,
        isActive: paths.includes(item.href.replace("/", "")),
      }))
    );
  }, [pathname]);

  return { pathname, navigationItems };
}
