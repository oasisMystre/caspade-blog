export type PageProps = {
  params: { name: string, slug: string, uuid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
