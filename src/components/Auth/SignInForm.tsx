import { useUserContext } from "@/context/AuthContext";
import { SignInAccount } from "@/lib/appwrite/api";
import { router } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { BasicBtn } from "../ui/ButtonStyled";
import { BasicInput } from "../ui/InputStyled";
import { TextBold } from "../ui/TextStyled";
import { actionToast } from "../utils/toast";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { checkAuthUser } = useUserContext();

  const handleSignInForm = async () => {
    if (email === "" && password === "") {
      actionToast.minorToast({ text1: "Please fill out all fields" });
      return;
    }
    if (email === "") {
      actionToast.minorToast({ text1: "Please fill out email" });
      return;
    }
    if (password === "") {
      actionToast.minorToast({ text1: "Please fill out password" });
      return;
    }

    await SignInAccount({ email: email, password: password })
      .then(() => {
        checkAuthUser().then(() => router.navigate("/"));
      })
      .catch(() => actionToast.someThingWentWrong())
      .catch(() =>
        actionToast.minorToast({ text1: "Invalid email or password" })
      );
  };

  return (
    <View className=" gap-2 px-5 max-w-section">
      <View className="flex gap-2">
        <TextBold className="text-content text-xl font-Black mt-4">
          Email
        </TextBold>
        <BasicInput
          onChangeText={setEmail}
          placeholder="MyEmail@gmail.com"
          type="email-address"
        />
      </View>
      <View className="flex gap-2">
        <TextBold className="text-content text-xl mt-4">Password</TextBold>
        <BasicInput
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <BasicBtn
        className=" bg-accent-1 py-2 px-4 mt-4 w-full max-w-[380px] mx-auto"
        onPress={handleSignInForm}
        textSize=" text-lg"
      >
        Submit
      </BasicBtn>
    </View>
  );
};

export default SignInForm;
