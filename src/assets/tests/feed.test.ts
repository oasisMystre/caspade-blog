import { Story } from "@/lib/api";

export const feedFeature: Story = {
  id: 0,
  user: {
    id: 0,
    avatar: "https://monoassets.com/f/118499/360x360/76c5e3f3a3/jen.png",
    displayName: "Jennifer Onwudiwe",
    role: "Growth",
  },
  title: "The mono widget 2.0 is live!",
  illustration: "https://monoassets.com/f/118499/960x600/ecc0e57a7c/blog_post.gif",
  description: "We've just launched the first major update to the Mono widget! After over three years since the first widget was launched to enable users securely link their bank accounts to share financial data with businesses, this new update to the Mono widget comes with lots of innovative improvements to make the account linking and payment experience more seamless and secure.",
  categories: ["Product"],
  contentUrl: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
