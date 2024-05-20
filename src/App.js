import React, { useEffect } from "react";
import NavBar from "./component/Navbar";
import Hero from "./component/body/hero/Hero";
import Product from "./component/product/product";
import AOS from "aos";
import "aos/dist/aos.css";
import Pan from "./component/Pan/Pan";
import Features from "./component/slider2/features";
import Footer from "./component/body/footer/Footer";
import FAQ from "./component/faq/Faq";

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="text-white">
        <NavBar />
        <div className="bg-gray">
          <div id="hero">
            <Hero />
          </div>
          <div id="pan">
            <Pan />
          </div>
            <Features />
          <div id="products">
            <Product />
          </div>
            <FAQ />
        </div>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return <Layout />;
}

export default App;