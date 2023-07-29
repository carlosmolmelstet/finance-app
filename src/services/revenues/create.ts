import { financeAPI } from "../finance-api";

export type CreateRevenueDTO = {
  amount: number | string;
  categoryId: string;
  date: Date;
};

export type RevenueDTO = {
  id: string;
  amount: number;
  date: Date;
  userId: string;
  categoryId: string;
  createdAt: Date;
  updateAt: Date;
};

export async function createRevenue(
  data: CreateRevenueDTO
): Promise<RevenueDTO> {
  const response = await financeAPI.post<RevenueDTO>("/revenues", {
    ...data,
  });
  return response.data;
}
