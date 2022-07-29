import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Switch,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Axios from "axios";
import { Alert } from "react-native";

const apiURL = "http://192.168.1.2:10000/api/register/";
export const SignUp = ({ changer, setNowLogin, change, typing }) => {
  const [isCont, setIsCont] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPwd] = useState("");
  const [confirmPsw, setconfirmPsw] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const register = () => {
    setIsEnabled(false);
    //e.preventDefault();
    if (password != confirmPsw) {
      Alert.alert("Passwords do not Match!");
      return;
    }
    if (!password) {
      Alert.alert("Please provide a password");
      return;
    }

    Axios.post(apiURL, {
      firstName: fname,
      lastName: lname,
      email: email,
      Phone: phone,
      password: password,
    })
      .then(function (response) {
        Alert.alert("Successfully resigstered, Now login");
        console.log(response);
      })
      .catch(function (error) {
        Alert.alert("Unknown Error occured");
        console.log(error);
      });

    //setSignup(false);
    setEmail("");
    setFname("");
    setLname("");
    setPwd("");
    setconfirmPsw("");
    setPhone("");
    setNowLogin(!change);
  };
  const getData = () => {
    if (!fname || !lname || !phone || !email) {
      Alert.alert("You must fill all the required fields!");
      return;
    }
    setIsCont(true);
  };
  const goBack = () => {
    setIsCont(false);
  };
  return (
    <View style={styles.form}>
      <View style={styles.top}>
        <Text style={styles.topText}>USER SIGN UP</Text>
      </View>
      {isCont === false ? (
        <>
          <Text style={styles.inputText}>First Name*</Text>
          <TextInput
            placeholder="Enter first name"
            style={styles.input}
            value={fname}
            onChangeText={setFname}
          />
          <Text style={styles.inputText}>Last Name*</Text>
          <TextInput
            placeholder="Enter last name"
            style={styles.input}
            value={lname}
            onChangeText={setLname}
          />
          <Text style={styles.inputText}>Phone Number*</Text>
          <TextInput
            placeholder="e.g 0701012345"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />
          <Text style={styles.inputText}>Email Address*</Text>
          <TextInput
            placeholder="Enter personal email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.button} onPress={getData}>
            <Text style={styles.text}>Continue</Text>
          </TouchableOpacity>
          <Pressable onPress={changer}>
            <Text
              style={{ color: "#000080", fontSize: 20, fontWeight: "bold" }}
            >
              Login in instead
            </Text>
          </Pressable>
        </>
      ) : (
        <>
          <View style={styles.top}>
            <Ionicons
              name="md-arrow-back-circle-sharp"
              size={40}
              color="#000080"
              onPress={goBack}
            />

            <Text style={styles.inputText}>SET USER PASSWORD</Text>
          </View>
          {showErr === true && confirmPsw != password && (
            <View style={styles.err}>
              {confirmPsw != password && (
                <View style={styles.sucess}>
                  <MaterialIcons name="error-outline" size={24} color="red" />
                  <Text style={styles.errMsg}>Passwords do not match!</Text>
                </View>
              )}
            </View>
          )}
          {confirmPsw === password && password != "" && (
            <View style={styles.sucess}>
              <Ionicons name="checkbox" size={20} color="green" />
              <Text style={styles.msg}>Passwords matching</Text>
            </View>
          )}
          <Text style={styles.inputText}>Password*</Text>
          <TextInput
            placeholder="Set password"
            style={styles.input}
            secureTextEntry={isEnabled === true ? false : true}
            value={password}
            onChangeText={setPwd}
            maxLength={10}
          />
          <Text style={styles.inputText}>Confirm Password*</Text>
          <TextInput
            placeholder="Re-enter password"
            style={styles.input}
            secureTextEntry={isEnabled === true ? false : true}
            value={confirmPsw}
            onChangeText={setconfirmPsw}
            maxLength={10}
            onFocus={() => setShowErr(true)}
          />
          <View style={styles.switchArea}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#000080" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.inputText}>
              {isEnabled ? "Hide password" : "Show password"}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
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
  input: {
    width: "85%",
    height: 58,
    backgroundColor: "white",
    color: "green",
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#000080",
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
    width: "70%",
    backgroundColor: "#000080",
    height: 60,
    margin: 20,
    borderRadius: 100,
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
  err: {
    //backgroundColor: "red",
    width: "90%",
    height: 40,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  sucess: {
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  switchArea: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  msg: { color: "green", fontSize: 18, fontWeight: "bold", letterSpacing: -1 },
  errMsg: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: -1,
  },
});
