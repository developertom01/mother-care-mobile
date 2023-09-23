import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { Avatar } from "../../components";
import { Images } from "../../constants";
import { NavigationProp } from "@react-navigation/native";
import Routes, { RouteRootStackParamList } from "../../constants/routes";

const MessageTile = () => {
  const navigation = useNavigation<NavigationProp<RouteRootStackParamList>>();
  return (
    <TouchableOpacity
      // style={{ height: 80, paddingVertical: 13, marginBottom: 3 }}
      onPress={() => navigation.navigate(Routes.CHAT_MESSAGING)}
      className="flex flex-row items-start gap-3 py-4"
    >
      {/* <View> */}
      <Avatar source={Images.Doctor4} alt="Sam" height={60} width={60} />
      <View className="flex-1 flex gap-2">
        <Text numberOfLines={1}>Dr. Browny Osborn</Text>
        <Text numberOfLines={1}>Nice seeing you again</Text>
      </View>
      <Text>11.00PM</Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default MessageTile;
