"use client";

import { api } from "@/utils/api";
import { useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}

interface ILoginResponse {
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

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit = async (data: ILoginForm) => {
    const result = await api<ILoginResponse>({
      route: "auth/sign-in",
      method: "POST",
      data: data,
    });

    if (result.succsses) {
      alert(result.data?.token);
    } else {
      console.log(result.error?.statusCode);
    }
  };

  return (
    <form
      className="flex flex-col w-full mt-8 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-full">
        <label className="text-sm font-bold text-gray-700 tracking-wide">
          Email
        </label>
        <input
          className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-sm font-bold text-gray-700 tracking-wide">
          Senha
        </label>
        <input
          className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded"
          type="password"
          placeholder="****"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col w-full">
        <button
          className="px-4 py-2 mt-2 text-lg font-bold text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
          type="submit"
        >
          Entrar
        </button>
      </div>
    </form>
  );
}
