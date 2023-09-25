import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { Avatar } from "../../components";
import { Images } from "../../constants";
import { NavigationProp } from "@react-navigation/native";
import Routes, { RouteRootStackParamList } from "../../constants/routes";
import { doctorsImage } from "../../constants/vendor";

const MessageTile = (props: {
  name: string;
  id: number;
  lastMessage: string;
}) => {
  const navigation = useNavigation<NavigationProp<RouteRootStackParamList>>();
  return (
    <TouchableOpacity
      // style={{ height: 80, paddingVertical: 13, marginBottom: 3 }}
      onPress={() =>
        navigation.navigate(Routes.CHAT_MESSAGING, { id: props.id as any })
      }
      className="flex flex-row items-start gap-3 py-4"
    >
      {/* <View> */}
      <Avatar
        source={doctorsImage[props.id - 1 || 0]}
        alt="Sam"
        height={60}
        width={60}
      />
      <View className="flex-1 flex gap-2">
        <Text numberOfLines={1}>{props.name}</Text>
        <Text numberOfLines={1}>{props.lastMessage}</Text>
      </View>
      <Text>11.00PM</Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default MessageTile;
