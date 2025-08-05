import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fontsource/dancing-script';//13
import '@fontsource/lato';//13

import "@fontsource/poppins";
import "@fontsource/great-vibes";




import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

AOS.init({
  duration: 1000,        // animation duration
  once: true,            // animate only once
  easing: "ease-in-out", // smooth easing
  offset: 100,           // offset before animation
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
