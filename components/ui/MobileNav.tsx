import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { APP_NAME } from "@/utils/constants";
import { nav } from "@/utils/nav";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

// Props interface
interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

// The component
function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  // Returned JSX
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-18 text-chocolate py-8 px-7 bg-orange-50 border-8 border-l-0 border-chocolate rounded-r-xl transition-transform  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <Image src="/logo.svg" width={75} height={39} alt={`${APP_NAME} Logo`} />
      <div className="mt-2 mb-4 pb-3 border-b border-chocolate/30 flex items-center gap-3"></div>
      <h4 className="font-merriweather text-2xl font-bold mb-2 tracking-wider">
        Navigation:
      </h4>
      <ul className="flex flex-col gap-3 pl-0! text-xl mt-4!">
        {nav.map(({ url, label, icon: Icon }) => (
          <li key={url}>
            <Link
              href={url}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 hover:gap-4 transition-all"
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/vsbron/quikquiz__nextjs"
            onClick={() => setIsMenuOpen(false)}
            target="_blank"
            className="flex items-center gap-2 hover:gap-4 transition-all"
          >
            <CodeBracketSquareIcon className="w-5 h-5" />
            Repo
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
