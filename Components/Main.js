import { useState } from "react";
import { Down } from "./Down";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

export const Main = ({
  items,
  add,
  remove,
  signedin,
  userName,
  goToAcc,
  gotoCart,
}) => {
  const [times, setTimes] = useState(1);
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        {signedin ? (
          <Text style={styles.text}>Welcome back {userName}!</Text>
        ) : (
          <Text style={styles.text}>You are not Logged in</Text>
        )}
      </View>
      <View style={styles.areas}>
        <TouchableOpacity style={styles.area}>
          <Ionicons name="wallet" size={30} color="orange" />
          <Text style={styles.aereaText}>My Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area} onPress={gotoCart}>
          <Entypo name="shopping-cart" size={30} color="orange" />
          <Text style={styles.aereaText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area}>
          <AntDesign name="customerservice" size={30} color="orange" />
          <Text style={styles.aereaText}>Customer service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area}>
          <MaterialIcons name="campaign" size={30} color="orange" />
          <Text style={styles.aereaText}>Campaign</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areas}>
        <TouchableOpacity style={styles.area} onPress={goToAcc}>
          <FontAwesome5 name="user-alt" size={30} color="orange" />
          <Text style={styles.aereaText}>My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area}>
          <AntDesign name="sharealt" size={30} color="orange" />
          <Text style={styles.aereaText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area}>
          <Entypo name="network" size={30} color="orange" />
          <Text style={styles.aereaText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area}>
          <Ionicons name="egg" size={30} color="orange" />
          <Text style={styles.aereaText}>Get offer</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.main}>
        <View style={styles.item}>
          <Text>Item</Text>
        </View>
        <View style={styles.item}>
          <Text>Item</Text>
        </View>
        <View style={styles.item}>
          <Text>Item</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
    alignContent: "center",
  },
  top: {
    backgroundColor: "#075E50",
    borderTopColor: "orange",
    padding: 10,
    height: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

    alignContent: "center",
    alignItems: "center",
  },
  areas: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  area: {
    backgroundColor: "#FFFFE0",
    //backgroundColor: "orange",
    borderRadius: 100,
    width: "20%",
    height: 80,
    margin: 10,
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
    borderWidth: 1,
    borderColor: "orange",
    padding: 10,
    alignSelf: "center",
  },
  aereaText: {
    color: "orange",
    fontSize: 10,
    fontWeight: "500",
  },
  item: {
    width: "98%",
    backgroundColor: "orange",
    alignSelf: "center",
    margin: 10,
    height: 130,
    borderRadius: 20,
    padding: 10,
  },

  image: {
    width: "90%",
    height: "80%",
    borderRadius: 10,
  },

  text: {
    margin: 10,
    fontSize: 26,
    fontWeight: "300",
    letterSpacing: -1,
    color: "white",
  },
});
