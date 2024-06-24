import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      {children}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
