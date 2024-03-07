import Image from "next/image";

import { User } from "@/store/models/user.model";

type StoryUserProps = {
  user: User;
};

export default function StoryUser({ user }: StoryUserProps) {
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
}
