import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Cart } from "./Components/Cart";
import { Account } from "./Components/Account";
import { Category } from "./Components/Category";
import { Footer } from "./Components/Footer";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
//import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  //const insets = useSafeAreaInsets();
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
  const [typing, setTyping] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [cart, setCart] = useState(0);
  const [home, setHome] = useState(true);
  const [category, setCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [account, setAccount] = useState(false);
  const [userData, setUserData] = useState({});
  const [Loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const api_url = "http://192.168.1.2:10000/api/all/cat";
  const productsapi_url = "http://192.168.1.2:10000/api/products";

  useEffect(() => {
    setTimeout(() => {
      fetch(api_url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setCategories(data);
          setLoading(false);
        });
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch(productsapi_url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setProducts(data);
          setLoading(false);
        });
    }, 2000);
  }, []);
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
  const logout = () => {
    Alert.alert(
      "Are you sure you want to logout?",
      "You will need to login again!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout Cancelled"),
          style: "cancel",
        },
        { text: "YES", onPress: () => setLoggedin(false) },
      ],
      { cancelable: true }
    );
  };
  return (
    <SafeAreaView style={[styles.container, { paddingTop: 30 }]}>
      <Header cart={cart} />
      {home && <Main items={items} add={addToCart} remove={removeFromCart} />}
      {showCart && <Cart items={cart} clear={emptyCart} goToHome={goHome} />}
      {account && (
        <Account
          isloggedin={loggedin}
          setIsLoggedIn={setLoggedin}
          logout={logout}
          user={setUserData}
          userData={userData}
        />
      )}
      {category && (
        <Category
          categories={categories}
          Loading={Loading}
          typing={setTyping}
          products={products}
        />
      )}

      {!typing && (
        <Footer
          number={cart}
          goToCart={goToCart}
          goHome={goHome}
          goToAccount={goToAccount}
          goToCat={goToCategory}
          selectedHome={home}
          selectedAcc={account}
          selectedCart={showCart}
          selectedCat={category}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "tomato",
    //backgroundColor: "#F5F5D6",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
  },
});
