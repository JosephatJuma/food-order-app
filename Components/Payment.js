import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";

export const Payment = ({
  goBack,
  isVerified,
  goToAcc,
  phone,
  amountPayable,
  paid,
  oderNow,
}) => {
  const [method, setMethod] = useState("");
  const [momoPay, setMomoPay] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [cash, setCash] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [selectedMomo, setSelectedMomo] = useState("");
  const [momoSelected, setMomoSelected] = useState(false);
  const [phoneChange, setPhone] = useState(phone);

  const toggleMomo = () => {
    setMomoPay(!momoPay);
    setCreditCard(false);
    setCash(false);
    setMethod("Mobile Money");
    if (momoPay === true) {
      setMethod("");
    }
  };
  const toggleCreditCard = () => {
    setCreditCard(!creditCard);
    setCash(false);
    setMomoPay(false);
    setMethod("Credit Card");
    if (creditCard === true) {
      setMethod("");
    }
  };
  const toggleCash = () => {
    setCash(!cash);
    setMomoPay(false);
    setCreditCard(false);
    setMethod("Cash on delivery");
    if (cash === true) {
      setMethod("");
    }
  };
  const mtn = () => {
    setSelectedMomo("MTN Mobile Money");
    setMomoSelected(true);
  };
  const airtel = () => {
    setSelectedMomo("Airtel Money");
    setMomoSelected(true);
  };
  const pay = (phone, amount) => {
    paid(true);
    const inputBody = {
      subscriber: {
        msisdn: phone,
      },
      transaction: {
        amount: amount,
        id: 12968801260,
      },
      additional_info: [
        {
          key: "remark",
          value: "AIRTXXXXXX",
        },
      ],
      reference: 123456,
      pin: "KYJExln8rZwb14G1K5UE5YF/lD7KheNUM171MUEG3/f/QD8nmNKRsa44UZkh6A4cR8+fV31D6A4LSwJ4Bz84T29ZDQlunqf/5J+peJ5YO8d5xFIA14pK1rU897WMS0m/D21qsju7w9uT/eab//BzkWkrDOpw5RumI4cxb0YD+o8=",
    };
    const headers = {
      "Content-Type": "application/json",
      Accept: "*/*",
      "X-Country": "UG",
      "X-Currency": "UGX",
      Authorization: "Bearer UCLcp1oeq44KPXr8X*******xCzki2w",
    };

    fetch("https://openapiuat.airtel.africa/standard/v1/cashin/", {
      method: "POST",
      body: inputBody,
      headers: headers,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (body) {
        //console.log(body);
        if (body.error) {
          alert("Sorry, An error occured");
        }
      });
  };

  return (
    <View style={{ marginTop: 20 }}>
      {!proceed ? (
        <View>
          {isVerified ? (
            <View>
              <View style={{ alignItems: "center" }}>
                <Entypo
                  name="back"
                  size={40}
                  color="#075E54"
                  onPress={goBack}
                />
                <Text style={styles.mainText}>Select Payment Method</Text>
              </View>
              <View style={styles.select}>
                <Text style={styles.selectText}>Mobile Money</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={momoPay ? "#075E54" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleMomo}
                  value={momoPay}
                />
              </View>
              <View style={styles.select}>
                <Text style={styles.selectText}>Credit Card</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={creditCard ? "#075E54" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleCreditCard}
                  value={creditCard}
                />
              </View>
              <View style={styles.select}>
                <Text style={styles.selectText}>Cash on Delivery</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={cash ? "#075E54" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleCash}
                  value={cash}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.label}>Payment Method</Text>
                <View style={styles.inputArea}>
                  <TextInput value={method} style={styles.input} />
                </View>
              </View>
              {method != "" && (
                <View>
                  <TouchableOpacity
                    style={styles.continuebtn}
                    onPress={() => setProceed(true)}
                  >
                    <Text style={styles.btnText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ) : (
            <View>
              <Text style={styles.mainText}>You need to login first</Text>
              <TouchableOpacity style={styles.continuebtn} onPress={goToAcc}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ) : (
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.mainText}>{method}</Text>
          {method === "Mobile Money" && (
            <View>
              <Text style={styles.label}>Select Service Provider</Text>

              <View style={styles.momoSelect}>
                <TouchableOpacity style={styles.momoMtn} onPress={mtn}>
                  <Image
                    source={require("../assets/momo/mtn.png")}
                    style={{ width: 70, height: 70 }}
                  />
                </TouchableOpacity>
                <Text style={styles.momoText}>MTN Mobile Money</Text>
              </View>
              <View style={styles.momoSelect}>
                <TouchableOpacity style={styles.momoAirtel} onPress={airtel}>
                  <Image
                    source={require("../assets/momo/airtel.jpeg")}
                    style={{ width: 70, height: 70 }}
                  />
                </TouchableOpacity>
                <Text style={styles.momoText}>Airtel Money</Text>
              </View>
            </View>
          )}
          <View>
            {momoSelected === true && (
              <View>
                <Text style={styles.mainText}>{selectedMomo}</Text>
                <Text style={styles.label}>Amount Payable</Text>
                <View style={styles.phoneInput}>
                  <TextInput
                    keyboardType="numeric"
                    value={amountPayable.toString()}
                    style={styles.phone}
                    editable={false}
                  />
                </View>

                <Text style={styles.label}>Phone number (editable) </Text>
                <View style={styles.phoneInput}>
                  <TextInput
                    value={phoneChange}
                    style={styles.phone}
                    onChangeText={setPhone}
                    keyboardType="numeric"
                  />
                </View>
                <TouchableOpacity
                  style={styles.payBtn}
                  onPress={() => pay(phone, amountPayable)}
                >
                  <Text style={styles.payBtnText}>Pay Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.payBtn} onPress={oderNow}>
                  <Text style={styles.payBtnText}>Place Order</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainText: {
    color: "#075E54",
    fontSize: 28,
    alignSelf: "center",
    letterSpacing: -1,
    fontWeight: "500",
  },
  select: {
    backgroundColor: "lightgreen",
    width: "80%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
    borderRadius: 50,
    margin: 5,
    padding: 10,
  },
  selectText: {
    color: "#075E54",
    fontSize: 20,
    letterSpacing: -1,
    fontWeight: "500",
  },
  label: {
    alignSelf: "center",
    fontSize: 20,
    margin: 5,
    color: "orange",
    fontWeight: "500",
  },
  inputArea: {
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    //borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#075E54",
  },
  input: { color: "#075E54", fontSize: 18 },
  continuebtn: {
    backgroundColor: "#075E54",
    width: "50%",
    alignSelf: "center",
    height: 45,
    margin: 10,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    margin: 8,
    textTransform: "uppercase",
  },
  momoSelect: {
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },

  momoAirtel: {
    width: "30%",
    height: 90,
    backgroundColor: "red",
    margin: 2,
    borderRadius: 20,
    padding: 10,
    borderColor: "#800014",
    borderWidth: 1,
    alignItems: "center",
  },

  momoMtn: {
    width: "30%",
    height: 90,
    backgroundColor: "yellow",
    margin: 2,
    borderRadius: 20,
    padding: 10,
    borderColor: "#800014",
    borderWidth: 1,
    alignItems: "center",
  },
  momoText: {
    color: "#800014",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: -1,
  },
  phoneInput: {
    alignSelf: "center",
    borderColor: "orange",
    borderWidth: 1,
    width: 300,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
  phone: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#075E54",
    letterSpacing: 1,
    alignSelf: "center",
    width: "100%",
    marginLeft: 100,
  },
  payBtn: {
    backgroundColor: "orange",
    width: "60%",
    alignSelf: "center",
    height: 45,
    borderRadius: 10,
    margin: 10,
    alignContent: "center",
    alignItems: "center",
  },
  payBtnText: {
    color: "white",
    fontSize: 25,

    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
