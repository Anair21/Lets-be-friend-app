import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import "../global.css";

export default function Layout() {
  const [loaded, error] = useFonts({
    "Itim-Regular": require("../../assets/fonts/Itim-Regular.ttf"),
    "Montserrat-Regular": require("../../assets/fonts/MontserratAlternates-Regular.ttf"),
    "Montserrat-Medium": require("../../assets/fonts/MontserratAlternates-Medium.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/MontserratAlternates-Bold.ttf"),
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

  return <Slot />;
}
