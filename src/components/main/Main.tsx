import jwt_decode from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Header } from "../header";
import { BreadcrumbItemProps } from "../Breadcrumbs/BreadcrumbItem";

interface MainProps {
  children: ReactNode;
  breadcrumbs: BreadcrumbItemProps[];
  className?: string;
}
interface IToken {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export function Main({ breadcrumbs, children, className }: MainProps) {
  const cookieStore = cookies();
  const token = cookieStore.get("finance_token");

  if (!token) {
    return redirect("/login");
  } else {
    const user = jwt_decode(token.value) as IToken;
    return (
      <main
        className={
          `flex-1 px-2 sm:px-4 lg:px-8 bg-white  h-screen overflow-y-auto ` +
          className
        }
      >
        <Header userName={user.name} breadcrumbs={breadcrumbs} />
        {children}
      </main>
    );
  }
}
