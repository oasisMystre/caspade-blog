import moment from "moment";

type StoryHeaderProps = {
  createdAt: string;
  categories: string[];
};

export default function StoryHeader({ createdAt, categories }: StoryHeaderProps) {
  return (
    <div className="flex space-x-4 text-sm md:text-base 2xl:text-lg">
      <p className="text-stone-200">{moment(createdAt).format("Do MM, YYYY")}</p>
      <div className="flex space-x-2">
        {categories.map((category, index) => (
          <div key={index} className="text-yellow-500 capitalize">{category}</div>
        ))}
      </div>
    </div>
  );
}
