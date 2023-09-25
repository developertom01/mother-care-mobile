import { View, Text, FlatList } from "react-native";
import React from "react";
import Layout from "../../components/layout";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FormInput from "../../components/forms/FormInput";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader";
import { Avatar } from "../../../components";
import { DoctorsData } from "../../../constants/vendor";
import MessageTile from "../../components/MessageTile";
import ChatData from "../../../data/chats.json";

const Chat = () => {
  return (
    <Layout title="Chats">
      <Container>
        <View className="flex-1">
          <FormInput
            placeholder="Search for doctors"
            prefixComponent={{ Icon: EvilIcons, name: "search" }}
          />
        </View>
      </Container>

      <View className="px-4 pb-5">
        <SectionHeader showSeeAll={false} heading="Active Doctors" />
      </View>
      <FlatList
        horizontal
        className="ml-4"
        data={[...DoctorsData, ...DoctorsData]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Avatar
            source={item.image}
            height={70}
            width={70}
            alt="Browny Wirekoh"
          />
        )}
        contentContainerStyle={{ columnGap: 15 }}
        showsHorizontalScrollIndicator={false}
      />
      <Container>
        <View className="mt-2">
          {ChatData?.map((item, index) => (
            <MessageTile
              name={item.name}
              lastMessage={item.messages.at(-1).text}
              id={item.doctorId}
              key={index}
            />
          ))}
        </View>
      </Container>
    </Layout>
  );
};

export default Chat;
