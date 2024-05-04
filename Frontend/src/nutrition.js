import React from "react";
import NutritionPlan from "./component/Account/Meals/nutritionPlan";
import Footer from "./component/Footer/Footer";
import SideNav from "./component/Account/SideNav/SideNav";
import Header from "./component/Account/Header/Header";
const nutrition = () => {
  return (
    <div>
      <SideNav />
      <Header />
      <NutritionPlan />
      <Footer/>
    </div>
  );
};

export default nutrition;
