import Header from "@/components/shared/Header";
import { appwriteConfig } from "@/lib/appwrite/appwriteConfig";
import React from "react";
import { Text, View } from "react-native";

const HomePage = () => {
  return (
    <View className=" flex-1 bg-bg">
      <Header />
      <Text>{appwriteConfig.url}</Text>
    </View>
  );
};

export default HomePage;
