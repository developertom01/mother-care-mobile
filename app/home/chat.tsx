import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Avatar, SafeArea, Searchbar } from "../../components";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { DoctorsData } from "../../constants/vendor";
import { useRouter } from "expo-router";
import { Colors, Spacing, Images } from "../../constants";

const Message = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{ height: 80, paddingVertical: 13, marginBottom: 3 }}
      onPress={() => router.push("/doctor-details/2")}
    >
      <View style={styles.chatContainer}>
        <Avatar source={Images.Doctor4} alt="Sam" height={60} width={60} />
        <View style={styles.chatUserWrapper}>
          <Text style={styles.chatUser} numberOfLines={1}>
            Dr. Browny Osborn
          </Text>
          <Text style={styles.message} numberOfLines={1}>
            Nice seeing you again
          </Text>
        </View>
        <Text style={styles.chatTime}>11.00PM</Text>
      </View>
    </TouchableOpacity>
  );
};

const ChatScreen = () => {
  return (
    <SafeArea>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={{ marginBottom: Spacing.xl }}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              fontFamily: "Poppins",
              marginBottom: Spacing.lg,
            }}
          >
            Chats
          </Text>
          <Searchbar />
        </View>
        {/* Active Doctors */}
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              fontFamily: "Poppins",
              marginBottom: Spacing.md,
            }}
          >
            Active Doctors
          </Text>
          <FlatList
            horizontal
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
        </View>
        <View style={{ marginTop: Spacing.lg }}>
          {[...DoctorsData, ...DoctorsData].map((item, index) => (
            <Message key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  chatUserWrapper: {
    marginHorizontal: 10,
    rowGap: 5,
    flex: 1,
  },
  message: {
    color: Colors.gray.normal,
    fontFamily: "Poppins"
  },
  chatUser: {
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: Colors.dark.background,
  },
  chatTime: {
    color: Colors.gray.light,
    fontSize: 12,
    alignSelf: "flex-start",
    marginTop: Spacing.sm,
    fontFamily: "Poppins"
  },
});
