import { MdChevronRight } from "react-icons/md";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export interface Breadcrumb {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <Breadcrumb separator={<MdChevronRight />} spacing={1}>
      {breadcrumbs?.map((item, index) => (
        <BreadcrumbItem
          key={item.href}
          isCurrentPage={index === breadcrumbs.length - 1}
          fontSize="md"
          fontWeight={"semibold"}
          color={index === breadcrumbs.length - 1 ? "gray.300" : "gray.500"}
        >
          <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
