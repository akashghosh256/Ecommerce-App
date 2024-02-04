import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {Helmet} from 'react-helmet'
const Layout = ({ children }) => {
  return (
    <div>
       {/* <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
          </Helmet> */}
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <ToastContainer/>
        {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
