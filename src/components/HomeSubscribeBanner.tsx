import { MdEmail } from "react-icons/md";
import SubscribeForm from "./SubscribeForm";

export default function HomeSubscribeBanner() {
  return (
    <section className="ext-white relative flex space-x-8 bg-amber-400 px-8 py-16 text-white md:px-16 md:py-32 lg:px-32 xl:py-64">
      <div className="flex flex-1 flex-col space-y-12 md:max-w-lg md:flex-none lg:max-w-2xl xl:self-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl font-medium lg:text-6xl">
            Subscribe to the Caspade Blog
          </h1>
          <p className="text-lg lg:text-xl">
            Get notifications about blog posts, company events and annoucements,
            products and founder materials.
          </p>
        </div>
        <SubscribeForm />
      </div>
      <div className="absolute right-0 top-0 h-24 w-24 p-8" />
    </section>
  );
}
