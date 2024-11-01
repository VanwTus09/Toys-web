import {createContext, useState} from "react"

export const Context = createContext()
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({children}) =>{
    const [user,setUser] = useState()
    return <Context.Provider value={{user,setUser}} >{children}</Context.Provider>

}