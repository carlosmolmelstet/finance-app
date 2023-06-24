import { financeAPI } from "../finance-api";

export type ExpenseCategoryDTO = {
  id: string;
  name: string;
  color: string;
  userId?: string;
  createdAt: Date;
};

export async function getAllExpenseCategories(): Promise<ExpenseCategoryDTO[]> {
  const response = await financeAPI.get<ExpenseCategoryDTO[]>(
    "/expense-categories"
  );
  return response.data;
}
