import { ReactNode } from "react";

import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import IconBox from "@/components/Icons/IconBox";

export interface NavItemProps {
  title: string;
  icon: ReactNode;
  href: string;
  isActive?: boolean;
}

export function NavItem({ title, href, icon, isActive }: NavItemProps) {
  return (
    <Link href={href}>
      <Flex
        align="center"
        cursor="pointer"
        color={isActive ? "white" : "gray.600"}
        fontWeight={"semibold"}
        bg={isActive ? "gray.700" : "none"}
        px={4}
        py={3}
        borderRadius={10}
        fontSize="md"
        _hover={{
          color: "gray.100",
        }}
      >
        <IconBox
          bg={isActive ? "teal.300" : "gray.700"}
          color="white"
          h="30px"
          w="30px"
          me="12px"
        >
          {icon}
        </IconBox>
        <Text ml={1}>{title}</Text>
      </Flex>
    </Link>
  );
}
