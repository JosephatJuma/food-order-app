import { View, Text, StyleSheet, Image, Pressable } from "react-native";
//import DropShadow from "react-native-drop-shadow";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const Footer = ({
  number,
  goToCart,
  goHome,
  goToAccount,
  goToCat,
  selectedHome,
  selectedCart,
  selectedAcc,
  selectedCat,
}) => {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.section} onPress={goHome}>
        <MaterialCommunityIcons
          name="home-outline"
          size={40}
          color={selectedHome == true ? "green" : "#000080"}
        />

        <Text
          style={
            selectedHome === true ? styles.footerTextSlected : styles.footerText
          }
        >
          Home
        </Text>
      </Pressable>
      <Pressable style={styles.section} onPress={goToCat}>
        <AntDesign
          name="appstore-o"
          size={40}
          color={selectedCat == true ? "green" : "#000080"}
        />
        <Text
          style={
            selectedCat === true ? styles.footerTextSlected : styles.footerText
          }
        >
          Category
        </Text>
      </Pressable>

      <Pressable style={styles.section} onPress={goToCart}>
        <View>
          <Text
            style={
              selectedCart === true ? { color: "green" } : { color: "#000080" }
            }
          >
            {number > 0 ? number : "Empty"}
          </Text>
        </View>

        <MaterialCommunityIcons
          name="cart-variant"
          size={40}
          color={selectedCart == true ? "green" : "#000080"}
        />
        <Text
          style={
            selectedCart === true ? styles.footerTextSlected : styles.footerText
          }
        >
          Cart
        </Text>
      </Pressable>
      <Pressable style={styles.section} onPress={goToAccount}>
        {/* <Ionicons name="md-person" size={50} color="#000080" /> */}
        <FontAwesome5
          name="user-circle"
          size={40}
          color={selectedAcc == true ? "green" : "#000080"}
        />
        <Text
          style={
            selectedAcc === true ? styles.footerTextSlected : styles.footerText
          }
        >
          Account
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#F5F5D6",
    //backgroundColor: "orange",
    flex: 0.15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  footerText: {
    color: "#000080",
    fontSize: 14,
    //fontWeight: "bold",
  },
  footerTextSlected: {
    color: "green",
    fontSize: 14,
    fontWeight: "bold",
  },
  section: {
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    width: "20%",
    height: 100,
    borderRadius: 120,
  },
  image: {
    width: 50,
    height: 50,
  },
});
