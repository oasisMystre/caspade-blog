export type Category = {
  name: string;
  href: string | null;
};

export const feedFilterCategories: Category[] = [
  { name: "All", href: null },
  { name: "News", href: "news" },
  { name: "Education", href: "education" },
  { name: "Article", href: "article" },
  { name: "Product", href: "product" },
  { name: "Blockchain", href: "blockchain" },
];
