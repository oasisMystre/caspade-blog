"use client";

import { useState } from "react";
import { MdArrowUpward } from "react-icons/md";

import { feedFeature } from "@/assets";

import StoryUser from "@/components/StoryUser";
import StoryItem from "@/components/StoryItem";
import StoryHeader from "@/components/StoryHeader";
import LayoutBackNavigation from "@/components/LayoutBackNavigation";
import BlogSubscribeBanner from "@/components/BlogSubscribeBanner";

export default function BlogDetailPage() {
  const [feed] = useState(feedFeature);

  return (

    <> </>
    // <div className="flex flex-col space-y-32 ">
    //   <div className="2xl:w-7xl 2xl:px-0 md:px-16 lt-md:px-8 flex flex-col space-y-8 2xl:self-center">
    //     <LayoutBackNavigation />
    //     <div className="flex flex-col space-y-4">
    //       <h1 className="text-4xl font-medium">The Mono Widget 2.0 is Live!</h1>
    //       <StoryHeader
    //         createdAt={feed.createdAt}
    //         categories={feed.categories}
    //       />
    //     </div>
    //     <StoryUser user={feed.user} />
    //     <div className="flex flex-col space-y-32">
    //       <div className="flex items-center">
    //         <b className="flex-1 font-medium">Share article</b>
    //         <div className="flex items-center space-x-4">
    //           <button className="flex items-center space-x-2 text-yellow-500">
    //             <span>Twitter</span>
    //             <MdArrowUpward className="rotate-45 text-xl" />
    //           </button>
    //           <button className="flex items-center space-x-2 text-yellow-500">
    //             <span>LinkedIn</span>
    //             <MdArrowUpward className="rotate-45 text-xl" />
    //           </button>
    //         </div>
    //       </div>
    //       <BlogSubscribeBanner />
    //     </div>
    //   </div>
    //   <section className="flex flex-col space-y-32 bg-stone-800/50 p-16 2xl:p-32">
    //     <div className="2xl:w-7xl flex flex-col space-y-16 2xl:self-center">
    //       <h1 className="text-3xl font-medium">Next Read</h1>
    //       <div>
    //         <StoryItem
    //           feed={feedFeature}
    //           hideDescription={true}
    //           className="bg-dark-700/90 rounded-xl p-16 pb-0"
    //         />
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}
