import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Axios from "axios";

const apiURL = "http://192.168.1.2:10000/api/login";
export const Login = ({ changer, setNowLoggedIn, setUserDate, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const login = () => {
    setShowPwd(false);
    if (!email || !password) {
      Alert.alert("You must fill all the fields!", "All fields are required!");
      return;
    }
    Axios.post(apiURL, {
      email: email,
      password: password,
    })
      .then(function (response) {
        Alert.alert(response.data.message);
        console.log(response);
        console.log(response.data.result);
        if (response.data.login === true) {
          const id = response.data.result[0].id;
          const fname = response.data.result[0].firstName;
          const lname = response.data.result[0].LastName;
          const email = response.data.result[0].email;
          const phone = response.data.result[0].Phone;
          const name = fname + " " + lname;
          const token = response.data.token;
          const photo = response.data.result[0].profilePhoto;
          const user = { id, name, email, id, phone, photo, token };
          //setSignup(false);
          //setToken(response.data.token);
          setEmail("");
          setPwd("");
          setNowLoggedIn(true);

          setUserDate(user);
        } else {
          // Alert.alert();
          setNowLoggedIn(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("Unknown error occured");
      });
  };

  return (
    <View style={styles.form}>
      <View style={styles.top}>
        <Text style={styles.topText}>USER LOGIN</Text>
      </View>
      <Text style={styles.inputText}>Email address*</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <Entypo name="user" size={30} color="#000080" />
      </View>
      <Text style={styles.inputText}>Password*</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={showPwd === false ? true : false}
          value={password}
          onChangeText={setPwd}
          maxLength={10}
        />
        {showPwd === false ? (
          <Entypo
            name="eye"
            size={30}
            color="#000080"
            onPress={() => setShowPwd(true)}
          />
        ) : (
          <Entypo
            name="eye-with-line"
            size={30}
            color="#000080"
            onPress={() => setShowPwd(false)}
          />
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.text}>Login </Text>
      </TouchableOpacity>

      <Pressable onPress={changer}>
        <Text style={{ color: "#000080", fontSize: 20, fontWeight: "bold" }}>
          Sign up instead
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  inputView: {
    width: "85%",
    height: 58,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000080",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  input: {
    fontSize: 18,
    color: "green",
    padding: 10,
    fontWeight: "bold",
    height: 58,
    width: "80%",
  },
  inputText: {
    fontSize: 20,
    alignSelf: "baseline",
    margin: "10%",
    marginTop: 10,
    marginBottom: 10,
    color: "#000080",
    fontWeight: "bold",
  },
  button: {
    width: "60%",
    backgroundColor: "#000080",
    height: 50,
    margin: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    margin: 10,
    alignSelf: "center",
    fontWeight: "bold",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  topText: {
    color: "#000080",
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});
