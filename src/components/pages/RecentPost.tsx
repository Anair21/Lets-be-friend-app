import { useGetRecentInfinitePosts } from "@/lib/react-query/queries";
import { Models } from "appwrite";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import LoadingScreen from "../shared/LoadingScreen";
import { PostCard } from "../shared/PostCard";

export default function RecentPost() {
  const [posts, setPosts] = useState<Models.Document[]>([]);

  const { data, isLoading } = useGetRecentInfinitePosts();

  useEffect(() => {
    if (data)
      data.pages.map((page) => {
        page.documents.map((doc) => {
          if (!posts.some((post) => post.$id === doc.$id)) {
            setPosts((prev) => [doc, ...prev]);
            console.log(doc);
          }
        });
      });
  }, [data]);

  if (isLoading && !posts) return <LoadingScreen />;
  console.log(posts[0]?.creator.imageUrl);

  return (
    <View className=" flex-1 px-2">
      <FlatList
        data={posts}
        renderItem={({ item }: { item: Models.Document }) => (
          <PostCard item={item} />
        )}
        keyExtractor={(item) => item.$id}
        // ListFooterComponent={renderFooter}
        // onEndReached={handleLoadMore}
        // onEndReachedThreshold={0.1}
      />
    </View>
  );
}
