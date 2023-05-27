import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

export interface BreadcrumbItemProps {
  title: string;
  href: string;
  isActived?: boolean;
}

export function BreadcrumbItem({
  href,
  title,
  isActived,
}: BreadcrumbItemProps) {
  const baseClass = "inline-flex items-center text-sm font-normal truncate ";
  const isActivedClass = isActived ? "text-emerald-500" : "text-gray-600";

  return (
    <div className="inline-flex items-center">
      <Link href={href} className={`${baseClass} ${isActivedClass}`}>
        {title}
      </Link>
      {!isActived && <MdChevronRight />}
    </div>
  );
}
