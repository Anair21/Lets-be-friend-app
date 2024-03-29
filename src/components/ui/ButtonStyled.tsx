import { Pressable } from "react-native";
import { TextBold } from "./TextStyled";

export const BasicBtn = ({
  children,
  className,
  onPress,
  textSize,
}: {
  children?: any;
  className?: string;
  textSize?: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={` rounded-md flex justify-center items-center ${className}`}
    >
      <TextBold className={`tracking-wide textWhite ${textSize}`}>
        {children}
      </TextBold>
    </Pressable>
  );
};
