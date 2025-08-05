
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";


import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import FloatingButtons from "./components/FloatingButtons";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Footer from "./components/Footer";
import TempoTraveller from "./pages/Home/TempoTraveller";
import GallerySection from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import TermsAndConditions from "./components/TermsAndConditions";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  useEffect(() => {
  AOS.refresh();
}, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="tempo-traveller" element={<TempoTraveller/>} />
        <Route path="gallery" element={<GallerySection/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsconditions" element={<TermsAndConditions/>} />
        
      </Routes>
      <FloatingButtons/>
      <BackToTopButton/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
