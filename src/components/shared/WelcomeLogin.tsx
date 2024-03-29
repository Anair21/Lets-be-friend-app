import React from "react";
import { View } from "react-native";

import { TextBlack, TextRegular } from "../ui/TextStyled";
import { ScreenLogo } from "../ui/icons";

export default function WelcomeLogin() {
  return (
    <View className=" mb-2">
      <View className=" w-8/12 mx-auto max-w-[300px]">
        <ScreenLogo width="100%" />
      </View>

      <TextBlack className=" text-content text-center line-clamp-1 text-[24px]">
        Login in to your account.
      </TextBlack>
      <TextRegular className=" text-base mt-1 text-center text-content/80">
        Welcome back! Please enter your details
      </TextRegular>
    </View>
  );
}
