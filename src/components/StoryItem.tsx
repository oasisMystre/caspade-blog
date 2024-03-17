import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import StoryHeader from "./StoryHeader";
import StoryAction from "./StoryAction";
import { ISbStoryData } from "@storyblok/react";
import { StoryContent } from "@/store/models/story.model";
import StoryUser from "./StoryUser";

type StoryItemProps = {
  story: ISbStoryData;
  className?: string;
  hideDescription?: boolean;
};

export default function StoryItem({
  story,
  hideDescription,
  className,
}: StoryItemProps) {
  const content = story.content as StoryContent;

  return (
    <div className={clsx("flex flex-col space-y-4", className)}>
      <StoryHeader
        createdAt={story.created_at}
        categories={story.tag_list}
      />
      <Link
        href={`/blog/${story.uuid}/`}
        className="flex flex-col-reverse md:space-y-4 md:flex-row md:space-x-8 md:space-y-0"
      >
        <div className="flex flex-1 flex-col space-y-2 md:space-y-8">
          <h1 className={"text-2xl font-medium md:text-4xl 2xl:text-5xl"}>
            {content.title}
          </h1>
          {!hideDescription && (
            <p className="text-white/90 xl:text-lg 2xl:text-xl line-clamp-7">
              {content.description}
            </p>
          )}
          <StoryAction />
        </div>
        <div className="flex md:max-w-sm flex-col space-y-4 lt-md:pb-8">
          {!hideDescription && <StoryUser user={content.user} />}
          <div className="flex flex-1 md:items-end">
            <Image
              className={clsx("w-full rounded-md object-cover", [
                hideDescription ? "w-full md:w-sm h-64" : "h-sm lt-md:h-56",
              ])}
              src={content.illustration.filename}
              alt={content.illustration.alt}
              width={512}
              height={512}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
