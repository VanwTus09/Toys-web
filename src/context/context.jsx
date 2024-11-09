import { createContext, useState } from "react";

export const Context = createContext();
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  
  return (
    <Context.Provider value={{ user, cart, setUser, setCart }}>
      {children}
    </Context.Provider>
  );
};
