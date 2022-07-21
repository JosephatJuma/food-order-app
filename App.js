import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Cart } from "./Components/Cart";
import { Account } from "./Components/Account";
import { Category } from "./Components/Category";
import { Footer } from "./Components/Footer";
import { useState } from "react";
import { Alert } from "react-native";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Chicken Lollippops",
      imageSrc: require("./assets/Images/items/chicken.png"),
      price: 18000,
    },
    {
      id: 2,
      name: "Vegatable Pizza",
      imageSrc: require("./assets/Images/items/pizza.png"),
      price: 20000,
    },
    {
      id: 3,
      name: "Chicken Luwombo",
      imageSrc: require("./assets/Images/items/luwombo.png"),
      price: 35000,
    },
    {
      id: 4,
      name: "Chicken Luwombo",
      imageSrc: require("./assets/Images/items/luwombo.png"),
      price: 30000,
    },
    {
      id: 5,
      name: "Fish Masala",
      imageSrc: require("./assets/Images/items/fish.png"),
      price: 15000,
    },
    {
      id: 6,
      name: "Plain Chips",
      imageSrc: require("./assets/Images/items/chips.png"),
      price: 20000,
    },
    {
      id: 7,
      name: "Chicken Lollippops",
      imageSrc: require("./assets/Images/items/chicken.png"),
      price: 18000,
    },
    {
      id: 8,
      name: "Vegatable Pizza",
      imageSrc: require("./assets/Images/items/pizza.png"),
      price: 20000,
    },
  ]);
  const [cart, setCart] = useState(0);
  const [home, setHome] = useState(true);
  const [category, setCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [account, setAccount] = useState(false);
  const goToCart = () => {
    setShowCart(true);
    setHome(false);
    setAccount(false);
    setCategory(false);
  };
  const goHome = () => {
    setShowCart(false);
    setCategory(false);
    setAccount(false);
    setHome(true);
  };
  const goToAccount = () => {
    setShowCart(false);
    setCategory(false);
    setAccount(true);
    setHome(false);
  };
  const goToCategory = () => {
    setShowCart(false);
    setCategory(true);
    setAccount(false);
    setHome(false);
  };
  const addToCart = () => {
    setCart(cart + 1);
  };
  const removeFromCart = () => {
    setCart(cart - 1);
    if (cart < 0) {
      setCart(0);
    }
  };

  const emptyCart = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "All Items will be removed from the cart!",
      [
        {
          text: "No",
          onPress: () => console.log("User pressed No"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "YES", onPress: () => setCart(0) },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={styles.container}>
      <Header cart={cart} />
      {home && <Main items={items} add={addToCart} remove={removeFromCart} />}
      {showCart && <Cart items={cart} clear={emptyCart} goToHome={goHome} />}
      {account && <Account />}
      {category && <Category />}

      <Footer
        number={cart}
        goToCart={goToCart}
        goHome={goHome}
        goToAccount={goToAccount}
        goToCat={goToCategory}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
  },
});
