import { MdEmail } from "react-icons/md";

export default function SubscribeForm() {
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <div className="border-1 ring-3 flex items-center space-x-2 rounded-lg border-transparent bg-black/20 px-3 ring-transparent focus-within:ring-yellow-200/50">
        <MdEmail className="text-xl text-white" />
        <input
          className="flex-1 bg-transparent py-3 placeholder-white outline-none"
          placeholder="Enter email"
        />
      </div>
      <button className="rounded-lg bg-white px-6 py-3 text-yellow-500">
        Subscribe
      </button>
    </div>
  );
}
