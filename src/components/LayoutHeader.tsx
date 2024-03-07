"use client";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

import { IcLogoWhite } from "@/assets";

export default function LayoutHeader() {
  return (
    <header className="flex flex-col">
      <div className="2xl:w-7xl flex items-center space-x-4 px-4 md:px-16 2xl:self-center 2xl:px-0">
        <Link href="/" className="flex-1">
          <Image
            alt="Caspade"
            className="h-24 w-40"
            src={IcLogoWhite}
            width={256}
            height={256}
          />
        </Link>
        <div>
          <button>
            <MdMenu className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
