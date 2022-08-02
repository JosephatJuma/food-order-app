import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export const Header = ({ cart }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/Images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.appName}>Unify Shopping</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    //backgroundColor: "blue",
    backgroundColor: "#075E54",
    flex: 0.12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  appName: {
    color: "orange",
    //color: "#000080",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    width: 50,
    height: 50,
    margin: 20,
  },
});
