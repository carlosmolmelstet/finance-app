import { financeAPI } from "../finance-api";

export type RevenueDTO = {
  id: string;
  amount: number;
  date: Date;
  userId: string;
  categoryId: string;
  createdAt?: Date;
  updateAt?: Date;
};

export async function getRevenueById(id: string): Promise<RevenueDTO> {
  const response = await financeAPI.get<RevenueDTO>("revenues/" + id);
  return response.data;
}
