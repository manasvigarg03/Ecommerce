import React from "react";
import Header from "./Header";
import Footer from "./Footer";
//import layout from "./layout";

const layout = ({children}) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default layout;
