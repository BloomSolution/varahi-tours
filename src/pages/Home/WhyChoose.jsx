// import React from 'react'

// const WhyChoose = () => {
//   return (
//     <>
    //     {/* Why Choose Us Section */}
    //   <section className="py-16 bg-gray-50 text-center">
    //     <h2 className="text-3xl font-bold mb-8 text-blue-700" data-aos="fade-up">
    //       Why Choose Varahi Tours & Travels?
    //     </h2>
    //     <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
    //       {[
    //         {
    //           title: "Affordable Packages",
    //           desc: "We offer the best prices for solo, family, or group tours.",
    //         },
    //         {
    //           title: "Comfort & Safety",
    //           desc: "Our vehicles are clean, safe, and fully air-conditioned.",
    //         },
    //         {
    //           title: "Expert Guidance",
    //           desc: "Our experienced team ensures smooth & memorable trips.",
    //         },
    //       ].map((item, i) => (
    //         <div
    //           key={i}
    //           className="bg-white shadow p-6 rounded-lg"
    //           data-aos="zoom-in"
    //           data-aos-delay={i * 200}
    //         >
    //           <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
    //           <p className="text-gray-600">{item.desc}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
//     </>
//   )
// }

// export default WhyChoose





// import React from "react";

// const WhyChoose = () => {
//   const points = [
//     {
//       title: "Comfort & Luxury",
//       desc: "Enjoy your journey in spacious, AC-enabled vehicles with plush seating.",
//     },
//     {
//       title: "Affordable Pricing",
//       desc: "No hidden charges. Transparent pricing for every package.",
//     },
//     {
//       title: "Experienced Drivers",
//       desc: "Our chauffeurs are polite, skilled and trained for safe travel.",
//     },
//   ];

//   return (
//     <section 
//     className="py-16 bg-gray-50 text-center"
//     >
//       <h2 
//       // className="text-3xl font-bold mb-8 text-blue-700"
//       className="text-3xl font-bold text-primary mb-8"
//        data-aos="fade-up">
//         Why Choose Varahi Travels?
//       </h2>
//       <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
//         {points.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow"
//             data-aos="zoom-in"
//             data-aos-delay={index * 150}
//           >
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p className="text-gray-600">{item.desc}</p>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// };

// export default WhyChoose;




import React from "react";

const WhyChoose = () => {
  const points = [
    {
      title: "Comfort & Luxury",
      desc: "Enjoy your journey in spacious, AC-enabled vehicles with plush seating.",
    },
    {
      title: "Affordable Pricing",
      desc: "No hidden charges. Transparent pricing for every package.",
    },
    {
      title: "Experienced Drivers",
      desc: "Our chauffeurs are polite, skilled and trained for safe travel.",
    },
  ];

  return (
    <section 
    // className="py-16 bg-[#1f2937] text-white text-center"
     className="py-16 bg-gradient-to-br from-black/90 via-[#c40707] to-black/90 text-white text-center"
    >
      <h2
        className="text-3xl md:text-5xl font-bold mb-10 font-['Dancing_Script'] text-[#cda45e]"
        data-aos="fade-up"
      >
        Why Choose Varahi Travels?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {points.map((item, index) => (
          <div
            key={index}
            className="bg-black/70 p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h3 className="text-2xl font-semibold text-white mb-2 font-['Abril_Fatface']">
              {item.title}
            </h3>
            <p className="text-lg text-gray-300 font-['Abril_Fatface']">{item.desc}</p>
          </div>
        ))}
      </div>


<div className=" px-6 py-12  text-center" data-aos="fade-up">
  <h2 className="text-3xl md:text-5xl font-bold font-['Dancing_Script'] text-[#cda45e] mb-2">
    Tempo Traveller Rentals in Bangalore
  </h2>
  <p className="text-lg md:text-xl text-gray-300 mb-6">
    Rent luxury Tempo Travellers at affordable rates for family trips, corporate events, and weddings.
  </p>
  <a
    href="/tempo-traveller"
    className="inline-block bg-[#cda45e] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
  >
    Explore Options
  </a>
</div>


    </section>
  );
};

export default WhyChoose;



// import React from "react";

// const WhyChoose = () => {
//   const points = [
//     {
//       title: "Comfort & Luxury",
//       desc: "Enjoy your journey in spacious, AC-enabled vehicles with plush seating.",
//     },
//     {
//       title: "Affordable Pricing",
//       desc: "No hidden charges. Transparent pricing for every package.",
//     },
//     {
//       title: "Experienced Drivers",
//       desc: "Our chauffeurs are polite, skilled and trained for safe travel.",
//     },
//   ];

//   return (
//     <section
//       className="py-16 bg-gradient-to-r from-black via-[#450000] to-black text-white text-center"
//     >
//       <h2
//         className="text-3xl md:text-4xl font-bold text-red-500 mb-10"
//         data-aos="fade-up"
//       >
//         Why Choose Varahi Travels?
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
//         {points.map((item, index) => (
//           <div
//             key={index}
//             className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-red-600 transition duration-300 border border-red-700"
//             data-aos="zoom-in"
//             data-aos-delay={index * 150}
//           >
//             <h3 className="text-xl font-semibold text-red-400 mb-2">
//               {item.title}
//             </h3>
//             <p className="text-gray-300">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;
