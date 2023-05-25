import { MdOutlineClose, MdOutlineSegment } from "react-icons/md";
import { Breadcrumbs } from "../Breadcrumbs";
import { BreadcrumbItemProps } from "../Breadcrumbs/BreadcrumbItem";
import { Navigation } from "../navigation";
import Image from "next/image";

interface AvatarProps {
  userName: string;
}

export function Avatar({ userName }: AvatarProps) {
  const abbreviation = userName
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("")
    .slice(0, 2);

  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full">
      <span className="text-sm text-white ">{abbreviation}</span>
    </div>
  );
}
