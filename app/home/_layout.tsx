import { Tabs } from "expo-router";
import { Image, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import Icons from "../../constants/Icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  source: React.ComponentProps<typeof Image>["source"];
  color: string;
  focused: boolean;
}) {
  return (
    <Image
      style={TabStyle.tabIcon}
      resizeMode="contain"
      {...props}
      tintColor={props.focused ? props.color : Colors.gray.normal}
    />
  );
}

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.green,
        headerShadowVisible: false,
        headerTitle: "",
        tabBarStyle: TabStyle.tabsContainer,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon source={Icons.home} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              source={Icons.notification}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon source={Icons.chat} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              source={Icons.settings}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const TabStyle = StyleSheet.create({
  tabIcon: {
    height: 28,
    width: 28,
  },
  tabsContainer: {
    borderTopWidth: 0,
  },
});
