import React from "react";
import { Image } from "react-native";

export default function Avatar(imageUrl: any) {
  return <Image className=" w-12 h-12 " src={imageUrl} alt="DP" />;
}
