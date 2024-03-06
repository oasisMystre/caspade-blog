import { MdArrowForward } from "react-icons/md";

export default function StoryAction() {
  return (
    <button className="flex items-center space-x-2 text-yellow-500 md:text-lg">
      <span className="font-medium">Read the story</span>
      <MdArrowForward />
    </button>
  );
}
