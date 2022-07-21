import { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { Down } from "./Down";
export const Category = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Chicken" },
    { id: 3, name: "Nyama Choma" },
    { id: 4, name: "Coffee" },
    { id: 5, name: "Snacks" },
    { id: 6, name: "Rolex" },
    { id: 7, name: "Drinks" },
  ]);
  return (
    <ScrollView style={styles.catSection}>
      <Text></Text>
      <View style={styles.cats}>
        {categories &&
          categories.map((cat) => {
            return (
              <Pressable style={styles.catItem} key={cat.id}>
                <Text>{cat.name}</Text>
              </Pressable>
            );
          })}
      </View>
      <Text></Text>
      <Down />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  catSection: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  cats: {
    width: "95%",
    backgroundColor: "#000080",
    alignSelf: "center",
    maxHeight: 1000,
    borderRadius: 20,
  },
  catItem: {
    backgroundColor: "grey",
    margin: 20,
    marginTop: 4,
    width: "85%",
    height: 50,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
});
