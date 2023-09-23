import { View, Text } from "react-native";
import React, { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className="flex justify-end h-full ">
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-3xl font-thin pb-4">
          Stu<Text className="font-bold">Fin</Text>
        </Text>
        <Text>Student personal finance empowerment</Text>
      </View>
      {children}
    </View>
  );
};

export default AuthLayout;
