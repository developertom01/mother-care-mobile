import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useMemo, useState } from "react";
import { AppIcon } from "../../../components";
import { Colors, Icons, Images, Spacing } from "../../../constants";
import Layout from "../../components/layout";
import DoctorsData from "../../../data/doctor.json";
import { doctorsImage } from "../../../constants/vendor";

const DoctorDetails = ({ navigation, route }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const getDoctor = useMemo(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return DoctorsData.find((doctor) => doctor.id == route?.params.id);
  }, []);

  if (loading)
    return (
      <View className="flex-1 flex justify-center items-center">
        <ActivityIndicator />
        <Text>Loading</Text>
      </View>
    );
  return (
    <Layout>
      {/* <ScrollView style={{ flex: 1 }}> */}
      {getDoctor ? (
        <>
          <View className="relative h-[300px]">
            <Image
              source={doctorsImage[getDoctor.id - 1 || 0]}
              className="absolute w-full h-full object-cover"
            />
            {/* Custom Back Button */}
            <View style={styles.backButtonWrapper}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
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
              <Text style={styles.nameOfDoctor}>{getDoctor.name}</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.gray.normal,
                  fontFamily: "Poppins",
                }}
              >
                {getDoctor.speciality}
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
                    {getDoctor.rating}
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
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  fontFamily: "Poppins",
                }}
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
                {getDoctor.name} is a compassionate and highly skilled physician
                specializing in {getDoctor.speciality}. Known for their
                dedication to personalized care and staying up-to-date with the
                latest advancements in medicine, {getDoctor.name} is committed
                to providing top-notch healthcare to their patients. Their
                exceptional communication and empathetic approach make them a
                trusted and respected healthcare professional in the community.
              </Text>
            </View>
          </View>
        </>
      ) : (
        <View>
          <Text>NO DATA</Text>
        </View>
      )}
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
