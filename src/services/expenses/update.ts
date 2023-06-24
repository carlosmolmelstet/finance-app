import { financeAPI } from "../finance-api";

export type UpdateExpenseDTO = {
  id: string;
  amount: number | string;
  date: Date;
  categoryId: string;
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

export async function updateExpense(
  data: UpdateExpenseDTO
): Promise<ExpenseDTO> {
  const response = await financeAPI.put<ExpenseDTO>("/expenses", {
    ...data,
  });
  return response.data;
}
