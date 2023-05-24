import { Main } from "@/components/main/Main";

export default function Page({ params }: { params: { teste: string } }) {
  const { teste } = params;
  return (
    <Main
      breadcrumbs={[
        { title: "Lançamento", href: "/charge" },
        { title: teste, href: "/charge/" + teste },
      ]}
    >
      Lançamento {teste}
    </Main>
  );
}
