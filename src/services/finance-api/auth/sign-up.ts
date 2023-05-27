import { ApiResult, api } from "@/utils/api";

export interface ISignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpResponse {
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

export async function SignUp(
  data: ISignUpRequest
): Promise<ApiResult<ISignUpResponse>> {
  return await api<ISignUpResponse>({
    route: "auth/sign-up",
    method: "POST",
    data: data,
  });
}
