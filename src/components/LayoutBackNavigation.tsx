import { useRouter } from "next/navigation";
import { MdArrowBack, MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function LayoutBackNavigation() {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-2">
      <button className="hidden">
        <MdArrowBack className="text-xl" />
      </button>
      <button className="py-2" onClick={() => router.back()}>Back</button>
      <MdChevronRight />
      <span>Growth</span>
    </div>
  );
}
