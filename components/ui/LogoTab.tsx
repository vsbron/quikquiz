import Link from "next/link";
import Image from "next/image";

import Tab from "@/components/ui/Tab";

import { APP_NAME, LINKS } from "@/utils/constants";

function LogoTab() {
  // Returned JSX
  return (
    <Tab className="px-6 py-2">
      <Link
        className="text-xl flex items-center gap-2 leading-0"
        href={LINKS.HOME}
      >
        <Image
          src="/logo.svg"
          width={75}
          height={41}
          alt={`${APP_NAME} Logo`}
        />
      </Link>
    </Tab>
  );
}

export default LogoTab;
