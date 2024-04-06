import type { PageProps } from "@/wrapper/types";

import LayoutBackNavigation from "@/components/LayoutBackNavigation";
import HomeSubscribeBanner from "@/components/HomeSubscribeBanner";
import Storyblok from "@/lib/storybloc";
import CategoryPage from "@/wrapper/CategoryPage";

export default async function IndexPage({ params }: PageProps) {
  const stories = await Storyblok.instance.fetchPosts({
    with_tag: params.name,
    version: "published"
  });

  return (
    <>
      <div className="2xl:w-7xl flex flex-col px-8 space-y-16 md:px-16 2xl:px-0 2xl:self-center">
        <header>
          <LayoutBackNavigation title={params.name} />
        </header>
        <CategoryPage stories={stories} />
      </div>
      <HomeSubscribeBanner />
    </>
  );
}
