import React from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: top }}
      className="flex flex-row justify-between px-3"
    >
      <Image
        className="fit"
        source={require("../../../assets/images/logo.png")}
      />
      <Text>Logo</Text>
    </View>
  );
};

export default Header;
