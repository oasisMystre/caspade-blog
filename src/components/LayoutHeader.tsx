"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdClose, MdMenu } from "react-icons/md";

import { IcLogoWhite } from "@/assets";
import { layoutNavigations } from "@/data/navigation";
import clsx from "clsx";

export default function LayoutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 flex flex-col">
      <div className="flex items-center md:space-x-4 bg-stone-900/50 backdrop-blur-2xl px-8 py-2 md:px-16 2xl:w-7xl 2xl:self-center 2xl:px-0 z-10">
        <Link
          href="https://caspade.org"
          className="flex-1"
        >
          <Image
            alt="Caspade"
            className="h-16 w-32"
            src={IcLogoWhite}
            width={256}
            height={256}
          />
        </Link>
        <div
          className={clsx(
            "bg-stone-900/80 px-8 py-2 rounded-md lt-md:fixed lt-md:top-18 lt-md:flex-col lt-md:inset-x-0 lt-md:bg-stone-900/50 lt-md:backdrop-blur-2xl md:flex md:items-center md:justify-center md:space-x-4",
            [
              isMenuOpen
                ? "flex animate-fade-in animate-duration-200"
                : "lt-md:hidden pointer-events-none",
            ]
          )}
        >
          {layoutNavigations.map((navigation, index) => (
            <Link
              key={index}
              href={navigation.href}
              className="px-4 py-2 hover:bg-stone-700/50 hover:rounded-md"
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          <button
            className="border border-stone/50 p-2 rounded-md md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <MdClose className="text-xl text-stone" />
            ) : (
              <MdMenu className="text-xl text-stone" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
