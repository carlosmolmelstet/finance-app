import { Main } from "@/components/main/Main";
import ExpenseForm from "@/features/expense-form";

export default function Page() {
  return (
    <Main
      breadcrumbs={[{ title: "Lançamento", href: "/charge" }]}
      className="flex flex-col items-center"
    >
      <ExpenseForm />
    </Main>
  );
}
