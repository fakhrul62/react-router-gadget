import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Root = () => {
  return (
    <div>
      <HelmetProvider>
        <Toaster />
        <Outlet></Outlet>
        <Footer></Footer>
      </HelmetProvider>
    </div>
  );
};

export default Root;
