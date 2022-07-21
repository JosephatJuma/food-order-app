import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export const Header = ({ cart }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/Images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.appName}>JJ Foods</Text>
      {/* <View>
        <Ionicons name="cart" size={32} color="white" />
        <Text sty>{cart}</Text>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    //backgroundColor: "green",
    backgroundColor: "#000080",
    flex: 0.18,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  appName: {
    color: "white",
    //color: "#000080",
    fontSize: 40,
  },
  logo: {
    width: 50,
    height: 50,
    margin: 20,
  },
});
