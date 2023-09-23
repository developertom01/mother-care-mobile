import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SectionHeader: React.FC<{
  heading: string;
  extraClassName?: string;
  route?: any;
  showSeeAll?: boolean;
}> = ({ heading, extraClassName = "", showSeeAll = true, route }) => {
  const navigation = useNavigation();
  return (
    <View
      className={"pt-4 flex flex-row justify-between items-center ".concat(
        extraClassName
      )}
    >
      <Text className="font-bold text-base">{heading}</Text>
      {showSeeAll && (
        <Pressable
          onPress={
            !route ? undefined : () => navigation.navigate(route as never)
          }
        >
          <Text className="font-semibold text-green-700">See All</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SectionHeader;
