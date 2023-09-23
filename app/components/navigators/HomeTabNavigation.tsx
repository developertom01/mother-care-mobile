import { View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Routes from "../../../constants/routes";
import Home from "../../screens/Home";
import { Colors } from "../../../constants";
import Notification from "../../screens/Notification";
import Chat from "../../screens/chats";
import Settings from "../../screens/Settings";

const Tab = createBottomTabNavigator();
const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        return {
          tabBarActiveBackgroundColor: "transparent",
          tabBarStyle: {
            backgroundColor: "#f9f9f9f9",
            // elevation: 0,
            height: 70,
            borderRadius: 10,
            margin: 10,
            padding: 1,
            borderWidth: 0,
          },
          tabBarActiveTintColor: Colors.green,
          tabBarLabelStyle: {
            // display: "none",
            marginBottom: 10,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: 25,
          },
          headerBackgroundContainerStyle: {
            backgroundColor: "red",
          },
          // headerBackground: "transparent",
          tabBarIcon({ focused, color, size }) {
            let Icon = null;
            const _focusedSize = focused ? 20 : 18;
            const _focusedColor = focused ? Colors.green : color;
            switch (route.name) {
              case Routes.HOME:
                Icon = (
                  <SimpleLineIcons
                    color={_focusedColor}
                    size={_focusedSize}
                    name="home"
                  />
                );
                break;
              case Routes.NOTIFICATION:
                Icon = (
                  <FontAwesome
                    color={_focusedColor}
                    name="bell-o"
                    size={_focusedSize}
                  />
                );
                break;
              case Routes.CHATS:
                Icon = (
                  <IonIcons
                    color={_focusedColor}
                    name="chatbubbles-outline"
                    size={_focusedSize}
                  />
                );
                break;
              case Routes.SETTINGS:
                Icon = (
                  <FontAwesome
                    color={_focusedColor}
                    name="gear"
                    size={_focusedSize}
                  />
                );
                break;
            }
            return focused ? (
              <View className="w-[50px] h-[50px] flex justify-center items-center rounded-full">
                {Icon}
              </View>
            ) : (
              Icon
            );
          },
        };
      }}
    >
      <Tab.Screen
        name={Routes.HOME}
        options={{ headerTitle: "Overview", headerShown: false }}
        component={Home}
      />
      <Tab.Screen
        name={Routes.NOTIFICATION}
        options={{ headerTitle: "Overview", headerShown: false }}
        component={Notification}
      />
      <Tab.Screen
        name={Routes.CHATS}
        options={{ headerTitle: "Overview", headerShown: false }}
        component={Chat}
      />
      <Tab.Screen
        name={Routes.SETTINGS}
        options={{ headerTitle: "Overview", headerShown: false }}
        component={Settings}
      />
      {/* <Tab.Screen name={Routes.Budget} component={ListBudget} />
      <Tab.Screen name={Routes.Reminders} component={RemainderScreen} />
      <Tab.Screen name={Routes.Goal} component={Goal} />
      <Tab.Screen
        name={Routes.ProfileSetting}
        options={{ title: "Setting" }}
        component={ProfileSetting}
      /> */}
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
