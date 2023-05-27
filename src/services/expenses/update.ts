import { ApiResult, api } from "@/utils/api";

export interface ExpensesResponse {
  amount: number;
  date: Date;
  userId: string;
  categoryId: string;
  createdAt: Date;
  updateAt?: Date;
}

export interface ExpensesRequest {
  id: string;
  amount: number;
  date: Date | string;
  categoryId: string;
}

export async function UpdateExpense(
  data: ExpensesRequest
): Promise<ExpensesResponse> {
  const ressult = await api<ExpensesResponse>({
    route: "expenses",
    method: "PUT",
    data: data,
  });

  if (ressult.succsses && ressult.data) {
    return ressult.data;
  } else {
    throw ressult.error;
  }
}
