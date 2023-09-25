import { View, Text, Image, Pressable, FlatList } from "react-native";
import React from "react";
import FormInput from "../components/forms/FormInput";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { Icons } from "../../constants";
import { DoctorCard } from "../../components";
// import { DoctorsData } from "../../constants/vendor";
import SectionHeader from "../components/SectionHeader";
import Layout from "../components/layout";
import DoctorsData from "../../data/doctor.json";
const Home = () => {
  return (
    <Layout>
      <View className="px-4">
        <Text className="text-2xl font-semibold mt-5">
          Good Morning, {"\n"}Emerald
        </Text>
        {/* Search */}
        <View className="flex flex-row items-center gap-2 mt-5">
          <View className="flex-1">
            <FormInput
              placeholder="Search for doctors"
              prefixComponent={{ Icon: EvilIcons, name: "search" }}
            />
          </View>
          <View className="border border-gray-500 w-[40px] h-[40px]  rounded-xl flex justify-center items-center ">
            <View className="relative" style={{ width: 25, height: 25 }}>
              <Image
                resizeMode="cover"
                className="absolute w-full h-full "
                source={Icons.filter}
              />
            </View>
          </View>
        </View>
        {/* Top Doctos */}
        <View>
          <SectionHeader heading="Top Doctors" />
          <FlatList
            data={DoctorsData}
            renderItem={({ item }) => (
              <DoctorCard
                id={item.id}
                name={item.name}
                // imageUrl={item.image}
                speciality={item.speciality}
                rating={item.rating}
                location={item.location}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ columnGap: 15 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Top Doctos */}
        <View>
          <SectionHeader heading="Nearby Doctors" />
          <FlatList
            data={DoctorsData}
            renderItem={({ item }) => (
              <DoctorCard
                id={item.id}
                name={item.name}
                // imageUrl={item.image}
                speciality={item.speciality}
                rating={item.rating}
                location={item.location}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ columnGap: 15 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Home;
