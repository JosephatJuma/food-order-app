import { useState } from "react";
import { Down } from "./Down";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

export const Main = ({ items, add, remove }) => {
  const [times, setTimes] = useState(1);
  return (
    <ScrollView style={styles.main}>
      {items ? (
        items.map((item) => {
          return (
            <View style={styles.item} key={item.id}>
              <Image source={item.imageSrc} style={styles.image} />
              <View style={styles.down}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemName}>UGX: {item.price}</Text>
                <View style={styles.bottom}>
                  <Pressable style={styles.button} onPress={add}>
                    <Ionicons name="cart" size={20} color="white" />
                    <Text style={(styles.text, styles.buttonText)}>
                      Add to cart
                    </Text>
                  </Pressable>
                  {times > 0 && (
                    <Pressable style={styles.button} onPress={remove}>
                      <Text style={(styles.text, styles.buttonText)}>
                        Delete
                      </Text>
                    </Pressable>
                  )}
                </View>
              </View>
            </View>
          );
        })
      ) : (
        <View></View>
      )}
      <Down />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  item: {
    width: "95%",
    backgroundColor: "#800020",
    height: 300,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    padding: 10,
    margin: 10,
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  itemName: {
    color: "white",
    fontSize: 18,
  },
  image: {
    width: "90%",
    height: "80%",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    height: 42,
    borderRadius: 10,
    margin: 10,
    display: "flex",
    flexDirection: "row",

    width: 120,
  },
  buttonText: {
    color: "white",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  down: {
    // backgroundColor: "purple",
    // width: "100%",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
  },
});
