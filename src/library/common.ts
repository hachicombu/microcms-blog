import { Blog } from "./microcms";
// 日付をUTC -> JSTに変換
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

// 日付のフォーマット変更
export const setDateFormat = (blog: Blog) => {
  const publishedDate = dayjs(blog.publishedAt).tz().format("YYYY/MM/DD");
  return publishedDate;
};
