import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
import Profile from "./components/profile/Profile";
import ForgotPassword from "./components/userAccount/ForgotPassword";
import SignIn from "./components/userAccount/SignIn";
import SignUp from "./components/userAccount/SignUp";

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar value={value} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
