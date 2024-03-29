import React, { useState } from "react";
import { View } from "react-native";
import { BasicBtn } from "../ui/ButtonStyled";
import { BasicInput } from "../ui/InputStyled";
import { TextBold } from "../ui/TextStyled";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignInForm = () => {
    // Handle form submission here
  };

  return (
    <View className="gap-2 px-5 max-w-section">
      <View className="flex gap-2">
        <TextBold className="text-content text-xl font-Black mt-4">
          Name
        </TextBold>
        <BasicInput onChangeText={setName} placeholder="Your Name" />
      </View>
      <View className="flex gap-2">
        <TextBold className="text-content text-xl font-Black mt-4">
          Username
        </TextBold>
        <BasicInput onChangeText={setUsername} placeholder="Your Username" />
      </View>
      <View className="flex gap-2">
        <TextBold className="text-content text-xl font-Black mt-4">
          Email
        </TextBold>
        <BasicInput
          onChangeText={setEmail}
          placeholder="YourEmail@gmail.com"
          type="email-address"
        />
      </View>
      <View className="flex gap-2">
        <TextBold className="text-content text-xl font-Black mt-4">
          Password
        </TextBold>
        <BasicInput
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <BasicBtn
        className="bg-accent-1 py-2 px-4 mt-4 w-full max-w-[380px] mx-auto"
        onPress={handleSignInForm}
        textSize="text-lg"
      >
        Submit
      </BasicBtn>
    </View>
  );
};

export default SignUpForm;
