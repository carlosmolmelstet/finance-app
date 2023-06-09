import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

interface IconBoxProps extends FlexProps {
  children: React.ReactNode;
}

export default function IconBox({ children, ...rest }: IconBoxProps) {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"12px"}
      {...rest}
    >
      {children}
    </Flex>
  );
}
