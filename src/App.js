import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Testimonals from "./components/Testimonals";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <Testimonals />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
