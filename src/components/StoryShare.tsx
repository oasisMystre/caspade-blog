"use client";

import { MdArrowUpward } from "react-icons/md";

type StoryShareProps = {
  title: string;
  text: string;
};

export default function StoryShare({ title, text }: StoryShareProps) {
  return (
    <>
      <button
        className="flex items-center space-x-2 text-yellow-500"
        onClick={() => {
          if ("navigator" in window && window.navigator.share)
            window.navigator.share({
              title,
              text,
              url: window.location.href,
            });
        }}
      >
        <span>Share</span>
        <MdArrowUpward className="rotate-45 text-xl" />
      </button>
    </>
  );
}
