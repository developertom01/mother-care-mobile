import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes, { type RouteRootStackParamList } from "../../../constants/routes";
import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";
import HomeTabNavigation from "./HomeTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import DoctorDetails from "../../screens/doctor";

const Stack = createNativeStackNavigator<RouteRootStackParamList>();

const AppBaseNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.TAB}>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.LOGIN} component={Login} />
        <Stack.Screen name={Routes.REGISTER} component={Register} />
      </Stack.Group>

      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.DOCTOR_DETAIL} component={DoctorDetails} />
      </Stack.Group>

      <Stack.Screen
        name={Routes.TAB}
        options={{ headerShown: false }}
        component={HomeTabNavigation}
      />
    </Stack.Navigator>
  );
};

export default AppBaseNavigator;
