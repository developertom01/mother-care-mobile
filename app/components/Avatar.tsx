import { View, Text, Image } from "react-native";
import React from "react";
import { Images } from "../../constants";
interface AvatarProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  wrapperClassName?: string;
  image?: any;
}
const Avatar: React.FC<AvatarProps> = ({
  wrapperClassName = "",
  size = "sm",
  text,
  image,
}) => {
  const sizes =
    size === "lg"
      ? "w-[65px] h-[65px]"
      : size === "md"
      ? "w-[55px] h-[55px]"
      : "w-[45px] h-[45px]";
  return (
    <View
      className={`flex flex-row items-center space-x-4 ${wrapperClassName}`}
    >
      <View className={`${sizes} rounded-full relative overflow-hidden`}>
        <Image
          className="absolute h-full w-full"
          source={image || Images.Doctor1}
        />
      </View>
      {text && <Text className="font-bold text-base">{text}</Text>}
    </View>
  );
};

export default Avatar;
