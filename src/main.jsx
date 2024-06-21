import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import "./index.css";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Product1 from "./pages/Product1Page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import Order from "./pages/Order.jsx";
import DetailProduct1 from "./pages/DetailProduct1.jsx";
import Product2 from "./pages/Product2Page.jsx";
import Product3 from "./pages/Product3Page.jsx";
import Product4 from "./pages/Product4Page.jsx";
import Product5 from "./pages/Product5Page.jsx";
import TransferComplete from "./pages/TransferComplete.jsx";
import VerificationAge from "./pages/VerificationAge.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VerificationAge />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "cartpage",
    element: <CartPage />,
  },
  {
    path: "checkout",
    element: <CheckoutPage />,
  },
  {
    path: "product1",
    element: <Product1 />,
  },
  {
    path: "forget",
    element: <ForgetPassword />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "change",
    element: <ChangePassword />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "detail1",
    element: <DetailProduct1 />,
  },
  {
    path: "product2",
    element: <Product2 />,
  },
  {
    path: "product3",
    element: <Product3 />,
  },
  {
    path: "product4",
    element: <Product4 />,
  },
  {
    path: "product5",
    element: <Product5 />,
  },
  {
    path: "transfer",
    element: <TransferComplete />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
