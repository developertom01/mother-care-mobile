import { Image, View, Text } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";

interface Avatar {
  /** The Avatar Image source */
  source?: React.ComponentProps<typeof Image>["source"];
  /** The text to show when no image is provided */
  alt?: string;
  /** Set avatar height
   * @default 50
   */
  height?: number;
  /** Set avatar width
   * @default 50
   */
  width?: number;
  /** Set Avatar variant
   * @default "circular"
   */
  variant?: "circular" | "rounded";
}

// Extract and return first chars from alt text
const renderAltText = (alt: string): string => {
  if (alt.length) {
   const split = alt.split(" ", 2);
   let result = "";
   for (const item of split) {
     result = result + item[0];
      }
      
      return result
  }
  
  return "";
};

/**
 * Avatar Component
 */
const Avatar = ({
  height = 50,
  width = 50,
  variant = "circular",
  ...props
}: Avatar) => {
  const [loadError, setLoadError] = useState(false);

  if (!loadError && props.source) {
    return (
      <Image
        source={props.source}
        height={height}
        width={width}
        alt={props.alt}
        onError={() => setLoadError(false)}
        style={{
          borderRadius: variant === "circular" ? height / 2 : 5,
          height,
          width,
        }}
      />
    );
  }
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: Colors.gray.xlight,
        borderRadius: variant === "circular" ? height / 2 : 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontFamily: "Poppins", fontSize: 20, textTransform: "uppercase", }}>
        {props.alt ? renderAltText(props.alt) : ""}
      </Text>
    </View>
  );
};

export default Avatar;
