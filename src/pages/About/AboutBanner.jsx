
import React from "react";

const AboutBanner = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="./6.jpg"
        alt="About Banner"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 font-['Dancing_Script'] text-[#cda45e]"
                  data-aos="fade-up">About Varahi Tours</h1>
        <p 
         className="text-lg sm:text-xl md:text-2xl mb-6 text-white/90 font-['Dancing_Script']"
                  data-aos="fade-up"
                  data-aos-delay="200"
        >
          Discover premium travel experiences with comfort, safety, and elegance. We ensure every journey is memorable.
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
