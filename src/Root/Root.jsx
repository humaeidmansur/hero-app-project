import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
