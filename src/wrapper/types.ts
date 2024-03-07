export type PageProps = {
  params: { slug: string, uuid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
