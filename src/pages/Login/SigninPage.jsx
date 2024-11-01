import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header";
import Signin from "../../components/Login-logout/Signin";
import { useContext, useEffect } from "react";
import { Context } from "../../context/context";
const SigninPage = () => {
  const {user,setUser} = useContext(Context)
  useEffect(()=>{
    const login = ()=>{
      setUser(1)
    }
    login();
  },[setUser])
  console.log(user)
  return <div>
      <Header/>
      <Outlet/>   
      <Signin/>
      <Footer/>
  </div>;
};

export default SigninPage;