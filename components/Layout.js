import React from "react";
import Container from "./container";
import Navbar from "./navbar";

const Layout = ({ sideBard, content }) => {
  return (
    <div className="flex-col">
      <Navbar />
      <div className="flex mt-2  w-full h-full flex-wrap">
        <div className="flex justify-center p-2  lg:w-1/4 ">{sideBard}</div>
        <div className="flex lg:w-3/4">
          <Container>{content}</Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
