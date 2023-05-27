import { ApiResult, api } from "@/utils/api";

export interface ExpenseCategories {
  color: string;
  id: string;
  name: string;
  userId?: string;
}

export async function GetAllExpenseCategories(): Promise<ExpenseCategories[]> {
  const ressult = await api<ExpenseCategories[]>({
    route: "expense-categories",
    method: "GET",
  });

  if (ressult.succsses && ressult.data) {
    return ressult.data;
  } else {
    throw ressult.error;
  }
}
