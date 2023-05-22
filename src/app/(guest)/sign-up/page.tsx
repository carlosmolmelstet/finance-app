import SignUpForm from "@/features/signup-form";
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

        <SignUpForm />
        <div className="flex justify-center w-full">
          <Link
            href="/login"
            className="py-2 mt-2 text-sm font-bold text-gray-700 hover:underline"
          >
            Ja tem uma conta? Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}
