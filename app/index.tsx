import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../contexts/apollo/apploClient";
import SocketsContextProvider from "../contexts/socketsContext";

export default function HomeScreen({}) {

  const [fontsLoaded] = useFonts({
    "Poppins": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View>
      <Text>error Loading fonts</Text>
    </View>
  }

  return (
    <ApolloProvider client={apolloClient} >
      <SocketsContextProvider>
        <Redirect href={"/auth/register/"} />
      </SocketsContextProvider>
    </ApolloProvider>

  );
}
