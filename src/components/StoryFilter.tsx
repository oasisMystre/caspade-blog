import clsx from "clsx";
import { Category, feedFilterCategories } from "@/data/categories";

type StoryFilterProps = {
  value: Category | null;
  onSelect: (value: Category) => void;
};

export default function StoryFilter({ value, onSelect }: StoryFilterProps) {
  return (
    <div className="flex space-x-2 overflow-x-scroll md:space-x-4 max-w-xs">
      {feedFilterCategories.map((category, index) => {
        const selected =
          value === category || (value === null && category.href === null);

        return (
          <button
            key={index}
            className={clsx([
              "rounded-full px-4 py-2 md:px-8",
              selected
                ? "bg-white text-black"
                : "text-stone-100 hover:bg-stone-700/50",
            ])}
            onClick={() => onSelect(category)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
