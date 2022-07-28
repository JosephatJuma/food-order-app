import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Down } from "./Down";

export const Category = ({ categories, Loading }) => {
  return (
    <ScrollView style={styles.cat}>
      <ScrollView style={styles.catSection} horizontal={true}>
        {Loading ? (
          <Image
            source={require("../assets/Images/loader.gif")}
            style={styles.image}
          />
        ) : categories ? (
          categories.map((cat) => {
            return (
              <View key={cat.id}>
                <TouchableOpacity style={styles.catItem} key={cat.id}>
                  <View style={styles.catTop}>
                    <Text style={styles.catName}>{cat.Name}</Text>
                  </View>
                  <View style={styles.hr}>
                    <Text></Text>
                  </View>
                  <Image
                    source={{ uri: cat.Image }}
                    style={{
                      width: "132%",
                      height: 182,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text>No data found</Text>
        )}

        <Text style={styles.itemText}>Item </Text>
      </ScrollView>

      <ScrollView>
        <View style={styles.itemDetails}>
          <View style={styles.search}>
            <TextInput style={styles.input} placeholder="Search item" />
            <View style={styles.searchIcon}>
              <Ionicons name="search" size={30} color="white" />
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>Item </Text>
              <Pressable style={styles.btn}>
                <Ionicons name="cart" size={14} color="white" />
                <Text style={{ color: "white" }}>order</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cat: {
    flex: 1,
    backgroundColor: "white",
  },
  catSection: {
    backgroundColor: "white",
    padding: 10,
    //height: 140,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginLeft: 160,
  },
  catItem: {
    backgroundColor: "green",
    margin: 1,
    marginTop: 4,
    marginLeft: 2,
    marginEnd: 2,
    width: 114,
    height: 250,
    borderRadius: 14,
    alignContent: "center",
    alignItems: "center",
    padding: 14,
  },
  catName: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    //fontFamily: "fantasy",
  },
  itemDetails: {
    backgroundColor: "white",
    margin: 5,
    marginTop: 4,
    width: 400,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  catTop: {
    height: "30%",
    backgroundColor: "#800014",
    width: "130%",
    marginTop: -14,
    borderTopEndRadius: 14,
    borderTopLeftRadius: 14,
  },
  hr: {
    height: 2,
    width: "130%",
    backgroundColor: "white",
  },
  items: {
    width: "105%",
    height: 250,
    display: "flex",
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#800014",
    width: "45%",
    margin: 10,
    borderRadius: 30,
    padding: 14,
    alignContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "white",
    fontSize: 25,
  },
  btn: {
    backgroundColor: "green",
    width: "40%",
    height: 25,
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    padding: 3,
  },
  search: {
    width: "90%",
    alignSelf: "center",
    height: 45,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    //position: "absolute",
    borderColor: "green",
  },
  searchIcon: {
    backgroundColor: "green",
    width: "15%",
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginLeft: 20,
  },
});
