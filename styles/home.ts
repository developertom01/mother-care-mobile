import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const HomeStyles = StyleSheet.create({
  sectionHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
  },
  headerLink: {
    color: "#04844E",
  },
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50
  },
  searchBtn: {
    width: 40,
    height: "80%",
    borderColor: Colors.gray.xlight,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
  searchBtnImage: {
    width: "70%",
    height: "70%",
  },
});
