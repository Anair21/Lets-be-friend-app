import Header from "@/components/shared/Header";
import { appwriteConfig } from "@/lib/appwrite/appwriteConfig";
import React, { useState } from "react";
import { Text, View } from "react-native";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  // const getPost = async () => {
  //   try {
  //     const post = await databases.getDocument(
  //       appwriteConfig.databaseId,
  //       appwriteConfig.postCollectionId,
  //       "66017291cbb4d2446a66"
  //     );

  //     if (post.documents.length <= 0) return undefined;

  //     return post;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(getPost());

  return (
    <View className=" flex-1 bg-bg">
      <Header />
      <Text>{appwriteConfig.url}</Text>
      {/* <Pressable onPress={() => router.navigate("/sign-in")}>
        <TextBold>Click me</TextBold>
      </Pressable> */}
    </View>
  );
};

export default HomePage;
