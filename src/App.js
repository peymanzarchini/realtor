import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
import Profile from "./components/profile/Profile";
import ForgotPassword from "./components/userAccount/ForgotPassword";
import SignIn from "./components/userAccount/SignIn";
import SignUp from "./components/userAccount/SignUp";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  const currentTab = () => {
    if (location.pathname === "/") return 0;
    else if (location.pathname === "/offers") return 1;
    else if (location.pathname === "/sign-in") return 2;
  };

  const [value, setValue] = useState(currentTab);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleFalseValue() {
    setValue(false);
  }

  return (
    <>
      <Navbar value={value} handleChange={handleChange} handleFalse={handleFalseValue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn handleFalse={handleFalseValue} />} />
        <Route
          path="/sign-up"
          element={<SignUp handleFalse={handleFalseValue} currentTab={currentTab} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
