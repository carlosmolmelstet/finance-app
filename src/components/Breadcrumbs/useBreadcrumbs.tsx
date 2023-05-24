import { Dispatch, SetStateAction, useState } from "react";
import { BreadcrumbItemProps } from "../Breadcrumbs/BreadcrumbItem";

interface BreadcrumbnData {
  breadcrumbs: BreadcrumbItemProps[];
  setBreadcrumbs: Dispatch<SetStateAction<BreadcrumbItemProps[]>>;
}

export function useBreadcrumbs(): BreadcrumbnData {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemProps[]>([]);

  return { breadcrumbs, setBreadcrumbs };
}
