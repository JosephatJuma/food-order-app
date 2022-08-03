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
import { useState } from "react";
import { Payment } from "./Payment";

export const Cart = ({
  items,
  clear,
  goToHome,
  itemsOnCart,
  goToCat,
  Verified,
  onDelete,
  amount,
  goToLogin,
  userPhone,
  placeNow,
}) => {
  const [detailes, setDetails] = useState(false);
  const [pay, setPay] = useState(false);
  const [paid, setPaid] = useState(false);
  const [delivered, setDelivered] = useState(false);
  return (
    <View style={styles.cartSection}>
      {!pay && (
        <View>
          {items > 0 ? (
            <TouchableOpacity style={styles.clear} onPress={clear}>
              <View style={styles.deletebtn}>
                <View>
                  <Ionicons name="md-trash" size={32} color="skyblue" />
                </View>
                <View>
                  <Text style={styles.deleteText}>Empty the cart</Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.emptyCart} onPress={goToHome}>
              <Text style={styles.emptyMsg}>Start Shopping!</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <ScrollView style={styles.itemsArea}>
        {items <= 0 ? (
          <View
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              marginTop: 80,
            }}
          >
            <AntDesign name="frown" size={100} color="#075E54" />

            <Text style={styles.oopsMsg}>Oops, haven't added to cart yet!</Text>
          </View>
        ) : (
          <View>
            {!pay && (
              <View>
                <View style={styles.CartCashArea}>
                  <View style={styles.CartItemsTop}>
                    <Text style={styles.cartItemsTextTop}>
                      You have ({items}) item{items > 1 && "s"} on the cart
                    </Text>
                  </View>
                  {itemsOnCart.length > 0 &&
                    itemsOnCart.map((i) => {
                      return (
                        <View key={i.id}>
                          <View style={styles.CartItems} key={i.id}>
                            <Text style={styles.cartItemsText} key={i.id}>
                              {i.itemName}
                            </Text>
                            <View style={styles.priceArea}>
                              <TouchableOpacity
                                style={styles.sub}
                                onPress={() => onDelete(i.id, i.price)}
                              >
                                <Text style={styles.increDecreText}>-</Text>
                              </TouchableOpacity>
                              <Text style={styles.cartItemsText} key={i.id}>
                                {i.price}
                              </Text>
                              <TouchableOpacity style={styles.add}>
                                <Text style={styles.increDecreText}>+</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View style={styles.hr}>
                            <Text></Text>
                          </View>
                        </View>
                      );
                    })}

                  <View style={styles.CartItemsBottom}>
                    <Text style={styles.cartItemsTextBottom}>Total</Text>
                    <Text style={styles.cartItemsTextBottom}>UGX {amount}</Text>
                  </View>
                </View>
                <View style={styles.buttonsArea}>
                  <TouchableOpacity style={styles.paybtn} onPress={goToCat}>
                    <Text style={styles.detailesbtnText}>keep buying</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.paybtn}
                    onPress={() => setPay(true)}
                  >
                    <Text style={styles.detailesbtnText}>Check Out?</Text>
                  </TouchableOpacity>
                </View>

                {detailes && (
                  <View style={styles.status}>
                    <View style={styles.line}>
                      <Ionicons name="md-cart" size={32} color="green" />
                      <Text style={(styles.successMsg, { color: "green" })}>
                        Shopped
                      </Text>
                    </View>

                    <Entypo name="flow-line" size={40} color="green" />
                    <View style={styles.line}>
                      <Ionicons
                        name="md-checkmark-circle"
                        size={32}
                        color={Verified ? "green" : "grey"}
                      />
                      <Text styles={(styles.successMsg, { color: "green" })}>
                        Verified
                      </Text>
                    </View>

                    <Entypo
                      name="flow-line"
                      size={40}
                      color={paid ? "green" : "grey"}
                    />
                    <View style={styles.line}>
                      <Entypo
                        name="credit-card"
                        size={32}
                        color={paid ? "green" : "grey"}
                      />
                      <Text style={styles.successMsg}>Paid</Text>
                    </View>

                    <Entypo
                      name="flow-line"
                      size={40}
                      color={delivered ? "green" : "grey"}
                    />
                    <View style={styles.line}>
                      <MaterialIcons
                        name="delivery-dining"
                        size={32}
                        color={delivered ? "green" : "grey"}
                      />
                      <Text style={styles.successMsg}>Delivered</Text>
                    </View>
                  </View>
                )}
                <Pressable
                  style={styles.detailesbtn}
                  onPress={() => setDetails(!detailes)}
                >
                  <Text style={styles.detailesbtnText}>
                    {detailes ? "See less" : "See details"}
                  </Text>
                </Pressable>
              </View>
            )}
            {pay && (
              <Payment
                goBack={() => setPay(false)}
                goToAcc={goToLogin}
                isVerified={Verified}
                phone={userPhone}
                amountPayable={amount}
                paid={setPaid}
                oderNow={placeNow}
              />
            )}
          </View>
        )}
      </ScrollView>
    </View>
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
    width: "100%",
    alignContent: "center",

    alignSelf: "center",
  },
  clear: {
    backgroundColor: "red",
    width: "60%",
    alignContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    alignSelf: "center",
    margin: 10,
    justifyContent: "space-between",
  },
  deletebtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
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
    letterSpacing: -1,
  },
  emptyCart: {
    backgroundColor: "#075E54",
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

  oopsMsg: {
    color: "#075E54",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  successMsg: {
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
  CartCashArea: {
    justifyContent: "space-between",
    backgroundColor: "lightgreen",
    width: "95%",
    borderRadius: 10,
    margin: 2,
    alignSelf: "center",
  },
  CartItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 5,
    borderRadius: 10,
  },
  cartItemsText: {
    color: "#075E54",
    fontSize: 15,
    margin: 5,
  },
  CartItemsTop: {
    backgroundColor: "#075E54",
    width: "100%",
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 60,
    alignContent: "center",
    alignItems: "center",
  },
  cartItemsTextTop: {
    color: "white",
    fontSize: 20,
  },
  priceArea: {
    width: "25%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sub: {
    backgroundColor: "red",
    width: 20,
    borderRadius: 5,
  },
  add: {
    backgroundColor: "#075E54",
    width: 20,
    borderRadius: 5,
  },
  increDecreText: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
  },
  CartItemsBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "orange",
    width: "100%",
    padding: 5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cartItemsTextBottom: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },
  hr: {
    backgroundColor: "white",
    height: 1,
    width: "98%",
    alignSelf: "center",
  },
  detailesbtn: {
    backgroundColor: "#075E54",
    alignSelf: "center",
    width: 200,
    margin: 20,
    height: 40,
    borderRadius: 10,
  },
  detailesbtnText: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
    textTransform: "uppercase",
    margin: 6,
  },
  buttonsArea: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  paybtn: {
    //backgroundColor: "#800014",
    backgroundColor: "orange",
    alignSelf: "center",
    width: 180,
    height: 40,
    margin: 10,
    borderRadius: 10,
  },
});
