"use client";
import { useState } from "react";

import { feedFeature } from "@/assets";

import StoryItem from "@/components/StoryItem";
import ListPagination from "@/components/ListPagination";
import HomeSubscribeBanner from "@/components/HomeSubscribeBanner";
import LayoutBackNavigation from "@/components/LayoutBackNavigation";

export default function CategoryPage() {
  const [page, setPage] = useState(0);

  return (
    <> </>
    // <>
    //   <div className="2xl:w-7xl flex flex-col space-y-24 px-8 md:space-y-32 md:px-24 2xl:self-center">
    //     <header className="flex flex-col space-y-4">
    //       <LayoutBackNavigation />
    //       <h1 className="text-2xl font-medium 2xl:text-4xl">Company</h1>
    //     </header>
    //     <div className="flex flex-col space-y-16">
    //       <StoryItem feed={feedFeature} />
    //       <ListPagination
    //         totalPage={5}
    //         selectedPage={page}
    //         onChange={(page) => setPage(page)}
    //       />
    //     </div>
    //   </div>
    //   <HomeSubscribeBanner />
    // </>
  );
}
