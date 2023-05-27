"use client";

import { Button } from "@/components/button";
import { ISignUpRequest, SignUp } from "@/services/finance-api/auth/sign-up";
import { api } from "@/utils/api";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const { register, handleSubmit } = useForm<ISignUpRequest>();

  const onSubmit = async (data: ISignUpRequest) => {
    const result = await SignUp(data);

    if (result.succsses) {
      if (result.data?.token) {
        Cookies.set("finance_token", result.data?.token, { expires: 7 });
        window.location.href = "/dashboard";
      }
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
