// // src/components/GalleryBanner.jsx
// import React from "react";
// import "aos/dist/aos.css";

// const GalleryBanner = () => {
//   return (
//     <section
//       className="relative bg-fixed h-[80vh] flex items-center justify-center bg-cover bg-center text-white font-['Abril_Fatface']"
//       style={{
//         backgroundImage: "url('./i20.jpg')",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>
//       <div
//         className="relative z-10 text-center px-4"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold font-['Dancing_Script'] text-[#cda45e] drop-shadow-lg">
//           Our Luxurious Cars
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-200">
//           Explore our premium collection built for comfort & style.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default GalleryBanner;




import React from "react";

const GalleryBanner = () => {
  return (
    <div className="relative h-[50vh] md:h-[100vh] w-full overflow-auto pt-20">
      <img
        src="./galleryBnr.png"
        className="w-full h-full object-fill brightness-75"
      />
      {/* <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h1 
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 font-['Dancing_Script'] text-[#cda45e]" data-aos="fade-up"
          >Gallery </h1>
          <p 
          className="text-lg sm:text-xl md:text-2xl mb-6 text-white/90 font-['Dancing_Script']"
                  data-aos="fade-up"
                  data-aos-delay="200"
          >
            Discover our premium collection of luxury cars and travel experiences.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default GalleryBanner;
