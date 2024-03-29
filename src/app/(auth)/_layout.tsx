import { Stack } from "expo-router";
import React from "react";

// Custom Layout component
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

export default function AuthLayout() {
  return (
    <Layout>
      <Stack.Screen name="sign-in/index" options={{ presentation: "modal" }} />
      <Stack.Screen name="sign-up/index" options={{ presentation: "modal" }} />
    </Layout>
  );
}
