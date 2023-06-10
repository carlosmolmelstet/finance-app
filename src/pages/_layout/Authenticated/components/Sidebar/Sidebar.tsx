import { Flex } from "@chakra-ui/react";
import Image from "next/image";

import { Navigation } from "../Navigation";

export function Sidebar() {
  return (
    <Flex
      direction={"column"}
      minH="100vh"
      w="300px"
      px={6}
      py={8}
      display={{ base: "none", xl: "flex" }}
      align={"center"}
    >
      <Image
        src="/logo-larger.svg"
        width={200}
        height={200}
        alt="Finance Logo"
      />
      <Flex mt={8} w="100%">
        <Navigation />
      </Flex>
    </Flex>
  );
}
