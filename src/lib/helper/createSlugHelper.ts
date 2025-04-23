import slugify from "slugify";

export function createNewsSlug(title: string, id: number) {
  return `${slugify(title, { lower: true })}-${id}`;
}
