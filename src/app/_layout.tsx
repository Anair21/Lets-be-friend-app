import { TextBold, TextMedium } from "@/components/ui/TextStyled";
import AuthProvider from "@/context/AuthContext";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Toast, { ToastConfigParams } from "react-native-toast-message";
import "../global.css";

const Layout = ({ children }) => {
  return (
    <Stack
      initialRouteName="sign-in/index"
      screenOptions={{
        headerShown: false,
        animation: "ios",
      }}
    >
      {children}
    </Stack>
  );
};

export default function HomeLayout() {
  const [loaded, error] = useFonts({
    "Itim-Regular": require("../../assets/fonts/Itim-Regular.ttf"),
    "Montserrat-Light": require("../../assets/fonts/MontserratAlternates-Light.ttf"),
    "Montserrat-Regular": require("../../assets/fonts/MontserratAlternates-Regular.ttf"),
    "Montserrat-Medium": require("../../assets/fonts/MontserratAlternates-Medium.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/MontserratAlternates-Bold.ttf"),
    "Montserrat-Black": require("../../assets/fonts/MontserratAlternates-Black.ttf"),
  });
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <Layout>
        <Stack.Screen name="index" options={{ animation: "none" }} />
      </Layout>
      <ToastLayoutConfig />
    </AuthProvider>
  );
}

const ToastLayoutConfig = () => {
  interface ToastConfig {
    [key: string]: ToastComponent; // Use a union type instead of multiple index signatures
  }

  type ToastComponent = (params: ToastConfigParams<any>) => React.ReactNode;

  const toastConfig: ToastConfig = {
    success: ({ text1, props }) => (
      <View className=" w-full bg-accent-1 py-2 flexCenter rounded-lg">
        <TextBold className=" text-content">{text1}</TextBold>
        {props.uuid && <Text className=" text-content">{props.uuid}</Text>}
      </View>
    ),

    // Error
    error: ({ text1, props }) => (
      <View className=" w-full bg-rose-600 py-2 flexCenter rounded-lg">
        <TextBold className=" text-content">{text1}</TextBold>
        {props.uuid && <Text className=" text-content">{props.error}</Text>}
      </View>
    ),

    minorToast: ({ text1, props }) => (
      <View className=" w-full bg-amber-600 py-2 flexCenter rounded-lg">
        <TextMedium className=" text-content">{text1}</TextMedium>
        {props.uuid && <Text className=" text-content">{props.error}</Text>}
      </View>
    ),

    someThingWentWrong: ({ props }) => (
      <View className=" w-full bg-rose-600 py-2 flexCenter rounded-lg">
        <TextMedium className=" text-content">Something went wrong.</TextMedium>
        {props.uuid && <Text className=" text-content">{props.error}</Text>}
      </View>
    ),

    // Login

    whoLogin: ({ text1 }) => (
      <View className=" w-full bg-accent-1 py-2 flexCenter rounded-lg">
        <TextBold className=" text-content">
          {" "}
          Successfully Login as{" "}
          <TextBold className=" text-green-500">{text1}</TextBold>
        </TextBold>
        <Text className=" text-content">
          Good luck from finding your friends! ✨{" "}
        </Text>
      </View>
    ),
  };
  return <Toast config={toastConfig} />;
};
