import RecentPost from "@/components/pages/RecentPost";
import Header from "@/components/shared/Header";
import { useUserContext } from "@/context/AuthContext";
import React from "react";
import { View } from "react-native";

const HomePage = () => {
  const { user } = useUserContext();
  console.log(user.email);

  // useEffect(() => {

  // }, [])

  return (
    <View className=" flex-1 bg-bg">
      <Header />
      <RecentPost />
    </View>
  );
};

export default HomePage;
