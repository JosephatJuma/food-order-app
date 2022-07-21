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
  slected,
}) => {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.section} onPress={goHome}>
        <MaterialCommunityIcons name="home-outline" size={55} color="#000080" />
        {/* <Ionicons name="md-home" size={50} color="#000080" /> */}
        <Text style={styles.footerText}>Home</Text>
      </Pressable>
      <Pressable style={styles.section} onPress={goToCat}>
        <AntDesign name="appstore-o" size={50} color="#000080" />
        <Text style={styles.footerText}>Category</Text>
      </Pressable>
      <Pressable style={styles.section} onPress={goToCart}>
        <View>
          {number > 0 ? (
            <Text style={styles.itemsOnCart}>{number}</Text>
          ) : (
            <Text>Empty</Text>
          )}
        </View>

        <MaterialCommunityIcons name="cart-variant" size={50} color="#000080" />
        <Text style={styles.footerText}>Cart</Text>
      </Pressable>
      <Pressable style={styles.section} onPress={goToAccount}>
        {/* <Ionicons name="md-person" size={50} color="#000080" /> */}
        <FontAwesome5 name="user-circle" size={50} color="#000080" />
        <Text style={styles.footerText}>Account</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    // backgroundColor: "#F5F5DC",
    backgroundColor: "orange",
    flex: 0.2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  footerText: {
    color: "#000080",
    fontSize: 15,
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
  },
  select: {
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
    backgroundColor: "green",
  },
  image: {
    width: 50,
    height: 50,
  },
  itemsOnCart: {
    color: "#000080",
    fontSize: 18,
    fontWeight: "bold",
  },
});
