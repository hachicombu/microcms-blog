//SDK利用準備
import { createClient, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type TagType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: Eyecatch[];
  tag: TagType[];
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};
export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};

// タグ一覧を取得
export const getAllTags = async (queries?: MicroCMSQueries) => {
  return await client.get({
    endpoint: "tags",
    queries,
  });
};
