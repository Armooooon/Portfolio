/* eslint-disable no-undef */
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
   <>

    <Navbar />
    <Hero/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
   </>
  )

}