import { MdArrowForward } from "react-icons/md";

export default function LayoutAdsBanner() {
  return (
    <section className="flex flex-col space-y-8 py-8 pt-32 md:p-16">
      <div className="flex max-w-sm flex-col space-y-2 self-center text-center md:max-w-2xl">
        <h1 className="text-4xl font-medium lg:text-5xl xl:text-6xl">
          Start building with Capsade
        </h1>
        <p className="text-lg 2xl:text-2xl">
          Caspade is your trusted source for the latest updates, trends, and
          insights in Blockchain technology and cryptocurrencies, with a focus
          on Africa.
        </p>
      </div>
      <div className="flex items-center space-x-4 self-center">
        <button className="btn btn-primary truncate">
          <span>Contact us</span>
          <MdArrowForward />
        </button>
        <button className="btn btn-secondary truncate">
          <span>Talk to Sales</span>
          <MdArrowForward />
        </button>
      </div>
    </section>
  );
}
