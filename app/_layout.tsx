import { Stack, Tabs } from "expo-router";
import Colors from "../constants/Colors";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.background,
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="doctor-details/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}