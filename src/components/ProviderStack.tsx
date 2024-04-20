"use client";
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "@/config";
import FirebaseProvider from "@/providers/FirebaseProvider";

initializeApp(firebaseConfig);

export default function ProviderStack({ children }: React.PropsWithChildren) {
  return <FirebaseProvider>{children}</FirebaseProvider>;
}
