import { Text } from "react-native";

export const TextAccent = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <Text className={className} style={{ fontFamily: "Itim-Regular" }}>
      {children}
    </Text>
  );
};

export const TextLight = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <Text className={className} style={{ fontFamily: "Montserrat-Light" }}>
      {children}
    </Text>
  );
};

export const TextRegular = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <Text className={className} style={{ fontFamily: "Montserrat-Regular" }}>
      {children}
    </Text>
  );
};

export const TextMedium = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return (
    <Text className={className} style={{ fontFamily: "Montserrat-Medium" }}>
      {children}
    </Text>
  );
};

export const TextBold = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <Text className={className} style={{ fontFamily: "Montserrat-Bold" }}>
      {children}
    </Text>
  );
};

export const TextBlack = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <Text className={className} style={{ fontFamily: "Montserrat-Black" }}>
      {children}
    </Text>
  );
};
