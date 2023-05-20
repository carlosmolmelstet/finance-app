import LoginForm from "@/features/login-form";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 h-[80vh]">
      <div className="flex flex-col items-center justify-center bg-neutral-50-500 w-full max-w-md">
        <Image src="/logo.svg" height={84} width={84} alt="logo" />
        <h3 className="mt-4 text-xl font-bold">Faça login para continuar.</h3>
        <LoginForm />
        <div className="flex justify-between w-full">
          <a className="py-2 mt-2 text-sm font-bold text-gray-400  cursor-default">
            Esqueceu sua senha?
          </a>
          <Link
            href="/sign-up"
            className="py-2 mt-2 text-sm font-bold text-gray-700 hover:underline"
          >
            Criar uma conta
          </Link>
        </div>
      </div>
    </div>
  );
}
