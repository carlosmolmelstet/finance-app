import LoginForm from "@/features/login-form";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <Flex justify="center" align="center" minH="100vh">
      <Card borderRadius={24} mt={4} minW="container.sm">
        <CardHeader>
          <Image
            src="../logo-larger.svg"
            width={200}
            height={200}
            alt="Finance Logo"
          />
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
      </Card>
    </Flex>
  );
}
