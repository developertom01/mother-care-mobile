import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { DoctorCard, Searchbar } from "../../components";
import { DoctorsData } from "../../constants/vendor";
import Icons from "../../constants/Icons";
import { HomeStyles } from "../../styles/home";

const SectionHeader = ({
  title,
  linkUrl,
}: {
  title: string;
  linkUrl: string;
}) => (
  <View style={HomeStyles.sectionHeader}>
    <Text style={HomeStyles.headerTitle}>{title}</Text>
    <Text style={HomeStyles.headerLink}>See All</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.light.background, flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        {/* Greeting */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20 }}>Good Morning,</Text>
          <Text style={{ fontSize: 20 }}>Browny</Text>
        </View>
        {/* Searchbar */}
        <View style={HomeStyles.searchContainer}>
          <Searchbar />
          <TouchableOpacity style={HomeStyles.searchBtn}>
            <Image
              source={Icons.filter}
              resizeMode="contain"
              style={HomeStyles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
        {/* Top Doctors Section */}
        <View style={{ marginTop: 30 }}>
          <SectionHeader title="Top Doctors" linkUrl="" />
          {/* Doctors */}
          <View>
            <FlatList
              data={DoctorsData}
              renderItem={({ item }) => (
                <DoctorCard
                  name={item.name}
                  imageUrl={item.image}
                  speciality={item.title}
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
        {/* Top Doctors Section */}
        <View style={{ marginTop: 30 }}>
          <SectionHeader title="Nearby Doctors" linkUrl="" />
          {/* Doctors */}
          <View>
            <FlatList
              data={DoctorsData}
              renderItem={({ item }) => (
                <DoctorCard
                  name={item.name}
                  imageUrl={item.image}
                  speciality={item.title}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
