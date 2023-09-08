import { Blog } from "./microcms";

// 日付のフォーマット変更
export const setDateFormat = (blog: Blog) => {
  return new Date(blog.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
