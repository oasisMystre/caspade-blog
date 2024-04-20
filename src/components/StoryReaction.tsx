"use client";

import { useFirebase } from "@/composables";
import { useReaction } from "@/composables/useReaction";
import Firebase from "@/lib/firebase";
import { ReactionType } from "@/lib/firebase/reaction";
import type { User } from "@/providers/FirebaseProvider";
import clsx from "clsx";

type AuthOnlyStoryReactionProps = {
  user: User;
  uuid: string;
};

function AuthOnlyStoryReaction({ user, uuid }: AuthOnlyStoryReactionProps) {
  const [state, setState] = useReaction(uuid, user.uid);
  const { loadingState, data } = state;
  const onReact = async (reaction: any) => {
    await Firebase.instance.reaction.setPostReaction(uuid, user.uid, reaction);
    setState((data) => {
      data.data = {
        hasReacted: true,
        reaction: {
          reaction,
          updatedAt: Date.now() / 100,
        },
      };

      return { ...data };
    });
  };

  console.log(state);

  return loadingState === "success" ? (
    <div className="flex space-x-2 items-center">
      {Object.entries(ReactionType).map(([key, reaction], index) => {
        const isReacted = data?.reaction && data.reaction.reaction === key;
        return (
          <button
            key={index}
            className={clsx(
              "w-10 h-10 flex items-center justify-center text-2xl rounded-full",
              isReacted ? "bg-blue" : "bg-stone-100/10"
            )}
            onClick={() => onReact(key).catch(console.log)}
          >
            {reaction}
          </button>
        );
      })}
    </div>
  ) : (
    <div className="w-8 h-8 border-3 border-t-transparent border-amber rounded-full animate-spin" />
  );
}

export default function StoryReaction({ uuid }: { uuid: string }) {
  const { user, isLoggedIn } = useFirebase();

  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-xl font-medium">Rate this this article?</h1>
      {user && (
        <AuthOnlyStoryReaction
          user={user}
          uuid={uuid}
        />
      )}
    </div>
  );
}
