import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AppIcon } from "../../../components";
import { Colors, Icons, Images, Spacing } from "../../../constants";
import Layout from "../../components/layout";

const DoctorDetails = ({ navigation, id }) => {
  return (
    <Layout>
      {/* <ScrollView style={{ flex: 1 }}> */}
      <View style={styles.imageWrapper}>
        <Image
          source={Images.Doctor5}
          style={{ width: "100%" }}
          resizeMode="cover"
        />
        {/* Custom Back Button */}
        <View style={styles.backButtonWrapper}>
          <TouchableOpacity style={styles.backButton} onPress={navigation.back}>
            <AppIcon
              iconType="font"
              name="chevron-left"
              size={20}
              color={Colors.dark.background}
              style={{ height: "100%", width: "100%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <View style={{ rowGap: 12 }}>
          <Text style={styles.nameOfDoctor}>Dr. Thomas Sarpong</Text>
          <Text
            style={{
              fontSize: 15,
              color: Colors.gray.normal,
              fontFamily: "Poppins",
            }}
          >
            Obstetrician
          </Text>
          <View style={styles.detailsWrapper}>
            <View
              style={{
                flexDirection: "row",
                columnGap: 2,
                alignItems: "center",
              }}
            >
              <AppIcon
                iconType="font"
                name="star"
                size={15}
                color={Colors.green}
              />
              <Text
                style={{
                  color: Colors.green,
                  fontSize: 15,
                  fontFamily: "Poppins",
                }}
              >
                4.5
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AppIcon
                iconType="image"
                source={Icons.location}
                height={17}
                width={17}
                tintColor={Colors.gray.normal}
              />
              <Text
                style={{
                  color: Colors.gray.light,
                  fontSize: 15,
                  fontFamily: "Poppins",
                }}
              >
                Trust Mother & Care
              </Text>
            </View>
          </View>
        </View>
        {/* Biography section */}
        <View style={{ marginTop: Spacing.xl }}>
          <Text
            style={{ fontSize: 18, fontWeight: "600", fontFamily: "Poppins" }}
          >
            Biogrpaphy
          </Text>
          <Text
            style={{
              marginTop: Spacing.sm,
              fontSize: 15,
              color: Colors.gray.normal,
              lineHeight: 22,
              fontFamily: "Poppins",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, amet
            est. Ea ipsam eaque, ex nulla hic temporibus minima, unde culpa
            quasi veniam sunt labore, aspernatur cum fugiat animi numquam
            veritatis rerum molestiae! Quo nulla eveniet dignissimos minima
            corrupti expedita harum, nisi cupiditate, dolorem, asperiores nam
            suscipit qui fugiat! Iste eaque explicabo harum in, vel culpa totam
            rerum, sit nisi quia ducimus maxime fugit eius.
          </Text>
        </View>
      </View>
      {/* </ScrollView> */}
    </Layout>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    position: "relative",
  },
  backButtonWrapper: {
    top: 20,
    left: 20,
    width: 35,
    height: 35,
    borderRadius: 20,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    shadowColor: Colors.gray.normal,
  },
  backButton: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 8,
  },
  aboutContainer: {
    height: "100%",
    padding: 20,
    shadowColor: Colors.gray.normal,
    shadowOffset: { width: 50, height: 50 },
    backgroundColor: "#fff",
    elevation: 10,
  },
  nameOfDoctor: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
  },
});
