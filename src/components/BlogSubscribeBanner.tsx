import SubscribeForm from "./SubscribeForm";

export default function BlogSubscribeBanner() {
  return (
    <div className="flex h-72 flex-col justify-center space-y-8 rounded-xl bg-yellow-500 px-8">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-medium">Like what you read?</h1>
        <p className="text-white/90">
          Become a subscriber and receive notifications about blog posts,
          company events and announcements, products and more.
        </p>
      </div>
      <SubscribeForm />
    </div>
  );
}
