import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Down } from "./Down";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Cart = ({ items, clear, goToHome }) => {
  return (
    <ScrollView style={styles.cartSection}>
      {items > 0 ? (
        <TouchableOpacity style={styles.clear} onPress={clear}>
          <View style={styles.deletebtn}>
            <Ionicons name="md-trash" size={32} color="skyblue" />
            <Text style={styles.deleteText}>Empty the cart</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.emptyCart} onPress={goToHome}>
          <Text style={styles.emptyMsg}>Start Shopping!</Text>
        </TouchableOpacity>
      )}
      <View style={styles.itemsArea}>
        {items <= 0 ? (
          <>
            <AntDesign name="frown" size={100} color="#000080" />

            <Text style={styles.oopsMsg}>Oops, Haven't Placed orders yet!</Text>
          </>
        ) : (
          <>
            <Text style={styles.successMsg}>
              You have ({items}) item{items > 1 && "s"} on the cart, the list
              will be here!
            </Text>
            <View style={styles.status}>
              <View style={styles.line}>
                <Ionicons name="md-cart" size={32} color="green" />
                <Text style={styles.successMsg}>Shopped</Text>
              </View>

              <Entypo name="flow-line" size={40} color="green" />
              <View style={styles.line}>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <Text style={styles.successMsg}>Verified</Text>
              </View>

              <Entypo name="flow-line" size={40} color="green" />
              <View style={styles.line}>
                <Entypo name="credit-card" size={32} color="green" />
                <Text style={styles.successMsg}>Paid</Text>
              </View>

              <Entypo name="flow-line" size={40} color="green" />
              <View style={styles.line}>
                <MaterialIcons name="delivery-dining" size={32} color="green" />
                <Text style={styles.successMsg}>Delivered</Text>
              </View>
            </View>
          </>
        )}
      </View>
      <Down />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cartSection: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignContent: "center",
  },
  itemsArea: {
    backgroundColor: "#DCDCDC",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    height: 500,
    borderRadius: 10,
    alignSelf: "center",
    padding: 20,
  },
  clear: {
    backgroundColor: "#880808",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    margin: 10,
  },
  deletebtn: {
    display: "flex",
    flexDirection: "row",
  },
  delete: {
    width: 40,
    height: 40,
    padding: 10,
  },
  deleteText: {
    fontSize: 20,
    color: "skyblue",
    fontWeight: "bold",
  },
  emptyCart: {
    backgroundColor: "#000080",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    margin: 10,
  },
  emptyMsg: {
    color: "white",
    fontSize: 20,
  },
  oopsImage: {
    width: 100,
    height: 100,
  },
  oopsMsg: {
    color: "#000080",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  successMsg: {
    color: "green",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  status: {
    alignSelf: "flex-start",
    margin: 20,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});
