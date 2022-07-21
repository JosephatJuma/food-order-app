import { View, Text, StyleSheet, Image } from "react-native";
import { Zocial } from "@expo/vector-icons";

export const Down = () => {
  return (
    <View style={styles.down}>
      <Text style={styles.text}>Copyright 2022, Unify Foods</Text>
      <View style={styles.socials}>
        <Zocial name="facebook" size={30} color="white" style={styles.icon} />
        <Zocial name="twitter" size={30} color="white" style={styles.icon} />
        <Zocial name="linkedin" size={30} color="white" style={styles.icon} />
        <Zocial name="instagram" size={30} color="white" style={styles.icon} />
        <Zocial name="github" size={30} color="white" style={styles.icon} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  down: {
    backgroundColor: "#2D2363",
    width: "100%",
    minHeight: 200,
    padding: 20,
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
  },
  icon: {
    padding: 5,
    margin: 10,
  },
});
