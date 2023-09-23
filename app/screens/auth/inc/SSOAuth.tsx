import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Icons from "../../../../constants/Icons";

const SSOAuth:React.FC<{label: string}> = ({label}) => {
  return (
    <View className="py-4">
      <Text className="text-center font-bold mb-4 text-base">{label}</Text>
      <View className="flex flex-row gap-8 justify-center">
        <Pressable>
          <Image source={Icons.socialIcons.google} />
        </Pressable>
        <Pressable>
          <Image source={Icons.socialIcons.facebook} />
        </Pressable>
        <Pressable>
          <Image source={Icons.socialIcons.apple} />
        </Pressable>
      </View>
    </View>
  );
};

export default SSOAuth;
