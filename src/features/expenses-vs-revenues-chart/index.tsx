import { InputMask } from "@/components/InputMask/InputMask.component";
import { useAuth } from "@/context/auth.context";
import { SignIn } from "@/services/auth/sign-in";
import {
  ExpenseCategoryDTO,
  getAllExpenseCategories,
} from "@/services/expense_categories/get-all";
import { currencyFormat, stringToNumber } from "@/utils/currency.helper";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dateSchema } from "@/utils/date.helper";
import { z } from "zod";
import { createExpense } from "@/services/expenses/create";
import { updateExpense } from "@/services/expenses/update";
import { ExpenseDTO, getExpenseById } from "@/services/expenses/get-by-id";
import moment from "moment";
import { LineChart } from "@/components/Charts/LineChart";
import { ApexOptions } from "apexcharts";
import lodash from "lodash";
import { RevenueDTO } from "@/services/revenues/get-by-period";

type Dates = {
  startDate: Date;
  endDate: Date;
};

type ExpensesChartProps = {
  expenses: Array<ExpenseDTO>;
  revenues: Array<RevenueDTO>;
  dates: Dates;
};

export default function ExpensesVsRevenuesChart({
  expenses,
  revenues,
  dates,
}: ExpensesChartProps) {
  const months = getPeriod(dates);

  function formatSeries(objetos: ExpenseDTO[]) {
    const groupByDate = lodash.groupBy(objetos, ({ date }) =>
      moment(date).format("MM/YYYY")
    );

    const result = months.map((month) => {
      const amount = groupByDate[month]?.reduce(function (accumulator, item) {
        return accumulator + item.amount;
      }, 0);

      return amount ? amount : 0;
    });

    return result;
  }

  const series: ApexOptions["series"] = [
    {
      name: "Despesas",
      data: formatSeries(expenses),
    },
    {
      name: "Receitas",
      data: formatSeries(revenues),
    },
  ];

  return <LineChart series={series} categories={months} />;
}

function getPeriod({ startDate, endDate }: Dates): string[] {
  const dates: string[] = [];

  const initialMonth = moment(startDate).startOf("month");
  const finalMonth = moment(endDate).startOf("month");

  while (initialMonth.isSameOrBefore(finalMonth)) {
    const date = initialMonth.format("MM/YYYY");
    dates.push(date);
    initialMonth.add(1, "month");
  }

  dates.length <= 1 &&
    dates.push(moment(startDate).add(1, "month").format("MM/YYYY"));

  return dates;
}
