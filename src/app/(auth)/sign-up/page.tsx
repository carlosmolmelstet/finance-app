import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 h-[80vh]">
      <div className="flex flex-col items-center justify-center bg-neutral-50-500 w-full max-w-md">
        <Image src="/logo.svg" height={84} width={84} alt="logo" />
        <h3 className="mt-4 text-xl font-bold">
          Crie sua conta e comece a usar
        </h3>
        <form className="flex flex-col w-full mt-8 space-y-4">
          <div className="flex flex-col w-full">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Nome
            </label>
            <input
              className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded"
              type="name"
              placeholder="Seu nome"
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
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Confirmar Senha
            </label>
            <input
              className="px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded"
              type="password"
              placeholder="****"
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
          <div className="flex justify-center w-full">
            <Link
              href="/login"
              className="py-2 mt-2 text-sm font-bold text-gray-700 hover:underline"
            >
              Ja tem uma conta? Faça login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
