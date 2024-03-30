import AuthProvider from "@/context/AuthContext";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
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
    </AuthProvider>
  );
}
