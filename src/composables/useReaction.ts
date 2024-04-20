import { useEffect, useState } from "react";

import Firebase from "@/lib/firebase";
import { LoadingState } from "@/store/models";

export function useReaction(uuid: string, uid: string) {
  const [state, setState] = useState<
    LoadingState & {
      data: Awaited<
        ReturnType<typeof Firebase.instance.reaction.getPostReactions>
      > | null;
    }
  >({
    loadingState: "idle",
    data: null,
  });

  useEffect(() => {
    setState((state) => {
      state.loadingState = "pending";
      return { ...state };
    });

    Firebase.instance.reaction
      .getPostReactions(uuid, uid)
      .then((data) => {
        setState((state) => {
          state.data = data;
          state.loadingState = "success";
          return { ...state };
        });
      })
      .catch((error) => {
        setState((state) => {
          state.loadingState = "failed";
          return { ...state };
        });

        console.log(error);
      });
  }, []);

  return [state, setState] as const;
}
