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
import Axios from "axios";
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
  const [cartItems, setCartItems] = useState([]);
  const [prices, setPrices] = useState([]);
  const [grandTotal, setGrand] = useState(0);
  const [itemadded, setItemAdded] = useState("");
  const [added, setAdded] = useState(false);
  //const [userHistory, setUserHistory]=useState()

  const api_url = "http://192.168.1.2:10000/api/all/cat";
  const productsapi_url = "http://192.168.1.2:10000/api/products";
  const selectapi = "http://192.168.1.2:10000/api/selectcat";
  const api_placeoder = "http://192.168.1.2:10000/api/placeorder";

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
    }, 1000);
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
    }, 1000);
  }, []);
  const goToCart = () => {
    setShowCart(true);
    setHome(false);
    setAccount(false);
    setCategory(false);
    setAdded(false);
  };
  const goHome = () => {
    setShowCart(false);
    setCategory(false);
    setAccount(false);
    setHome(true);
    setAdded(false);
  };
  const goToAccount = () => {
    setShowCart(false);
    setCategory(false);
    setAccount(true);
    setHome(false);
    setAdded(false);
  };
  const goToCategory = () => {
    setShowCart(false);
    setCategory(true);
    setAccount(false);
    setHome(false);
    setAdded(false);
  };
  const addItems = (itemName, itemPrice) => {
    const price = parseInt(itemPrice);
    const id = Math.floor(1000 + Math.random() * 9000);
    const newitem = { id, itemName, price };
    setCartItems([...cartItems, newitem]);
    setPrices([...prices, { id, price }]);
    setItemAdded(newitem.itemName);
    setAdded(true);
    setCart(cart + 1);
    const array = prices;

    for (
      var index = 0, // The iterator
        length = array.length, // Cache the array length
        sum = 0; // The total amount
      index < length; // The "for"-loop condition
      sum += array[index++].price // Add price on each iteration
    );
    setGrand(sum + price);
  };

  const removeFromCart = (id, price) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setPrices(prices.filter((price) => price.id !== id));
    setCart(cart - 1);
    setGrand(grandTotal - price);

    //removing from from the prices array as well as cart items array!
  };

  const emptyCart = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "All Items will be removed from the cart!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelled!"),
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => {
            setCart(0);
            setCartItems([]);
            setPrices([]);
            setGrand(0);
          },
        },
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
        {
          text: "YES",
          onPress: () => {
            setLoggedin(false);
            setUserData({});
            setCart(0);
            setCartItems([]);
            setPrices([]);
          },
        },
      ],
      { cancelable: true }
    );
  };
  const selectCategory = (name) => {
    Axios.post(selectapi, {
      name: name,
    })
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("Unknown error occured");
      });
  };
  const placeOrder = () => {
    setCategory(true);
    setShowCart(false);
    setAccount(false);
    setHome(false);
    Axios.post(api_placeoder, {
      order: cartItems, //order[0].itemName
      user: userData, // user.id
      grand: grandTotal,
    })
      .then(function (response) {
        Alert.alert(
          response.data,
          "Success in placing order, our agent will deliver soon"
        );
        setCart(0);
        setPrices([]);
        setCartItems([]);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("Unknown error occured");
      });
  };
  return (
    <SafeAreaView style={[styles.container, { paddingTop: 30 }]}>
      <Header cart={cart} />
      {home && <Main items={items} />}
      {showCart && (
        <Cart
          items={cart}
          clear={emptyCart}
          goToHome={goToCategory}
          itemsOnCart={cartItems}
          goToCat={goToCategory}
          Verified={loggedin}
          onDelete={removeFromCart}
          amount={grandTotal}
          goToLogin={goToAccount}
          userPhone={userData.phone}
          placeNow={placeOrder}
        />
      )}
      {account && (
        <Account
          isloggedin={loggedin}
          setIsLoggedIn={setLoggedin}
          logout={logout}
          user={setUserData}
          userData={userData}
          goToCat={goToCategory}
        />
      )}
      {category && (
        <Category
          categories={categories}
          Loading={Loading}
          typing={setTyping}
          products={products}
          addToItems={addItems}
          itemadded={itemadded}
          added={added}
          cancel={() => setAdded(false)}
          selectFunction={selectCategory}
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
  },
});
