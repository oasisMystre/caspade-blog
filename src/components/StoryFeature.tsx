import Image from "next/image";
import { ISbStoryData } from "@storyblok/react";

import StoryAction from "./StoryAction";
import StoryHeader from "./StoryHeader";
import { StoryContent } from "@/store/models/story.model";
import Link from "next/link";

type StoryFeatureProps = {
  story: ISbStoryData;
};

export default function StoryFeature({ story }: StoryFeatureProps) {
  const content = story.content as StoryContent;

  return (
    <Link
      href={`/blog/${(story as any).story}/`}
      className="flex flex-col space-y-8 rounded-xl bg-stone-700/20 p-4 md:p-8 2xl:px-16"
    >
      <StoryHeader
        createdAt={story.created_at}
        categories={story.tag_list}
      />
      <div className="flex space-x-8 lg:space-x-64">
        <div className="flex flex-1 flex-col space-y-8">
          <div className="flex">
            <h1 className="flex-1 text-3xl md:text-4xl font-medium first-letter:capitalize 2xl:text-6xl">
              {content.title}
            </h1>
            <div className="md:hidden">
              <Image
                className="h-8 w-8 rounded-full"
                src={content.user.avatar.filename}
                alt={content.user.name}
                width={32}
                height={32}
              />
            </div>
          </div>
          <p className="text-white/80 md:text-base 2xl:text-2xl">
            {content.description}
          </p>
          <StoryAction />
        </div>
        <div className="hidden md:block">
          <Image
            className="h-12 w-12 rounded-full md:h-16 md:w-16"
            src={content.user.avatar.filename}
            alt={content.user.name}
            width={32}
            height={32}
          />
        </div>
      </div>
    </Link>
  );
}
