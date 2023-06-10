import { financeAPI } from "../finance-api";

export type SignInDto = {
  email: string;
  password: string;
};

type SignInResponseDto = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role?: string;
    avatar?: string;
    createdAt?: Date;
  };
};

export async function SignIn(data: SignInDto): Promise<SignInResponseDto> {
  const response = await financeAPI.post<SignInResponseDto>(
    "/auth/sign-in",
    data
  );
  return response.data;
}
