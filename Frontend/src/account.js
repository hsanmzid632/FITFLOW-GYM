import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Account/Header/Header";

import ProfilePage from "./component/Account/ProfilePage/ProfilePage";
import SideNav from "./component/Account/SideNav/SideNav";
import Programm from "./component/Account/programm/programm";
import './component/Account/account.css'


const account = () => {
    return (
        <div className="App1">
            <SideNav />
            <Header />
            <ProfilePage />
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
};

export default account;
