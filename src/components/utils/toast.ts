import Toast from "react-native-toast-message";

export const actionToast = {
  success: (desc = "") =>
    Toast.show({
      type: "success",
      text1: "Success",
      props: {
        uuid: desc,
      },
    }),

  // ERROR

  minorToast: ({ text1, desc = "" }) =>
    Toast.show({
      type: "minorToast",
      text1: text1,
      props: {
        error: desc,
      },
    }),

  someThingWentWrong: (desc = "") =>
    Toast.show({
      type: "someThingWentWrong",
      props: {
        error: desc,
      },
    }),

  whoLogin: (user = "") =>
    Toast.show({
      type: "whoLogin",
      text1: user,
    }),
};
