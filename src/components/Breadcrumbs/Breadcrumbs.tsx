import { BreadcrumbItem, BreadcrumbItemProps } from "./BreadcrumbItem";

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItemProps[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav className="inline-flex items-center space-x-1 md:space-x-3 max-w-[calc(100%-60px)] overflow-hidden">
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
