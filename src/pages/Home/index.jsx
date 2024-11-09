import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import { Outlet } from "react-router-dom";
import Slider from "../../components/layouts/Slider/slider";
import Banner from "../../components/layouts/banner/banner";
import PromotionWrapper from "../../components/layouts/promotion";
import { ProductList } from "../../Product/ProductList";
import Aboutme from "../../components/layouts/About-us/About";
const Home = () => {
  return (
    <div>
      <main className="w-full max-w-full">
        <Header />
        <Outlet />
        <Slider />
        <ProductList />
        <Banner />
        <PromotionWrapper />
        <Aboutme />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
