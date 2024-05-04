import React from "react";
import Programm from "./component/Account/programm/programm";
import SideNav from "./component/Account/SideNav/SideNav";
import Header from "./component/Account/Header/Header";
import Footer from "./component/Footer/Footer";
const programm = () => {
  return (
    <div className="App1">
      <SideNav />
      <Header />
      <Programm />
      <Footer />
    </div>
  );
};

export default programm;
