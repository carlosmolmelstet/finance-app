"use client";

import Button from "@/components/button/Button";
import { api } from "@/utils/api";
import { useForm } from "react-hook-form";

interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

interface ISignUpResponse {
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

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>();

  const onSubmit = async (data: ISignUpForm) => {
    const result = await api<ISignUpResponse>({
      route: "auth/sign-up",
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
          Nome
        </label>
        <input
          className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded"
          type="name"
          placeholder="Seu nome"
          {...register("name")}
        />
      </div>
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
        <Button
          className="px-4 py-2 mt-2 text-lg font-bold text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
          type="submit"
        >
          Criar conta
        </Button>
      </div>
    </form>
  );
}
