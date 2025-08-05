// import React from 'react'

// const AboutBanner = () => {
//   return (
// //     <div>
// //       <section className="bg-gray-900 text-white py-16 px-6 md:px-20" data-aos="fade-up">
// //   <div className="flex flex-col md:flex-row items-center gap-10">
    
// //     {/* Image */}
// //     <div className="w-full md:w-1/2" data-aos="fade-right">
// //       <img
// //         src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=800&q=80"
// //         alt="About Us"
// //         className="rounded-2xl shadow-lg"
// //       />
// //     </div>

// //     {/* Text Content */}
// //     <div className="w-full md:w-1/2 space-y-6" data-aos="fade-left">
// //       <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">About Rent Urbania</h2>
// //       <p className="text-gray-300 text-lg leading-relaxed">
// //         We are Bangalore's most reliable and professional travel rental company, offering clean, well-maintained, and luxurious tempo travellers for your every occasion.
// //       </p>
// //       <p className="text-gray-400 text-base">
// //         Whether it's a family trip, corporate outing, or wedding event, our experienced drivers and modern fleet ensure you travel comfortably and safely across Karnataka and beyond.
// //       </p>
// //     </div>

// //   </div>
// // </section>

// //     </div>
// <>
// <div className=' relative h-[50vh] md:h-screen'>
// <img src="aboutbnr.png" alt=""
// className='w-full h-full'
//  />
// </div>
// </>
//   )
// }

// export default AboutBanner




// import React from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section
//       className="bg-cover bg-center min-h-screen flex items-center justify-center text-white relative"
//       style={{
//         backgroundImage: `url("https://www.japjitravel.com/jap/media/uploads/urbania-picture.jpg")`,
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-2xl">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Dancing_Script'] text-[#cda45e]" data-aos="fade-up">
//           Explore the World with Varahi Travels
//         </h1>
//         <p className="text-xl md:text-xl mb-6 font-['Dancing_Script']"
//         data-aos="fade-up"
//   data-aos-delay="200">
//           Affordable packages, luxurious rides & unforgettable memories.
//         </p>
//         <Link
//           to="/services"
//           data-aos="zoom-in"
//   data-aos-delay="400"
//           className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-full font-semibold transition"
//         >
//           View Services
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Hero;



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
