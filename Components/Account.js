import { useState, useEffect } from "react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Axios from "axios";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

const api_urlhistory = "http://192.168.1.2:10000/api/userhistory";
const api_urlorders = "http://192.168.1.2:10000/api/orders";

export const Account = ({
  isloggedin,
  setIsLoggedIn,
  logout,
  user,
  userData,
  goToCat,
}) => {
  const [change, setChange] = useState(false);
  const [showhistory, setshowHistory] = useState(false);
  const [showdetails, setshoDetailse] = useState(false);

  const [history, setHistory] = useState([]);
  const [oders, setOrders] = useState([]);

  const getUserHistory = (id) => {
    Axios.post(api_urlhistory, {
      id: id,
    })
      .then(function (response) {
        setHistory(response.data);
        setshowHistory(!showhistory);
      })
      .catch(function (error) {
        console.log(error);
        alert("Unknown error occured");
      });
  };
  const getorders = (id) => {
    setshowHistory(false);
    Axios.post(api_urlorders, {
      id: id,
    })
      .then(function (response) {
        setHistory(response.data);
      })
      .catch(function (error) {
        console.log(error);
        alert("Unknown error occured");
      });
  };

  return (
    <>
      {isloggedin === true ? (
        <ScrollView style={styles.accountSection}>
          <Text></Text>

          <View style={styles.profile}>
            <View style={styles.profilePic}>
              <Image
                source={require("../assets/Images/profiles/pic1.jpg")}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.name}>{userData.name}</Text>
              <Text style={styles.email}>{userData.email}</Text>

              <Text style={styles.id}>Phone: {userData.phone}</Text>
              <Text style={styles.id}>User ID: {userData.id}</Text>
              <TouchableOpacity style={styles.logout} onPress={logout}>
                <Text style={styles.id}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ backgroundColor: "white" }}>
            <TouchableOpacity style={styles.area}>
              <View style={styles.areaItem}>
                <FontAwesome5 name="user-alt" size={24} color="#075E54" />

                <Text style={styles.areaText}>My Profile</Text>
              </View>
              <AntDesign name="right" size={24} color="#C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.area} onPress={goToCat}>
              <View style={styles.areaItem}>
                <Ionicons name="fast-food-outline" size={24} color="#075E54" />

                <Text style={styles.areaText}>Check Caf</Text>
              </View>
              <AntDesign name="right" size={24} color="#075E54" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.area}>
              <View style={styles.areaItem}>
                <AntDesign name="customerservice" size={24} color="#075E54" />
                <Text style={styles.areaText}>Call Store</Text>
              </View>
              <AntDesign name="right" size={24} color="#075E54" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.area}
              onPress={() => getUserHistory(userData.id)}
            >
              <View style={styles.areaItem}>
                <MaterialCommunityIcons
                  name="history"
                  size={24}
                  color="#075E54"
                />
                <Text style={styles.areaText}>History</Text>
              </View>
              <AntDesign name="right" size={24} color="#075E54" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.area}>
              <View style={styles.areaItem}>
                <Ionicons name="settings" size={24} color="#075E54" />
                <Text style={styles.areaText}>Settings</Text>
              </View>
              <AntDesign name="right" size={24} color="#075E54" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.area} onPress={logout}>
              <View style={styles.areaItem}>
                <AntDesign name="logout" size={24} color="#075E54" />
                <Text style={styles.areaText}>Logout</Text>
              </View>
              <AntDesign name="right" size={24} color="#075E54" />
            </TouchableOpacity>
          </View>
          {showhistory && (
            <View>
              <View style={styles.details}>
                <View style={styles.head}>
                  <MaterialCommunityIcons
                    name="history"
                    size={45}
                    color="white"
                  />

                  <Text style={styles.text}>History</Text>
                </View>

                {history.length > 0 ? (
                  history.map((order) => {
                    //console.log(order);
                    return (
                      <Text style={styles.order} key={order.id}>
                        Order ID: {order.id}
                        <MaterialIcons
                          name="expand-more"
                          size={30}
                          color="white"
                        />
                      </Text>
                    );
                  })
                ) : (
                  <Text style={styles.order}>No Available history to show</Text>
                )}
              </View>
            </View>
          )}
        </ScrollView>
      ) : (
        <ScrollView style={styles.accountSection}>
          {change === true ? (
            <SignUp
              changer={() => setChange(!change)}
              change={change}
              setNowLogin={setChange}
            />
          ) : (
            <Login
              changer={() => setChange(!change)}
              setNowLoggedIn={setIsLoggedIn}
              setUserDate={user}
            />
          )}
        </ScrollView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  accountSection: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  profile: {
    backgroundColor: "#075E54",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  profilePic: {
    backgroundColor: "white",
    width: "40%",
    height: 140,
    borderRadius: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },

  name: {
    color: "white",
    margin: 20,
    fontSize: 25,
    alignSelf: "center",
  },
  email: {
    color: "white",
    marginTop: -10,
    fontSize: 15,
    alignSelf: "center",
  },
  id: {
    color: "white",
    marginTop: 0,
    fontSize: 15,
    alignSelf: "center",
  },
  logout: {
    backgroundColor: "orange",
    width: 160,
    height: 30,
    alignSelf: "center",
    margin: 10,
    borderRadius: 30,
  },
  area: {
    borderBottomWidth: 0.3,
    alignContent: "center",
    // alignItems: "center",
    width: "95%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  areaItem: {
    display: "flex",
    flexDirection: "row",
  },
  areaText: {
    color: "#075E54",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "sans-serif-condensed",
  },
  details: {
    backgroundColor: "orange",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    MinHeight: 400,
    borderRadius: 10,
    alignSelf: "center",
    padding: 20,
    marginTop: 30,
  },
  head: {
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    letterSpacing: 0,
  },
  icon: {
    width: 40,
    height: 40,
    margin: 30,
  },
  order: {
    color: "white",
    fontSize: 20,
    padding: 5,
    margin: 10,
    width: "90%",
    borderRadius: 10,
    letterSpacing: 0,
    backgroundColor: "#075E54",
  },
});
