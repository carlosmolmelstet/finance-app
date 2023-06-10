import { MdLogout, MdOutlineSettings, MdPersonOutline } from "react-icons/md";

import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import { Navigation } from "../Navigation";
import { useAuth } from "@/context/auth.context";

interface MobileMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

export function MobileMenu({ isOpen, toggle }: MobileMenuProps) {
  const { account, singOut } = useAuth();

  const user = account.user;
  return (
    <Drawer onClose={toggle} isOpen={isOpen} placement="bottom">
      <DrawerOverlay bg="blackAlpha.800" />
      <DrawerContent bg="gray.800" minH="50vh" borderTopRadius={30} pt={8}>
        <DrawerBody px={4}>
          <Image
            src="/logo-larger.svg"
            width={175}
            height={175}
            alt="Finance Logo"
          />
          <Box mt={8}>
            <Navigation />
          </Box>
        </DrawerBody>
        <DrawerFooter
          borderTop="1px solid"
          borderColor="gray.700"
          justifyContent="flex-start"
        >
          <Menu>
            <MenuButton>
              <Flex align="center">
                <Avatar name={user.name} bg="teal.300" size="sm" />
                <Text fontSize="sm" color="gray.500" ml={2}>
                  {user.name}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<MdPersonOutline />}> Perfil</MenuItem>
              <MenuItem icon={<MdOutlineSettings />}>Configurações</MenuItem>
              <MenuDivider />
              <MenuItem icon={<MdLogout />} color="red.500" onClick={singOut}>
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
