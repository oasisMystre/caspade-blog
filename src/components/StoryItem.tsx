import clsx from "clsx";
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
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex flex-1 flex-col space-y-8">
          <h1 className={"text-2xl font-medium md:text-4xl 2xl:text-5xl"}>
            {content.title}
          </h1>
          {!hideDescription && (
            <p className="text-white/90 xl:text-lg 2xl:text-xl">
              {content.description}
            </p>
          )}
          <StoryAction />
        </div>
        <div className="flex max-w-sm flex-col space-y-4">
          {!hideDescription && <StoryUser user={content.user} />}
          <div className="flex flex-1 items-end">
            <Image
              className={clsx("w-full rounded-xl object-cover", [
                hideDescription ? "w-sm h-64" : "h-sm",
              ])}
              src={content.illustration.filename}
              alt={content.illustration.alt}
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
