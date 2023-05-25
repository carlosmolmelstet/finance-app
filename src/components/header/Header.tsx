"use client";
import { MdOutlineSegment } from "react-icons/md";
import { Breadcrumbs } from "../Breadcrumbs";
import { BreadcrumbItemProps } from "../Breadcrumbs/BreadcrumbItem";
import { MobileMenu } from "../mobileMenu";
import { useState } from "react";
import { Avatar } from "../avatar";

interface HeaderProps {
  userName: string;
  breadcrumbs: BreadcrumbItemProps[];
}

export function Header({ userName, breadcrumbs }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="header flex w-full justify-between py-4 ">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="hidden lg:flex">
        <Avatar userName={userName} />
      </div>
      <button
        className="flex lg:hidden items-center justify-center w-8 h-8 transition-colors hover:bg-gray-50 rounded-md"
        onClick={toggle}
      >
        <MdOutlineSegment className="text-gray-800 hover:text-emerald-500 w-6 h-6" />
      </button>
      <MobileMenu isOpen={isOpen} toggle={toggle} userName={userName} />
    </div>
  );
}
