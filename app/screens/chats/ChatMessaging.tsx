import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Layout from "../../components/layout";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
// import { Avatar } from '../../../components'
import { Images } from "../../../constants";
import Avatar from "../../components/Avatar";
import Container from "../../components/Container";
interface ChatCardProps {
  type?: "receiver" | "sender";
}
const ChatCard: React.FC<ChatCardProps> = ({ type = "sender" }) => {
  return (
    <View
      className={`flex  items-start space-x-4 py-4 ${
        type === "sender" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <Avatar />
      <View
        className="flex-1 bg-gray-200 min-h-[50px] p-4 px-8"
        style={{ borderBottomLeftRadius: 50, borderTopRightRadius: 80 }}
      >
        <Text style={{ lineHeight: 22 }} className="font-semibold">
          Lorem ipsum dolor sit, amet consectetur? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Voluptas error numquam molestias est,
          nisi eaque repellendus totam eum temporibus quo suscipit ab quis
          nostrum magni dolorum quae ipsa alias dignissimos.
        </Text>
      </View>
    </View>
  );
};

const ChatMessaging = ({ navigation }) => {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when the component mounts
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, []);
  return (
    <View className="flex-1">
      <View className="px-4 py-2  flex flex-row items-center ">
        <Pressable
          onPress={() => navigation.goBack()}
          className="relative w-[30px]"
        >
          <FontAwesome name="chevron-left" size={25} />
        </Pressable>
        <Avatar text="Godfred Dari" size="md" wrapperClassName="flex-1" />
        <Pressable className="relative w-[30px]">
          <Text className="text-green-700">
            <IonIcons name="ellipsis-vertical" size={25} />
          </Text>
        </Pressable>
      </View>
      <View className="flex-1 px-4">
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
          <ChatCard />
          <ChatCard type="receiver" />
          <ChatCard />
          <ChatCard type="receiver" />
          <ChatCard />
          <ChatCard type="receiver" />
          <ChatCard />
          <ChatCard type="receiver" />
          <ChatCard />
          <ChatCard />
          <ChatCard type="receiver" />
          <ChatCard type="receiver" />
        </ScrollView>
      </View>
      <View className="p-2">
        <View className="flex flex-row space-x-4 pl-5 py-2 pr-2 items-center bg-gray-300 rounded-full ">
          <View className=" flex-1">
            <TextInput placeholder="Message" multiline={true} />
          </View>
          <Pressable className="h-[50px] w-[50px] bg-gray-800 flex justify-center items-center rounded-full">
            <FontAwesome name="paper-plane" color="white" size={18} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ChatMessaging;
