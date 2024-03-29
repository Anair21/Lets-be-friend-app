import React from "react";
import { View } from "react-native";
import { TextBlack, TextRegular } from "../ui/TextStyled";

export default function WelcomeLogin() {
  return (
    <View className=" mb-2">
      <TextBlack className=" text-content text-center line-clamp-1 text-[24px]">
        Login in to your account.
      </TextBlack>
      <TextRegular className=" text-base mt-1 text-center text-content/80">
        Welcome back! Please enter your details
      </TextRegular>
    </View>
  );
}
