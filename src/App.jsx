import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/Login/SignupPage";
import SigninPage from "./pages/Login/SigninPage";
import ProductOverview from "./pages/Home/ProductOverview";
import User from "./pages/Users/jsx/User";
import Account from "./pages/Users/jsx/Account";
import Support from "./pages/Users/jsx/Support";
import BuyHistory from "./pages/Users/jsx/BuyHistory";
import CategoryOverview from "./pages/Home/CategoryOverview";
import Payment from "./pages/Payment/payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/products/:id" element={<ProductOverview />} />
        <Route path="/category/:id" element={<CategoryOverview />} />
        <Route path="/User" element={<User />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/BuyHistory" element={<BuyHistory />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
