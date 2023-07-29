import { COOKIE } from "@/utils/cookie.helper";
import axios from "axios";
import { parseCookies } from "nookies";

export function AxiosClient(ctx?: any) {
  const cookies = parseCookies(ctx);
  const token = cookies[COOKIE.TOKEN];
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_FINANCE_API,
  });

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }

  return api;
}

export const financeAPI = AxiosClient();
