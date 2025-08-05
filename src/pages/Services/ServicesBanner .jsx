// // src/components/ServicesBanner.jsx
// import React from "react";
// import "aos/dist/aos.css";

// const ServicesBanner = () => {
//   return (
//     <section
//       className="relative bg-fixed h-[80vh] flex items-center justify-center bg-cover bg-center text-white font-['Abril_Fatface']"
//       style={{
//         backgroundImage:
//           "url('i4.jpg')",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/60"></div>
//       <div
//         className="relative z-10 text-center px-4"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg font-['Dancing_Script'] text-[#cda45e]">
//           Our Services
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-200">
//           Discover luxury, comfort & style across all our travel offerings.
          
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ServicesBanner;




import React from "react";

const ServiceBanner = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <img
      // src="./s16.jpg"
        src="https://www.renttraveller.com/jap/media/uploads/urbania-picture.jpg"
        alt="Service Banner"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1
        //  className="text-3xl md:text-5xl font-bold mb-4"
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 font-['Dancing_Script'] text-[#cda45e]" data-aos="fade-up"
        >Our Services
        </h1>
        <p 
        // className="text-md md:text-lg max-w-2xl mx-auto text-gray-300"
        className="text-lg sm:text-xl md:text-2xl mb-6 text-white/90 font-['Dancing_Script']"
                  data-aos="fade-up"
                  data-aos-delay="200"
        >
          Explore our wide range of travel and rental services tailored to meet your needs with style and convenience.
        </p>
      </div>
    </section>
  );
};

export default ServiceBanner;
