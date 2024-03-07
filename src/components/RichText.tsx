import { ISbRichtext } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export default function RichText({ document }: { document: ISbRichtext }) {
  return render(document);
}
