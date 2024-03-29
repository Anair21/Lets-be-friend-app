import SignUpForm from "@/components/Auth/SignOutForm";
import WelcomeLogin from "@/components/shared/WelcomeLogin";
import { TextRegular } from "@/components/ui/TextStyled";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function SignUp() {
  return (
    <View className=" transition-all flex-1 items-center justify-center bg-bg">
      <View className=" w-full">
        <WelcomeLogin />
        <SignUpForm />
        <TextRegular className=" mt-4 text-content text-center">
          Already have an account ?
          <Link className=" text-accent-1 font-bold" href="/sign-in">
            {" "}
            Sign In.
          </Link>
        </TextRegular>
      </View>
    </View>
  );
}
