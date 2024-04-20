import { FirebaseImpl } from "./impl";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const ReactionType = {
  LOVE: "❤️",
  LIKE: "👍",
  FAIR: "🙁",
  DISLIKE: "👎",
  ANGRY: "😡",
} as const;

export type TReaction = {
  updatedAt: number;
  reaction: keyof typeof ReactionType;
};

export default class Reaction extends FirebaseImpl {
  async setPostReaction(
    uuid: string,
    uid: string,
    reaction: keyof typeof ReactionType
  ) {
    const { firestore } = this.firebase;
    const ref = doc(firestore, "posts", "reactions", uuid, uid);

    await setDoc(
      ref,
      {
        reaction,
        updatedAt: Date.now() / 1000,
      },
      { merge: true }
    );
  }

  async getPostReactions(uuid: string, uid: string) {
    const firestore = this.firebase.firestore;

    const ref = doc(firestore, "posts", "reactions", uuid, uid);
    const snapshot = await getDoc(ref);
    const hasReacted = snapshot.exists();

    return {
      hasReacted,
      reaction: snapshot.data() as unknown as TReaction,
    };
  }
}
