import SignInForm from "@/components/Auth/SignInForm";
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
    <View className=" w-full ">
      <SignInForm />
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
