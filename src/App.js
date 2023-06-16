//import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header, {  HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Intrests from "./components/Intrests";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Conntact from "./components/Conntact";

// HeaderPhone component used for make website responsive .. we can see the header option in phone also. with the help of menuOpen and setMenuopen

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  // console.log(menuOpen);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return ratio < 2 ? (
    <>
    < HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <Work />
      <Education />
      <Experience />
      <Skills />
      <Intrests />
      {/* <Contact /> */}
      <Conntact />
      <Footer />
      <Toaster />
    </>
  ): <em id="customMessage">Please change the ration of screen to view the Content </em>;
}

export default App;
