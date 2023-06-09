import { Box, Flex, FlexProps, Spinner } from "@chakra-ui/react";
import { useAuth } from "@/context/auth.context";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  mainStyle?: FlexProps;
}

export default function AuthenticatedLayout({
  children,
  mainStyle,
}: AuthenticatedLayoutProps) {
  const { isLoading } = useAuth();
  if (isLoading) return <Spinner />;

  return (
    <Flex>
      <Sidebar />
      <Flex direction={"column"} w="100%">
        <Header
          breadcrumbs={[
            {
              title: "Dashboard",
              href: "/dashboard",
            },
          ]}
        />
        <Flex px={{ base: 4, lg: 8 }} {...mainStyle}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
