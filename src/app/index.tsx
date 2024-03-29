import Header from "@/components/shared/Header";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View className=" flex-1 bg-bg">
      <Header />
      <Pressable onPress={() => router.push("/sign-in/")}>
        <Text className="textWhite font-itim">Sign In</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
