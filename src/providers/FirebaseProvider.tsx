import { createContext, useEffect, useState } from "react";

import { onAuthStateChanged, signInAnonymously } from "firebase/auth";

import Firebase from "@/lib/firebase";

export type User = {
  uid: string;
};

export type FirebaseContextParams = {
  user: User | null;
  isLoggedIn: boolean;
};

export const FirebaseContext = createContext<FirebaseContextParams>({
  user: null,
  isLoggedIn: false,
});

export default function FirebaseProvider({
  children,
}: React.PropsWithChildren) {
  const [user, setUser] = useState<FirebaseContextParams["user"]>(null);

  useEffect(() => {
    const auth = Firebase.instance.auth;

    signInAnonymously(auth).then(console.log).catch(console.log);

    return onAuthStateChanged(auth, (user) => {
      if (user) setUser({ uid: user.uid });
    });
  }, []);

  return (
    <FirebaseContext.Provider value={{ user, isLoggedIn: user !== null }}>
      {children}
    </FirebaseContext.Provider>
  );
}
