import { View, Text, Image } from "react-native";
import React, { PropsWithChildren } from "react";
import { ActivityIndicator } from "react-native";

const Container: React.FC<
  PropsWithChildren<{ loading?: boolean; empty?: boolean }>
> = ({ children, empty = false, loading = false }) => {
  const Loader = () => (
    <>
      <View className="w-[200px] h-[200px] mx-auto">
        {/* <Image
          className="w-full h-full"
          source={require("../../assets/images/void.png")}
        /> */}
        <Text>PUT IMAGE HERE</Text>
      </View>
      {empty ? (
        <Text className="text-center text-red-300  text-2xl mb-4">
          No data at the moment
        </Text>
      ) : (
        <>
          <ActivityIndicator color={"red"} />
          <Text className="text-center text-red-300  text-2xl mb-4">
            Loading Data...
          </Text>
        </>
      )}
    </>
  );
  if (loading || empty) {
    return <Loader />;
  }
  return <View className="px-4">{children}</View>;
};

export default Container;
