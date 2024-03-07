import StoryItem from "./StoryItem";
import Storyblok from "@/lib/storybloc";

type StoryRecommendationProps = {
  excludeStory?: number;
  tagList: string[];
};

export default async function StoryRecommendation({
  tagList,
  excludeStory,
}: StoryRecommendationProps) {
  const stories = await Storyblok.instance.fetchPosts({
    version: "published",
    with_tag: tagList.join(","),
    excluding_ids: excludeStory?.toString(),
  });

  return (
    <section className="flex flex-col space-y-32 bg-stone-800/50 px-8 md:p-16 2xl:p-32">
      <div className="2xl:w-7xl flex flex-col space-y-16 2xl:self-center">
        <h1 className="text-3xl font-medium">Next Read</h1>
        <div className="flex flex-col space-y-8">
          {stories.map((story) => (
            <StoryItem
              key={story.uuid}
              story={story}
              hideDescription={true}
              className="bg-dark-700/90 px-4 py-8 rounded-xl md:p-16 md:pb-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
