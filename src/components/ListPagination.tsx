import clsx from "clsx";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

type ListPaginationProps = {
  totalPage: number;
  selectedPage: number;
  onChange: (page: number) => void;
};

export default function ListPagination({
  totalPage,
  selectedPage,
  onChange,
}: ListPaginationProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 items-center space-x-4">
        {Array.from({ length: totalPage }).map((_, index) => (
          <button
            key={index}
            className={clsx([
              selectedPage === index
                ? "font-medium text-white"
                : "text-stone-500",
            ])}
            onClick={() => onChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-700/50 hover:bg-yellow-500 hover:text-white"
          onClick={() => onChange(selectedPage - 1)}
          disabled={selectedPage === 0}
        >
          <MdArrowBack />
        </button>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white"
          disabled={selectedPage >= totalPage -  1}
          onClick={() => onChange(selectedPage + 1)}
        >
          <MdArrowForward />
        </button>
      </div>
    </div>
  );
}
