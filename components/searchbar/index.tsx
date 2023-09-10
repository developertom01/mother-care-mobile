import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Icons from "../../constants/Icons";
import AppIcon from "../app-icon";

const Searchbar = ({}) => {
  return (
    <View style={styles.container}>
      <AppIcon
        iconType="image"
        source={Icons.search}
        height={30}
        style={styles.searchIcon}
        tintColor={Colors.gray.light}
      />
      <TextInput
        placeholder="Search for Doctors"
        style={styles.input}
        placeholderTextColor={Colors.gray.light}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.gray.xlight,
    height: 50,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
    height: 30,
    width: 30,
  },
  input: {
    flex: 1,
    height: "100%",
  },
});
