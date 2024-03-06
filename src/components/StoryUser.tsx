import Image from "next/image";

import useUser from "@/composables/useUser";

type StoryUserProps = {
  author: string;
};

export default function StoryUser({ author }: StoryUserProps) {
  const user = useUser(author);

  return (
    user &&
    (() => {
      return (
        <div className="flex space-x-4">
          <Image
            src={user.avatar.filename}
            width={48}
            height={48}
            alt={user.name}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p>{user.name}</p>
            <p className="text-sm text-white/80 first-letter:capitalize">
              {user.role}
            </p>
          </div>
        </div>
      );
    })()
  );
}
