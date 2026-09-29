import { GetArticlesResponse } from "@/app/(main)/articles/page";
import { APP_URL, CurrentProjectId } from "./ProjectId";

export const FetchArticles = async () => {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: GetArticlesResponse = await res.json();
  const articles = data.data.articles;
  return articles;
};
