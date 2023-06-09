import { Stack } from "@chakra-ui/react";

import { NavItem } from "./NavItem";
import { useNavigation } from "./useNavigation";

export function Navigation() {
  const { navigationItems } = useNavigation();

  return (
    <Stack spacing={4} w="100%">
      {navigationItems.map((item) => (
        <NavItem
          key={item.href}
          title={item.title}
          href={item.href}
          icon={item.icon}
          isActive={item.isActive}
        />
      ))}
    </Stack>
  );
}
