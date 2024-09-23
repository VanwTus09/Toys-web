import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignupPage from "./pages/Login/SignupPage";
import SigninPage from "./pages/Login/SigninPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Signin" element={<SigninPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
