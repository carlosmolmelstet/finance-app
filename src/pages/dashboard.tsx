import { CardStat } from "@/components/CardStat";
import { ChartStatistics } from "@/components/Charts/ChartStatistics";
import { LineChart } from "@/components/Charts/LineChart";
import DatePicker from "@/components/DatePicker";
import { CartIcon, RocketIcon, WalletIcon } from "@/components/Icons/Icons";
import ExpenseForm from "@/features/expense-form";
import ExpensesList from "@/features/expenses-list";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import pt from "date-fns/locale/pt";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthenticatedLayout from "./_layout/Authenticated/Authenticated.layout";
import moment from "moment";
registerLocale("pt", pt);

export default function Page() {
  function callback(dates: { startDate: Date; endDate: Date }) {
    console.log("home", dates);
  }

  return (
    <AuthenticatedLayout>
      <Grid templateColumns="repeat(12, 1fr)" gap={6} w="100%">
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <CardStat
            title="Receita"
            value={7200}
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
          <Card minH="400px" h="100%">
            <CardBody>
              <Heading size="md" mb={8}>
                Despesas por categoria
              </Heading>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                gap={8}
              >
                <GridItem>
                  <ChartStatistics
                    title={"Users"}
                    amount={32984}
                    percentage={20}
                    icon={<WalletIcon h={"15px"} w={"15px"} />}
                  />
                </GridItem>
                <GridItem>
                  <ChartStatistics
                    title={"Users"}
                    amount={32984}
                    percentage={20}
                    icon={<WalletIcon h={"15px"} w={"15px"} />}
                  />
                </GridItem>
                <GridItem>
                  <ChartStatistics
                    title={"Users"}
                    amount={32984}
                    percentage={20}
                    icon={<WalletIcon h={"15px"} w={"15px"} />}
                  />
                </GridItem>
                <GridItem>
                  <ChartStatistics
                    title={"Users"}
                    amount={32984}
                    percentage={20}
                    icon={<WalletIcon h={"15px"} w={"15px"} />}
                  />
                </GridItem>
                <GridItem>
                  <ChartStatistics
                    title={"Users"}
                    amount={32984}
                    percentage={20}
                    icon={<WalletIcon h={"15px"} w={"15px"} />}
                  />
                </GridItem>
                <GridItem>
                  <ChartStatistics
                    title={"Users"}
                    amount={32984}
                    percentage={20}
                    icon={<WalletIcon h={"15px"} w={"15px"} />}
                  />
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 7 }}>
          <Card minH="400px" h="100%">
            <CardBody>
              <Flex justify="space-between" align="center" mb={8}>
                <Heading size="md">Despesas e Receitas</Heading>
                <DatePicker
                  initialDates={{
                    startDate: moment().toDate(),
                    endDate: moment().add(1, "month").toDate(),
                  }}
                  callback={callback}
                />
              </Flex>
              <Box w="100%" h="325px">
                <LineChart />
              </Box>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 8 }}>
          <ExpensesList />
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 4 }}>
          <Card borderRadius={16} h="100%">
            <CardBody>
              <Heading size="md" mb={8}>
                Novo Lançamento
              </Heading>
              <ExpenseForm />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </AuthenticatedLayout>
  );
}
