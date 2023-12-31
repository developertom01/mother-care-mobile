import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import AppIcon from "../app-icon";
import Icons from "../../constants/Icons";
import { useRouter } from "expo-router";

interface CardInterface {
  /**Doctor image url */
  imageUrl: React.ComponentProps<typeof Image>["source"];
  /**Name of the doctor */
  name: string;
  /**The speciality of the doctor */
  speciality: string;
  /**Doctor's rate */
  rating: number;
  /**Doctor's location */
  location: string;
}

const DoctorCard = (props: CardInterface) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push("/doctor-details/2")}
    >
      <View style={styles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={props.imageUrl} style={styles.image} />
        </View>
        <View>
          <Text style={styles.name} numberOfLines={1}>
            Dr. {props.name}
          </Text>
          <Text style={styles.doctorTitle}>{props.speciality}</Text>
          <View style={styles.detailsWrapper}>
            <View style={{ flexDirection: "row", columnGap: 2 }}>
              <AppIcon
                iconType="font"
                name="star"
                size={13}
                color={Colors.green}
              />
              <Text style={{ color: Colors.green, fontSize: 13 }}>
                {props.rating}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <AppIcon
                iconType="image"
                source={Icons.location}
                height={15}
                width={15}
                tintColor={Colors.gray.normal}
              />
              <Text style={{ color: Colors.gray.light, fontSize: 13 }}>
                {props.location}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 130,
  },
  innerWrapper: {
    height: "100%",
    width: "100%",
  },
  imageWrapper: {
    height: "70%",
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  doctorTitle: {
    fontSize: 15,
    color: Colors.gray.normal,
    marginBottom: 5,
  },
  name: {
    fontWeight: "600",
    marginBottom: 5,
    fontSize: 13.5,
  },
});
