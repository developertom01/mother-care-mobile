import { Text, Pressable } from "react-native";
import React, { PropsWithChildren } from "react";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../../constants/routes";

const Link: React.FC<
  PropsWithChildren<{
    label?: string;
    extraClassName?: string;
    to?: Routes;
  }>
> = ({ children, label, extraClassName, to }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => (to ? navigation.navigate(to as never) : {})}
      className={extraClassName}
    >
      {label ? <Text>{label}</Text> : children}
    </Pressable>
  );
};

export default Link;
