import { View, Text, StyleSheet, Image, Pressable } from "react-native";
//import DropShadow from "react-native-drop-shadow";

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
      <Pressable
        style={selectedHome === true ? styles.selectedSection : styles.section}
        onPress={goHome}
      >
        <MaterialCommunityIcons
          name="home-outline"
          size={35}
          color={selectedHome == true ? "orange" : "#075E54"}
        />

        <Text
          style={
            selectedHome === true ? styles.footerTextSlected : styles.footerText
          }
        >
          Home
        </Text>
      </Pressable>
      <Pressable
        style={selectedCat === true ? styles.selectedSection : styles.section}
        onPress={goToCat}
      >
        <AntDesign
          name="appstore-o"
          size={35}
          color={selectedCat == true ? "orange" : "#075E54"}
        />
        <Text
          style={
            selectedCat === true ? styles.footerTextSlected : styles.footerText
          }
        >
          Category
        </Text>
      </Pressable>

      <Pressable
        style={selectedCart === true ? styles.selectedSection : styles.section}
        onPress={goToCart}
      >
        <View>
          <Text
            style={
              selectedCart === true ? { color: "orange" } : { color: "#075E54" }
            }
          >
            {number > 0 ? number : "Empty"}
          </Text>
        </View>

        <MaterialCommunityIcons
          name="cart-variant"
          size={35}
          color={selectedCart == true ? "orange" : "#075E54"}
        />
        <Text
          style={
            selectedCart === true ? styles.footerTextSlected : styles.footerText
          }
        >
          Cart
        </Text>
      </Pressable>
      <Pressable
        style={selectedAcc === true ? styles.selectedSection : styles.section}
        onPress={goToAccount}
      >
        {/* <Ionicons name="md-person" size={50} color="#075E54" /> */}
        <FontAwesome5
          name="user-circle"
          size={35}
          color={selectedAcc == true ? "orange" : "#075E54"}
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
    backgroundColor: "#FFFFE0",
    //backgroundColor: "orange",
    flex: 0.15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  footerText: {
    color: "#075E54",
    fontSize: 14,
    //fontWeight: "bold",
  },
  footerTextSlected: {
    color: "orange",
    fontSize: 14,
    fontWeight: "bold",
  },
  section: {
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    // shadowColor: "#171717",
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.4,
    // shadowRadius: 2,
    width: "20%",
    height: 100,
    //borderRadius: 120,
  },
  selectedSection: {
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    //height: 60,
    // borderRadius: 160,
    // backgroundColor: "#171717",
    // display: "flex",
    // flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
});
