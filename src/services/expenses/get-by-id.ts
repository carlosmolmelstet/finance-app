import { ApiResult, api } from "@/utils/api";

export interface Expenses {
  id: string;
  amount: number;
  date: Date;
  userId: string;
  categoryId: string;
  createdAt: Date;
  updateAt?: Date;
}

export async function GetByIdxpense(id: string): Promise<Expenses> {
  const ressult = await api<Expenses>({
    route: "expenses/" + id,
    method: "GET",
  });

  if (ressult.succsses && ressult.data) {
    return ressult.data;
  } else {
    throw ressult.error;
  }
}
