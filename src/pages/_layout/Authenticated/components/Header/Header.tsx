import { useState } from "react";
import {
  MdLogout,
  MdOutlineSegment,
  MdOutlineSettings,
  MdPersonOutline,
} from "react-icons/md";

import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";

import { Breadcrumbs } from "../Breadcrumbs";
import { Breadcrumb } from "../Breadcrumbs/Breadcrumbs";
import { MobileMenu } from "../mobileMenu";
import { useAuth } from "@/context/auth.context";

interface HeaderProps {
  breadcrumbs: Breadcrumb[];
}

export function Header({ breadcrumbs }: HeaderProps) {
  const { account, singOut } = useAuth();
  const user = account.user;
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Flex
      w="100%"
      justify="space-between"
      py={4}
      h={{ base: 24, lg: 28 }}
      px={{ base: 4, lg: 8 }}
    >
      <Flex align="center">
        <Box display={{ base: "flex", lg: "none" }} mr={2}>
          <Image src="/logo.svg" width={32} height={32} alt="Finance Logo" />
        </Box>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </Flex>
      <Menu>
        <MenuButton>
          <Avatar
            bg="teal.300"
            name={user.name}
            h={10}
            w={10}
            display={{ base: "none", lg: "flex" }}
          />
        </MenuButton>
        <MenuList bg="gray.800">
          <MenuItem
            bg="gray.800"
            _hover={{
              bg: "gray.700",
            }}
            icon={<MdPersonOutline />}
          >
            {" "}
            Perfil
          </MenuItem>
          <MenuItem
            bg="gray.800"
            _hover={{
              bg: "gray.700",
            }}
            icon={<MdOutlineSettings />}
          >
            Configurações
          </MenuItem>
          <MenuDivider />
          <MenuItem
            bg="gray.800"
            _hover={{
              bg: "gray.700",
            }}
            icon={<MdLogout />}
            color="red.500"
            onClick={singOut}
          >
            Sair
          </MenuItem>
        </MenuList>
      </Menu>

      <Flex
        align="center"
        justify="center"
        onClick={toggle}
        display={{ base: "flex", lg: "none" }}
        fontSize="3xl"
        color="teal.500"
        p={0}
        _hover={{
          color: "teal.300",
        }}
      >
        <MdOutlineSegment />
      </Flex>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </Flex>
  );
}
