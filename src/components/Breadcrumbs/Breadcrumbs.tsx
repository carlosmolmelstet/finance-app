import { BreadcrumbItem, BreadcrumbItemProps } from "./BreadcrumbItem";
import { useBreadcrumbs } from "./useBreadcrumbs";

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItemProps[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav className="inline-flex items-center space-x-1 md:space-x-3">
      {breadcrumbs?.map((item, index) => (
        <BreadcrumbItem
          key={item.href}
          title={item.title}
          href={item.href}
          isActived={index === breadcrumbs.length - 1}
        />
      ))}
    </nav>
  );
}
