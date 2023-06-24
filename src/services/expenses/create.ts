import { financeAPI } from "../finance-api";

export type CreateExpenseDTO = {
  amount: number | string;
  categoryId: string;
  date: Date;
};

export type ExpenseDTO = {
  id: string;
  amount: number;
  date: Date;
  userId: string;
  categoryId: string;
  createdAt: Date;
  updateAt: Date;
};

export async function createExpense(
  data: CreateExpenseDTO
): Promise<ExpenseDTO> {
  const response = await financeAPI.post<ExpenseDTO>("/expenses", {
    ...data,
  });
  return response.data;
}
