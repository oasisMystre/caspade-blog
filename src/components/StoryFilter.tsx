import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

import { Category, feedFilterCategories } from "@/data/categories";

export default function StoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    searchParams && (
      <div className="flex max-w-[84vw] space-x-2 overflow-x-scroll md:max-w-auto md:space-x-4">
        {feedFilterCategories.map((category, index) => {
          const value = searchParams.get("category");
          const selected =
            value == category.href ||
            (value === null && category.href === null);

          return (
            <button
              key={index}
              className={clsx([
                "rounded-full px-4 py-2 md:px-8",
                selected
                  ? "bg-white text-black"
                  : "text-stone-100 hover:bg-stone-700/50",
              ])}
              onClick={() =>
                router.push(category.href ? "?category=" + category.href : "/")
              }
            >
              {category.name}
            </button>
          );
        })}
      </div>
    )
  );
}
