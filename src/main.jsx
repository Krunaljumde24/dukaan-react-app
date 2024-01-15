import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/Home/Home";
import About from './components/About/About'
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Contact from "./components/contact/Contact";
import Login from "./components/common/auth/Login/Login";
import SignUp from './components/common/auth/SignUp/SignUp'
import Test from './components/Test'

import AuthContextProvider from "./context/AuthContextProvider";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<PageNotFound />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
