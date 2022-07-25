import { useState } from "react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

export const Account = ({ isloggedin, setIsLoggedIn, logout }) => {
  const [change, setChange] = useState(false);
  const [userData, setUserData] = useState({});
  const [history, setHistory] = useState([
    { id: 1, date: "14-05-2022" },
    { id: 2, date: "22-04-2022" },
    { id: 3, date: "01-04-2022" },
    { id: 4, date: "30-03-2022" },
    { id: 5, date: "11-03-2022" },
  ]);

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
              <MaterialCommunityIcons
                name="account-edit"
                size={60}
                color="green"
                style={{ alignSelf: "center", marginTop: -50 }}
              />
              <Text style={{ color: "white", marginLeft: 30, marginTop: -10 }}>
                Edit Profile
              </Text>
            </View>
            <View>
              <Text style={styles.name}>{userData.name}</Text>
              <Text style={styles.email}>{userData.email}</Text>
              <Text style={styles.id}>Phone: {userData.phone}</Text>
              <Text style={styles.id}>User ID: {userData.id}</Text>
              <Pressable style={styles.logout} onPress={logout}>
                <Text style={styles.id}>Logout</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.head}>
              <MaterialCommunityIcons name="history" size={45} color="white" />

              <Text style={styles.text}>History</Text>
            </View>
            {history.length > 0 ? (
              history.map((order) => {
                //console.log(order);
                return (
                  <Text style={styles.order} key={order.id}>
                    {order.date}
                    <MaterialIcons name="expand-more" size={30} color="white" />
                  </Text>
                );
              })
            ) : (
              <Text style={styles.order}>No Available history to show</Text>
            )}
            {/* {<Text style={styles.order}>{userData.history[0].date}</Text>} */}
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.accountSection}>
          {change === true ? (
            <SignUp changer={() => setChange(!change)} />
          ) : (
            <Login
              changer={() => setChange(!change)}
              setNowLoggedIn={setIsLoggedIn}
              setUserDate={setUserData}
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
    backgroundColor: "#800020",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    padding: 20,
    display: "flex",
    flexDirection: "row",
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
    backgroundColor: "green",
    width: 160,
    height: 30,
    alignSelf: "center",
    margin: 10,
    borderRadius: 30,
  },
  details: {
    backgroundColor: "green",
    width: "95%",
    alignContent: "center",
    alignItems: "center",
    height: 500,
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
    letterSpacing: 3,
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
    letterSpacing: 4,
    backgroundColor: "#800020",
  },
});
