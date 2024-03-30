import { useUserContext } from "@/context/AuthContext";
import { signOutAccount } from "@/lib/appwrite/api";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const { top } = useSafeAreaInsets();
  const { setIsAuthenticated } = useUserContext();
  return (
    <View
      style={{ paddingTop: top }}
      className=" bg-bg/80 backdrop-blur-xl flex flex-row justify-between px-3 sticky top-0 left-0 w-full"
    >
      <Image
        className="fit"
        source={require("../../../assets/images/logo.png")}
      />
      <View className=" flex flex-row justify-between flex-1 px-4">
        <Text
          className=" text-content"
          onPress={() => {
            signOutAccount().then(() => setIsAuthenticated(false));
          }}
        >
          Sign out
        </Text>
        <Text className=" text-content" onPress={() => router.push("/sign-in")}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default Header;
