import { financeAPI } from "../finance-api";

export type UpdateRevenueDTO = {
  id: string;
  amount: number | string;
  date: Date;
  categoryId: string;
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

export async function updateRevenue(
  data: UpdateRevenueDTO
): Promise<RevenueDTO> {
  const response = await financeAPI.put<RevenueDTO>("/revenues", {
    ...data,
  });
  return response.data;
}
