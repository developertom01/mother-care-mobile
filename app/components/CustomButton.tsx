import { Text, Pressable, ButtonProps, ActivityIndicator } from "react-native";
import React, { useMemo } from "react";
type CustomButtonProps = {
  type?: "primary" | "white" | "secondary";
  loading?: boolean;
  extraClassName?: string;
} & ButtonProps;
// const primaryButton = "bg-violet-800";
// const whiteButton = "bg-white";
// const secondaryButton = "bg-gray-200";
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  color = "white",
  onPress,
  type = "primary",
  loading = false,
  extraClassName,
}) => {
  const getStyles = useMemo(() => {
    return type === "secondary"
      ? {
          text: "text-violet-800",
          bg: "bg-violet-200",
        }
      : type === "white"
      ? {
          text: "text-white",
          bg: "bg-white",
        }
      : {
          text: "text-white",
          bg: "bg-green-700",
        };
  }, []);
  return (
    <Pressable
      disabled={loading}
      onPress={onPress}
      className={`p-5 px-8  rounded-full mt-2 flex flex-row items-center justify-center space-x-4 ${extraClassName} `.concat(
        getStyles.bg
      )}
      style={{
        // backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
    >
      <Text
        className={"text-center font-bold text-[16px]  ".concat(getStyles.text)}
      >
        {title}
      </Text>
      {loading && <ActivityIndicator color={"white"} />}
    </Pressable>
  );
};

export default CustomButton;
