import { Breadcrumbs } from "../Breadcrumbs";
import { BreadcrumbItemProps } from "../Breadcrumbs/BreadcrumbItem";

interface HeaderProps {
  userName: string;
  breadcrumbs: BreadcrumbItemProps[];
}

export function Header({ userName, breadcrumbs }: HeaderProps) {
  return (
    <div className="header flex w-full justify-between py-4 ">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {userName}
    </div>
  );
}
