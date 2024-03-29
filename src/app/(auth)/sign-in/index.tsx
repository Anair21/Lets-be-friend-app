import SignInForm from "@/components/Auth/SignInForm";
import WelcomeLogin from "@/components/shared/WelcomeLogin";
import { TextRegular } from "@/components/ui/TextStyled";
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

// function Header() {
//   const { top } = useSafeAreaInsets();
//   return (
//     <View style={{ paddingTop: top }}>
//       <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
//         <Link className="font-bold flex-1 items-center justify-center" href="/">
//           ACME
//         </Link>
//         <View className="flex flex-row gap-4 sm:gap-6">
//           <Link
//             className="text-md font-medium hover:underline web:underline-offset-4"
//             href="/"
//           >
//             About
//           </Link>
//           <Link
//             className="text-md font-medium hover:underline web:underline-offset-4"
//             href="/"
//           >
//             Product
//           </Link>
//           <Link
//             className="text-md font-medium hover:underline web:underline-offset-4"
//             href="/"
//           >
//             Pricing
//           </Link>
//         </View>
//       </View>
//     </View>
//   );
// }
