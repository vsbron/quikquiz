import Image from "next/image";
import Nav from "@/components/Nav";
import { APP_NAME } from "@/utils/constants";

function Footer() {
  // Returned JSX
  return (
    <footer className="px-12 py-4 border-t border-stone-300 flex justify-between text-[16px] items-center flex-col lg:flex-row mt-auto">
      <div className="flex flex-col gap-0.5 max-lg:items-center">
        <div className="max-sm:hidden">
          <Nav />
        </div>
        <div className="text-[15px] max-lg:text-center">
          Built by VSBroN as a{" "}
          <a
            href="https://github.com/vsbron/quikquiz__nextjs"
            target="_blank"
            className="underline"
          >
            portfolio project
          </a>
        </div>
      </div>
      <div className="flex items-end gap-0.5 lg:flex-col">
        <div className="hidden lg:flex items-end gap-2 leading-4">
          QuikQuiz{" "}
          <Image
            src="/logo.svg"
            width={45}
            height={24}
            alt={`${APP_NAME} Logo`}
          />
        </div>
        <div className="text-[15px]">
          ©{new Date().getFullYear()}. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
