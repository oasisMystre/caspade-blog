import moment from "moment";
import Link from "next/link";

type StoryHeaderProps = {
  createdAt: string;
  categories: string[];
};

export default function StoryHeader({
  createdAt,
  categories,
}: StoryHeaderProps) {
  return (
    <div className="flex space-x-4 text-sm md:text-base 2xl:text-lg">
      <p className="text-stone-200">
        {moment(createdAt).format("Do MM, YYYY")}
      </p>
      <div className="flex space-x-2">
        {categories.map((category, index) => (
          <Link
            href={`/category/${category}/`}
            key={index}
            className="text-yellow-500 capitalize"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
