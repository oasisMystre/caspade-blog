import Storyblok from "@/lib/storybloc";
import HomePage from "@/pages/HomePage";
import { PageProps } from "@/pages/types";

export default async function Home({ searchParams }: PageProps) {
  const category = searchParams.category as string | undefined;
  const featured = await Storyblok.instance.getFeatured();
  const stories = await Storyblok.instance.fetchPosts({
    version: "published",
    with_tag: category,
  });

  return (
    <HomePage
      key={category}
      stories={stories}
      featured={featured}
    />
  );
}
