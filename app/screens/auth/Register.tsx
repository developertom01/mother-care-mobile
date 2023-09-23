import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import FormInput from "../../components/forms/FormInput";
import IonIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import SSOAuth from "./inc/SSOAuth";
import Routes from "../../../constants/routes";

const Register = ({ navigation }) => {
  return (
    <View className="flex-1 px-4 flex flex-col pt-8">
      <View className="flex-1">
        <Text className="text-2xl font-bold pb-2">Create Account</Text>
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
          <CustomButton extraClassName="mt-5" title="Register" />
        </View>
        <SSOAuth label="Sign up with" />
        <View>
          <Text className="text-center">
            By Registering you agreed with the {"\n"}
            <Text className="text-green-700 font-bold">
              Terms of Service
            </Text> &{" "}
            <Text className="text-green-700 font-bold">Private Policy</Text>
          </Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-center">
        <Text className="font-bold text-base text-center py-4">
          Already have account?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate(Routes.LOGIN)}>
          <Text className="text-green-700 font-bold">Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
