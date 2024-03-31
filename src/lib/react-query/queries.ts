import { useInfiniteQuery } from "@tanstack/react-query";
import { Models } from "appwrite";
import { getRecentInfinitePosts } from "../appwrite/api";
import { QUERY_KEYS } from "./queryKeys";

export const useGetRecentInfinitePosts = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
    queryFn: getRecentInfinitePosts as any,
    getNextPageParam: (lastPage: Models.Document) => {
      if (lastPage && lastPage.documents.length === 0) {
        return null;
      }
      const lastId = lastPage?.documents[lastPage?.documents.length - 1].$id;
      return lastId;
    },
    initialPageParam: null,
  });
};
