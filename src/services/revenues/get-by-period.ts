import moment from "moment";
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

export async function getRevenueByPeriod(
  startDate: Date,
  endDate: Date
): Promise<RevenueDTO[]> {
  const response = await financeAPI.get<RevenueDTO[]>(
    `revenues/period?startDate=${moment(startDate).format(
      "YYYY-MM-DD"
    )}&endDate=${moment(endDate).format("YYYY-MM-DD")}`
  );
  return response.data;
}
