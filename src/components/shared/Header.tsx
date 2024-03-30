import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: top }}
      className="flex flex-row justify-between px-3 sticky top-0 left-0 w-full"
    >
      <Image
        className="fit"
        source={require("../../../assets/images/logo.png")}
      />
      <Text className=" text-content" onPress={() => router.push("/sign-in")}>
        Sign In
      </Text>
    </View>
  );
};

export default Header;
