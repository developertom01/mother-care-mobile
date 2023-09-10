import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

interface ImageIconProps {
  iconType?: "image";
  source: React.ComponentProps<typeof Image>["source"];
  tintColor?: React.ComponentProps<typeof Image>["tintColor"];
  style?: React.ComponentProps<typeof Image>["style"];
  height?: number;
  width?: number;
}

interface FontAwesomeProps {
  iconType?: "font";
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color?: React.ComponentProps<typeof FontAwesome>["color"];
  focused?: boolean;
  size?: React.ComponentProps<typeof FontAwesome>["size"];
  style?: React.ComponentProps<typeof FontAwesome>["style"];
}

type IconProps = ImageIconProps | FontAwesomeProps;

const AppIcon = (props: IconProps) => {
  switch (props.iconType) {
    case "image":
      return (
        <Image
          style={[
            { height: props.height || 20, width: props.width || 20 },
            props.style,
          ]}
          resizeMode="contain"
          tintColor={props.tintColor}
          {...props}
        />
      );
    case "font":
      return (
        <FontAwesome
          name={props.name}
          color={props.color}
          size={props.size || 12}
          style={props.style}
        />
      );
  }
};

export default AppIcon;
