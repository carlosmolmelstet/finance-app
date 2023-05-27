import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { Avatar } from "../avatar";
import { Navigation } from "../navigation";

interface MobileMenuProps {
  isOpen: boolean;
  toggle: () => void;
  userName: string;
}

export function MobileMenu({ isOpen, toggle, userName }: MobileMenuProps) {
  return (
    <div
      className={`absolute ${
        isOpen ? "flex" : "hidden"
      } bg-gray-600/80 left-0 top-0 h-screen w-screen px-2 sm:px-4 lg:hidden py-4 `}
    >
      <div className="bg-white w-full h-fit rounded-md p-4 animate-fade">
        <div className="flex justify-between mb-4 pb-4 border-b border-gray-200">
          <Image
            src="/logo-larger.svg"
            width={125}
            height={125}
            alt="Finance Logo"
          />
          <button
            onClick={toggle}
            className="flex lg:hidden items-center justify-center w-8 h-8 transition-colors hover:bg-gray-50 rounded-md"
          >
            <MdOutlineClose className="text-gray-800 hover:text-emerald-500 w-6 h-6" />
          </button>
        </div>
        <div className="w-fit ">
          <Navigation />
          <div className="flex items-center space-x-2 mt-6">
            <Avatar userName={userName} />
            <p className="text-gray-600 text-">{userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
