import React from "react";
import { ActivityIndicator, View } from "react-native";

const LoadingScreen = () => {
  return (
    <View className=" flex-1 h-full flexCenter">
      <ActivityIndicator className=" text-content" size={"large"} />
    </View>
  );
};

export default LoadingScreen;
