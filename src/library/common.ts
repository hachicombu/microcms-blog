import { Blog } from "./microcms";

// アイキャッチ画像の指定
export const getEyecatch = (blog: Blog) => {
  // アイキャッチの指定
  const defaultImageUrl = "https://images.microcms-assets.io/assets/0b89977f9d5f4144814724edd44d8495/a2fe2ce8aa204aae9fb615b29c89ce5c/default-eyecatch.jpg";

  return blog.eyecatch ? blog.eyecatch.url : defaultImageUrl;
};

export const setDateFormat = (blog: Blog) => {
  return new Date(blog.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
