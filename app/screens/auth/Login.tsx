import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import FormInput from "../../components/forms/FormInput";
import IonIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import SSOAuth from "./inc/SSOAuth";
import Routes from "../../../constants/routes";

const Login = ({ navigation }) => {
  return (
    <View className="flex-1 px-4 flex flex-col pt-16">
      <View className="flex-1">
        <Text className="text-3xl font-bold pb-2">Log in</Text>
        <Text className="text-gray-400 mb-5">
          Join our community of {"\n"}expecting moms
        </Text>
        <View>
          <View>
            <FormInput
              placeholder="emaraldquashie@gmail.com"
              prefixComponent={{ Icon: IonIcon, name: "mail-outline" }}
              label="E-mail"
            />
            <FormInput
              placeholder="emaraldquashie@gmail.com"
              prefixComponent={{ Icon: SimpleLineIcons, name: "lock" }}
              label="Password"
              type="password"
            />
          </View>
          <CustomButton
            onPress={() => navigation.navigate(Routes.TAB)}
            extraClassName="mt-5"
            title="Log in"
          />
        </View>
        <SSOAuth label="Sign in with" />
      </View>
      <View className="flex flex-row items-center justify-center">
        <Text className="font-bold text-base text-center py-4">
          Don't have an account?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate(Routes.REGISTER)}>
          <Text className="text-green-700 font-bold">Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
