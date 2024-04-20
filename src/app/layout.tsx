import "react-toastify/dist/ReactToastify.css";

import clsx from "clsx";
import type { Metadata } from "next";
import LocalFont from "next/font/local";

import { ToastContainer, toast } from "react-toastify";

import "./global.css";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";
import ProviderStack from "@/components/ProviderStack";

const poppins = LocalFont({
  src: [
    { path: "../assets/fonts/DuplicateSans-Regular.woff2", weight: "400" },
    { path: "../assets/fonts/DuplicateSans-Medium.woff2", weight: "500" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.caspade.org"),
  title: "Caspade - Where good ideas find you.",
  description:
    "Caspade is a crypto community where members share ideas, and where expert and undiscovered talents share their skills.",
  openGraph: {
    images: "/il_banner.png",
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={clsx(
          poppins.className,
          "fixed inset-0 flex flex-col overflow-y-scroll"
        )}
      >
        <div className="flex flex-1 flex-col space-y-16 overflow-y-scroll">
          <LayoutHeader />
          <ProviderStack>
            {children}
            <ToastContainer />
          </ProviderStack>
          <LayoutFooter />
        </div>
      </body>
    </html>
  );
}
