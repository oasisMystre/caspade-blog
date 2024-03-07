import { useRouter } from "next/navigation";
import { MdArrowBack, MdChevronRight } from "react-icons/md";

type LayoutBackNavigationProps = {
  title: string;
};

export default function LayoutBackNavigation({
  title,
}: LayoutBackNavigationProps) {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        className="py-2 text-white/80"
        onClick={() => router.back()}
      >
        Back
      </button>
      <MdChevronRight />
      <span className="text-yellow-500">Growth</span>
    </div>
  );
}
