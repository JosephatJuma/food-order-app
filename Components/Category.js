import { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { Down } from "./Down";

const api_url = "http://192.168.1.2:10000/api/all/cat";
export const Category = () => {
  const [Loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(api_url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setCategories(data);
          setLoading(false);
        });
    }, 1000);
  }, []);
  return (
    <ScrollView style={styles.catSection} horizontal={true}>
      {Loading ? (
        <>
          <Image
            source={require("../assets/Images/loader.gif")}
            style={{
              width: 200,
              height: 150,
              alignSelf: "center",
              marginLeft: 100,
            }}
          />
        </>
      ) : categories ? (
        categories.map((cat) => {
          return (
            <View key={cat.id}>
              <Pressable style={styles.catItem} key={cat.id}>
                <Text style={styles.catName}>{cat.Name}</Text>
              </Pressable>
              <View style={styles.itemDetails}>
                <Text>{cat.Name} (1)</Text>
                <Text>{cat.Name} (2)</Text>
                <Text>{cat.Name} (3)</Text>
                <Text>{cat.Name} (4)</Text>
                <Text>{cat.Name} (5)</Text>
              </View>
            </View>
          );
        })
      ) : (
        <Text>No data found</Text>
      )}

      <Text></Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  catSection: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  catItem: {
    backgroundColor: "green",
    margin: 5,
    marginTop: 4,
    width: 400,
    height: 100,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  catName: {
    alignSelf: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  itemDetails: {
    backgroundColor: "#800020",
    margin: 5,
    marginTop: 4,
    width: 400,
    height: "100%",
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
});
