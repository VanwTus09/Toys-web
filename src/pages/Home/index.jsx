import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import { Outlet } from "react-router-dom";
import Slider from "../../components/layouts/Slider/slider";
import Banner from "../../components/layouts/banner/banner";
import PromotionWrapper from "../../components/layouts/promotion";
import { useEffect } from "react";
import axios from "axios";
import { ProductList } from "../../Product/ProductList";
const Home = () => {
  
  useEffect(() =>{
   axios.get('https://fakestoreapi.com/')
   
  },[])
  return (
    <div>
      <main className="w-full max-w-full">
        <Header />
        <Outlet />
        <Slider />
        <PromotionWrapper /> 
        <ProductList/>
        <Banner />
        <Footer />
      </main>
      
    </div>
  );
};

export default Home;
