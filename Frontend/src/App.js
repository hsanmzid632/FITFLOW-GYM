import React from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero";
import Join from "./component/Join/Join";
import Plans from "./component/Plans/Plans";
import Programms from "./component/Programms/Programms";
import Reasons from "./component/Reasons/Reasons";
import Testimonials from "./component/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      {/* Section: Hero */}
      <Hero />

      {/* Section: Programms */}
      <section id="Programms">
        <Programms />
      </section>
      <Plans />
      {/* Section: Reasons */}
      <section id="Reasons">
        <Reasons />
        {/* Section: Testimonials */}
        <Testimonials />
      </section>
      {/* Section: Join */}
      <section id="JoinUs">
        <Join />
      </section>

      {/* Section: Footer */}
      <Footer />
    </div>
  );
}

export default App;
