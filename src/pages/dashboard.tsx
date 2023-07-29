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
import { useEffect, useState } from "react";
import {
  ExpenseDTO,
  getExpenseByPeriod,
} from "@/services/expenses/get-by-period";
import {
  ExpenseCategoryDTO,
  getAllExpenseCategories,
} from "@/services/expense_categories/get-all";
import ExpensesVsRevenuesChart from "@/features/expenses-vs-revenues-chart";
import {
  RevenueDTO,
  getRevenueByPeriod,
} from "@/services/revenues/get-by-period";
registerLocale("pt", pt);

export default function Page() {
  const [dates, setDates] = useState<{ startDate: Date; endDate: Date }>({
    startDate: moment().subtract(1, "month").toDate(),
    endDate: moment().toDate(),
  });
  const [expenses, setExpenses] = useState<ExpenseDTO[]>([]);
  const [expensesCategories, setExpensesCategories] = useState<
    ExpenseCategoryDTO[]
  >([]);

  const expensesAmout = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  const [revenues, setRevenues] = useState<RevenueDTO[]>([]);

  const revenuesAmout = revenues.reduce((acc, revenue) => {
    return acc + revenue.amount;
  }, 0);

  const expensesByCategory = Object.entries(
    expenses.reduce((acc, expense) => {
      const category = expense.categoryId;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += expense.amount;
      return acc;
    }, {} as { [key: string]: number })
  )
    .sort(([, a], [, b]) => a + b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {} as { [key: string]: number });

  function percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  }

  async function fetchExpenseAndRevenueByPeriod(dates: {
    startDate: Date;
    endDate: Date;
  }) {
    if (!dates.startDate || !dates.endDate) return;

    const expensesData = await getExpenseByPeriod(
      dates.startDate,
      dates.endDate
    );
    setExpenses(expensesData);

    const revenuesData = await getRevenueByPeriod(
      dates.startDate,
      dates.endDate
    );
    setRevenues(revenuesData);

    setDates(dates);
  }

  async function fetchExpenseCategories() {
    const response = await getAllExpenseCategories();
    setExpensesCategories(response);
  }

  useEffect(() => {
    fetchExpenseCategories();
    fetchExpenseAndRevenueByPeriod({
      startDate: dates.startDate,
      endDate: dates.endDate,
    });
  }, []);

  return (
    <AuthenticatedLayout>
      <Grid templateColumns="repeat(12, 1fr)" gap={6} w="100%">
        <GridItem colSpan={12}>
          <Box float="right">
            <DatePicker
              initialDates={{
                startDate: dates.startDate,
                endDate: dates.endDate,
              }}
              callback={fetchExpenseAndRevenueByPeriod}
            />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 12, md: 4 }}>
          <CardStat
            title="Receita"
            value={revenuesAmout}
            icon={<WalletIcon h="24px" w="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <CardStat
            title="Despesas"
            value={expensesAmout}
            icon={<CartIcon h="24px" w="24px" />}
          />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <CardStat
            title="Saldo"
            value={revenuesAmout - expensesAmout}
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
                {Object.keys(expensesByCategory)
                  .slice(0, 6)
                  .map((key) => {
                    const category = expensesCategories.find(
                      (category) => category.id === key
                    );
                    if (!category) return null;
                    return (
                      <GridItem key={key}>
                        <ChartStatistics
                          title={category.name}
                          amount={expensesByCategory[key]}
                          percentage={percentage(
                            expensesByCategory[key],
                            expensesAmout
                          )}
                          icon={<WalletIcon h={"15px"} w={"15px"} />}
                        />
                      </GridItem>
                    );
                  })}
              </Grid>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 7 }}>
          <Card minH="400px" h="100%">
            <CardBody>
              <Flex justify="space-between" align="center" mb={8}>
                <Heading size="md">Despesas e Receitas</Heading>
              </Flex>
              <Box w="100%" h="325px">
                <ExpensesVsRevenuesChart
                  expenses={expenses}
                  revenues={revenues}
                  dates={dates}
                />
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
