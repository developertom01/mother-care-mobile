import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Layout from "../../components/layout";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Images } from "../../../constants";
import Avatar from "../../components/Avatar";
import Container from "../../components/Container";
import ChatMessages from "../../../data/chats.json";
import { doctorsImage } from "../../../constants/vendor";
interface ChatCardProps {
  type?: "receiver" | "sender";
  message?: string;
  image?: any;
}
const ChatCard: React.FC<ChatCardProps> = ({
  type = "sender",
  message = "",
  image,
}) => {
  return (
    <View
      className={`flex  items-start space-x-4 py-4 ${
        type === "sender" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {type === "sender" ? (
        <View className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gray-800">
          <Text className="text-white">ME</Text>
        </View>
      ) : (
        <Avatar image={image} />
      )}
      <View
        className="flex-1 bg-gray-200 min-h-[50px] p-4 px-8"
        style={{ borderBottomLeftRadius: 50, borderTopRightRadius: 80 }}
      >
        <Text style={{ lineHeight: 22 }} className="font-semibold">
          {message}
        </Text>
      </View>
    </View>
  );
};

const ChatMessaging = ({ navigation, route }) => {
  const scrollViewRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);
  const getChat = useMemo(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return ChatMessages.find((chat) => chat.id == route?.params.id);
  }, []);

  if (loading)
    return (
      <View className="flex-1 flex justify-center items-center">
        <ActivityIndicator />
        <Text>Loading</Text>
      </View>
    );

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
        <Avatar
          image={doctorsImage[getChat.doctorId -1 || 0]}
          text={getChat.name}
          size="md"
          wrapperClassName="flex-1"
        />
        <Pressable className="relative w-[30px]">
          <Text className="text-green-700">
            <IonIcons name="ellipsis-vertical" size={25} />
          </Text>
        </Pressable>
      </View>
      <View className="flex-1 px-4">
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
          {getChat?.messages.map((message, index) => (
            <ChatCard
              image={doctorsImage[getChat.doctorId - 1]}
              key={index}
              message={message.text}
              type={message.sender ? "sender" : "receiver"}
            />
          ))}
          {/* <ChatCard />
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
          <ChatCard type="receiver" /> */}
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
