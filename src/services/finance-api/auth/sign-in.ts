import { ApiResult, api } from "@/utils/api";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
    createdAt: Date;
  };
}

export async function SignIn(
  data: ILoginForm
): Promise<ApiResult<ILoginResponse>> {
  return await api<ILoginResponse>({
    route: "auth/sign-in",
    method: "POST",
    data: data,
  });
}
