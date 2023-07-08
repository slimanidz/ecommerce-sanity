import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import localStorage from "localStorage";

const AppContext = createContext();

export const useCartContext = () => useContext(AppContext);

const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const AppContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  const videCart = () => {
    setCartItems((currItems) => currItems.filter((item) => !item));
  };

  const initialId = localStorage.getItem("produitId")
    ? JSON.parse(localStorage.getItem("produitId"))
    : "";
  const [produitId, setProduitId] = useState(initialId);
  useEffect(() => {
    localStorage.setItem("produitId", JSON.stringify(produitId));
  }, [produitId]);

  const initialEmailPassword = localStorage.getItem("emailPassword")
    ? JSON.parse(localStorage.getItem("emailPassword"))
    : [];
  const [emailPassword, setEmailPassword] = useState(initialEmailPassword);
  useEffect(() => {
    localStorage.setItem("emailPassword", JSON.stringify(emailPassword));
  }, [emailPassword]);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <AppContext.Provider
      {...props}
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
        produitId,
        setProduitId,
        emailPassword,
        setEmailPassword,
        videCart,
      }}
    />
  );
};
export default AppContextProvider;
