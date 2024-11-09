import { createContext, useEffect, useState } from "react";
import { getUser } from "../api/Auth";
import { setRestAuth } from "../api/AxiosClient";
import { getCarts } from "../api/CartApi";

export const Context = createContext();
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);

  const handleGetCarts = () =>
    getCarts().then((resp) => setCart(resp?.carts || []));

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("accessToken");
    accessToken && setRestAuth(accessToken);
    if (userId) {
      getUser(userId).then((resp) => setUser(resp?.user));
      handleGetCarts();
    }
  }, []);

  return (
    <Context.Provider value={{ user, cart, setUser, setCart, handleGetCarts }}>
      {children}
    </Context.Provider>
  );
};
