import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin";
import Home from "./pages/Home";
import SignupPage from "./pages/Login/SignupPage";
import SigninPage from "./pages/Login/SigninPage";
import ProductOverview from "./pages/Home/ProductOverview";
import User from "./pages/Users/jsx/User";
import Account from "./pages/Users/jsx/Account";
import Support from "./pages/Users/jsx/Support";
import BuyHistory from "./pages/Users/jsx/BuyHistory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="products/:id" element={<ProductOverview />} />
        <Route path="/User" element={<User />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Support" element={<Support />} />
        <Route path="BuyHistory" element={<BuyHistory />} />
      </Routes>
    </>
  );
}

export default App;
