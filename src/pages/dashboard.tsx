import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  StackDivider,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import AuthenticatedLayout from "./_layout/Authenticated/Authenticated.layout";
import { StarIcon } from "@chakra-ui/icons";
import {
  CreditIcon,
  WalletIcon,
  CartIcon,
  RocketIcon,
  StatsIcon,
} from "@/components/Icons/Icons";
import IconBox from "@/components/Icons/IconBox";
import { CardStat } from "@/components/CardStat";
import { financeAPI } from "@/services/finance-api";

function MockCard({ children }: { children: React.ReactNode }) {
  return (
    <Card borderRadius={16} h="400px">
      <CardBody>{children}</CardBody>
    </Card>
  );
}

export default function Page() {
  return (
    <AuthenticatedLayout>
      <Grid templateColumns="repeat(12, 1fr)" gap={6} w="100%">
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <CardStat
            title="Receita"
            value={5100}
            percentage={30.5}
            icon={<WalletIcon h="24px" w="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <CardStat
            title="Despesas"
            value={3150}
            percentage={-14.47}
            icon={<CartIcon h="24px" w="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <CardStat
            title="Saldo do Mês"
            value={1450}
            icon={<RocketIcon h="24px" w="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 5 }}>
          <MockCard>Grafico por despesas</MockCard>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 7 }}>
          <MockCard>GRafico por mes</MockCard>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 8 }}>
          <MockCard>Ultimos Lançamentos</MockCard>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <MockCard>Novo Lan;camento</MockCard>
        </GridItem>
      </Grid>
    </AuthenticatedLayout>
  );
}
