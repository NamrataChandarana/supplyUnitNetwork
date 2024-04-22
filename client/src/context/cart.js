import { useState, useContext, createContext, useEffect } from "react";
import { useAuth } from "./auth";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() =>{
    const isAuth = JSON.parse(localStorage.getItem("auth"));
    const userId = isAuth?.user?._id;
    if ( userId) {
      let existingCartItem = localStorage.getItem(`cart_${userId}`);
      if (existingCartItem) return JSON.parse(existingCartItem);
    }
    return [];
  });
  const [auth, setAuth] = useAuth();
  const [authUser, setAuthUser] = useState(localStorage.getItem("auth") !== null);
  
  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem("auth")) ;
    const userId = isAuth?.user?._id;

    if(authUser && userId){
      let existingCartItem = localStorage.getItem(`cart_${userId}`);
      if (existingCartItem) setCart(JSON.parse(existingCartItem));
    }else{
      // setCart([]);
    }
  }, [authUser]);


  return (
    <CartContext.Provider value={[cart, setCart, authUser, setAuthUser]}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
