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

function MockCard() {
  return (
    <Card borderRadius={16}>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <Text pt="2" fontSize="sm">
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default function Page() {
  return (
    <AuthenticatedLayout>
      <Grid
        templateColumns={{
          base: "repeat(4, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(12, 1fr)",
        }}
        rowGap={8}
        columnGap={4}
        w="100%"
      >
        <GridItem colSpan={{ md: 4, lg: 3 }}>
          <CardStat
            title="Receita"
            value={5100}
            percentage={30.5}
            icon={<WalletIcon h="24px" w="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ md: 4, lg: 3 }}>
          <CardStat
            title="Despesas"
            value={3150}
            percentage={-14.47}
            icon={<CartIcon h="24px" w="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ md: 4, lg: 3 }}>
          <CardStat
            title="Saldo do Mês"
            value={1450}
            icon={<RocketIcon h="24px" w="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ md: 4, lg: 3 }}>
          <CardStat
            title="Total Investido"
            value={24350}
            percentage={15}
            icon={<StatsIcon h="24px" w="24px" />}
          />
        </GridItem>

        <GridItem colSpan={{ base: 4, md: 6 }}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={4}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={4}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 8 }}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 8 }}>
          <MockCard />
        </GridItem>
        <GridItem colSpan={4}>
          <MockCard />
        </GridItem>
      </Grid>
    </AuthenticatedLayout>
  );
}
