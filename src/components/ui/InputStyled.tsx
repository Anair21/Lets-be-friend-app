import { KeyboardTypeOptions, TextInput } from "react-native";

export const BasicInput = ({
  className,
  type,
  placeholder,
  secureTextEntry = false,
  onChangeText,
}: {
  placeholder: string;
  className?: string;
  type?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}) => {
  return (
    <TextInput
      style={{
        fontFamily: "Montserrat-Medium",
      }}
      onChangeText={onChangeText}
      placeholder={placeholder}
      className={` rounded-md textWhite border-none input-clr focus-visible:ring-offset-0 px-4 py-1 placeholder:text-content/70 placeholder:tracking-wider ${className}`}
      secureTextEntry={secureTextEntry}
      keyboardType={type}
      underlineColorAndroid={"transparent"}
    />
  );
};
