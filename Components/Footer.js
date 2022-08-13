import { View, Text, StyleSheet, Image, Pressable } from "react-native";
//import DropShadow from "react-native-drop-shadow";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Badge } from "react-native-elements/dist/badge/Badge";

export const Footer = ({
  number,
  goToCart,
  goToAccount,
  goToCat,
  selectedCart,
  selectedAcc,
  selectedCat,
}) => {
  return (
    <View style={styles.footer}>
      <Pressable
        style={selectedCat === true ? styles.selectedSection : styles.section}
        onPress={goToCat}
      >
        <AntDesign
          name="appstore-o"
          size={30}
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
        <MaterialCommunityIcons
          name="cart-variant"
          size={30}
          color={selectedCart == true ? "orange" : "#075E54"}
        />
        <Text
          style={
            selectedCart === true ? styles.footerTextSlected : styles.footerText
          }
        >
          Cart
        </Text>
        <Badge
          status="success"
          containerStyle={{
            position: "absolute",
            top: "20%",
            right: "35%",
          }}
          badgeStyle={{
            width: 25,
            height: 25,
            borderRadius: 100,
            backgroundColor: selectedCart === true ? "orange" : "#075E54",
          }}
          value={number}
          textStyle={{ color: "#fff", fontSize: 10 }}
        />
      </Pressable>
      <Pressable
        style={selectedAcc === true ? styles.selectedSection : styles.section}
        onPress={goToAccount}
      >
        {/* <Ionicons name="md-person" size={50} color="#075E54" /> */}
        <FontAwesome5
          name="user-circle"
          size={30}
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
    maxHeight: 70,
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
    width: "30%",
    height: 100,
  },
  selectedSection: {
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    //backgroundColor: "#075E54",
    height: 100,
  },
  image: {
    width: 50,
    height: 50,
  },
});
