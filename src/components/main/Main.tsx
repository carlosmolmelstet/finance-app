import { BreadcrumbItemProps } from "@/components/Breadcrumbs/BreadcrumbItem";
import jwt_decode from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Header } from "../header";

interface MainProps {
  children: ReactNode;
  breadcrumbs: BreadcrumbItemProps[];
}
interface IToken {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export function Main({ breadcrumbs, children }: MainProps) {
  const cookieStore = cookies();
  const token = cookieStore.get("finance_token");

  if (!token) {
    return redirect("/login");
  } else {
    const user = jwt_decode(token.value) as IToken;
    return (
      <main className="flex-1 px-10 bg-white  h-screen overflow-y-auto">
        <Header userName={user.name} breadcrumbs={breadcrumbs} />
        {children}
      </main>
    );
  }
}
