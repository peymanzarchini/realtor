import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Offers from "../components/offers/Offers";
import Profile from "../components/profile/Profile";
import ForgotPassword from "../components/userAccount/ForgotPassword";
import SignIn from "../components/userAccount/SignIn";
import SignUp from "../components/userAccount/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
