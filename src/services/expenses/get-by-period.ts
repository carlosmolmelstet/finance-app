import moment from "moment";
import { financeAPI } from "../finance-api";

export type ExpenseDTO = {
  id: string;
  amount: number;
  date: Date;
  userId: string;
  categoryId: string;
  createdAt?: Date;
  updateAt?: Date;
};

export async function getExpenseByPeriod(
  startDate: Date,
  endDate: Date
): Promise<ExpenseDTO[]> {
  const response = await financeAPI.get<ExpenseDTO[]>(
    `expenses/period?startDate=${moment(startDate).format(
      "YYYY-MM-DD"
    )}&endDate=${moment(endDate).format("YYYY-MM-DD")}`
  );
  return response.data;
}
