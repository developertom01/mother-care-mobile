import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Avatar } from "../../components";
import styles from "../../components/searchbar/style";
import { Images } from "../../constants";

const MessageTile = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      // style={{ height: 80, paddingVertical: 13, marginBottom: 3 }}
      onPress={() => router.push("/doctor-details/2")}
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
