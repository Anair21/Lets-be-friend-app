import SignInForm from "@/components/Auth/SignInForm";
import WelcomeLogin from "@/components/shared/WelcomeLogin";
import { TextRegular } from "@/components/ui/TextStyled";
import { useUserContext } from "@/context/AuthContext";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Page() {
  return (
    <View className=" flex-1 items-center justify-center bg-bg">
      <Content />
    </View>
  );
}

function Content() {
  const { user } = useUserContext();

  console.log(user.name);

  return (
    <View className=" w-full">
      <WelcomeLogin />
      <SignInForm />
      <TextRegular className=" mt-4 text-content text-center">
        Don't have an account?
        <Link className=" text-accent-1 font-bold" href="/sign-up">
          {" "}
          Sign Up.
        </Link>
      </TextRegular>
    </View>
  );
}
