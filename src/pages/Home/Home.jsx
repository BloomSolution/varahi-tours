// import React from "react";
// import Hero from "./Hero";

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       {/* Add more sections here later */}
//     </>
//   );
// };

// export default Home;



import React from "react";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import Popular from "./Popular";
import Testimonials from "./Testimonials";
import UrbaniaFeatures from "./UrbaniaFeatures";
import Seater from "./Seater";
import AnimatedGallery from "./AnimatedGallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <Seater/>
      <Popular/>
      <WhyChoose/>
      <UrbaniaFeatures/>
      <Testimonials/>
      <AnimatedGallery/>
    </div>
  );
};

export default Home;
