import { Main } from "@/components/main/Main";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <Main
      breadcrumbs={[
        { title: "Lançamento", href: "/charge" },
        { title: id, href: "/charge/" + id },
      ]}
      className="flex flex-col items-center"
    >
      <ExpenseForm id={id} />
    </Main>
  );
}

import ExpenseForm from "@/features/expense-form";
