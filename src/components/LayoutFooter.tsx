"use client";

import Image from "next/image";
import LayoutAdsBanner from "./LayoutAdsBanner";
import { IcLogoWhite } from "@/assets";
import { defaultSocials } from "@/data/socials";

export default function LayoutFooter() {
  return (
    <footer className="flex flex-col space-y-8 bg-black px-8 pb-16 text-white 2xl:self-center">
      <LayoutAdsBanner />
      <hr className="2xl:w-7xl border-1 border-stone-700/80" />

      <div className="2xl:min-w-7xl flex space-x-8 space-y-8 2xl:self-center">
        <div className="flex-1">
          <Image
            className="h-18 mt-8 w-32"
            src={IcLogoWhite}
            alt="Capsade"
            width={256}
            height={256}
          />
        </div>
        <div className="flex items-center space-x-4">
          {defaultSocials.map((social, index) => (
            <button
              key={index}
              className="p-2 text-3xl"
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>
          © 2023 Alright Reserved
          <b> . </b>
          <a
            href="/"
            className="text-yellow-500"
          >
            caspade.org
          </a>
        </p>
      </div>
    </footer>
  );
}
