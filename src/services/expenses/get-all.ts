import { financeAPI } from "../finance-api";

export type ExpenseDTO = {
  id: string;
  amount: number;
  date: Date;
  userId: string;
  categoryId: string;
  createdAt: Date;
  updateAt?: Date;
};

export async function getAllExpenses(): Promise<ExpenseDTO[]> {
  const response = await financeAPI.get<ExpenseDTO[]>("expenses");
  return response.data;
}
