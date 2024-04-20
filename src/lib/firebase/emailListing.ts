import { doc, setDoc } from "firebase/firestore";

import { FirebaseImpl } from "./impl";

export default class EmailListing extends FirebaseImpl {
  subscribe(uid: string, email: string) {
    const ref = doc(this.firebase.firestore, "users", uid);

    return setDoc(ref, {
      email,
    });
  }
}
