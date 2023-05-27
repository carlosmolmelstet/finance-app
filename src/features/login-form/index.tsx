"use client";

import { Button } from "@/components/button";
import { ILoginForm, SignIn } from "@/services/finance-api/auth/sign-in";
import { login } from "@/utils/auth";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<ILoginForm>();

  const onSubmit = async (data: ILoginForm) => {
    const result = await SignIn(data);
    login(result);
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
        <Button
          className="px-4 py-2 mt-2 text-lg font-bold text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
          type="submit"
        >
          Entrar
        </Button>
      </div>
    </form>
  );
}
