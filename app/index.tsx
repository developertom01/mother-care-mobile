import { Redirect, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    "Poppins": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View>
      <Text>error Loading fonts</Text>
    </View>
  }

  return (
    // <SafeAreaView style={{ backgroundColor: Colors.light.background, flex: 1 }}>
    //   <ScrollView style={{ paddingHorizontal: 20 }}>
    //     <View>
    //       <Text style={{ fontSize: 24 }}>Good Morning,</Text>
    //       <Text style={{ fontSize: 24 }}>Browny</Text>
    //     </View>
    //     <View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <Redirect href={"/home/"} />
  );
}
