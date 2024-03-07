import { Metadata, ResolvingMetadata } from "next";
import { MdArrowUpward } from "react-icons/md";

import { PageProps } from "@/wrapper/types";
import Storyblok from "@/lib/storybloc";

import RichText from "@/components/RichText";
import StoryUser from "@/components/StoryUser";
import StoryHeader from "@/components/StoryHeader";
import LayoutBackNavigation from "@/components/LayoutBackNavigation";
import BlogSubscribeBanner from "@/components/BlogSubscribeBanner";
import StoryRecommendation from "@/components/StoryRecommedation";

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { content, ...story } = await Storyblok.instance.fetchPost(
    params.slug,
    { find_by: "uuid" },
  );

  return {
    title: content.title,
    description: content.description,
    creator: content.user.name,
    category: story.tag_list.join(","),
    openGraph: {
      images: [
        content.illustration.filename,
        ...((await parent).openGraph?.images || []),
      ],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { content, ...story } = await Storyblok.instance.fetchPost(
    params.slug,
    { find_by: "uuid" },
  );

  return (
    <div className="flex flex-col space-y-32 ">
      <div className="2xl:w-7xl lt-md:px-8 flex flex-col space-y-8 md:px-16 2xl:self-center 2xl:px-0">
        <LayoutBackNavigation title={content.title} />
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-medium">{content.title}</h1>
          <StoryHeader
            createdAt={story.created_at}
            categories={story.tag_list}
          />
        </div>
        <StoryUser user={content.user} />
        <div className="flex flex-col space-y-8">
          <div className="flex items-center">
            <b className="flex-1 font-medium">Share article</b>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-yellow-500">
                <span>Twitter</span>
                <MdArrowUpward className="rotate-45 text-xl" />
              </button>
              <button className="flex items-center space-x-2 text-yellow-500">
                <span>LinkedIn</span>
                <MdArrowUpward className="rotate-45 text-xl" />
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-32">
            <div className="prose prose-white flex flex-col text-base xl:text-xl">
              <RichText document={content.content} />
            </div>
            <BlogSubscribeBanner />
          </div>
        </div>
      </div>
      <StoryRecommendation
        tagList={story.tag_list}
        excludeStory={story.id}
      />
    </div>
  );
}
