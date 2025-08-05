// import React from 'react'

// const Popular = () => {
//   return (
//     <div>
      
//       {/* Popular Services Preview */}
//       <section className="py-16 bg-white text-center">
//         <h2 className="text-3xl font-bold mb-8 text-blue-700" data-aos="fade-up">
//           Popular Travel Services
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
//           {[
//             { title: "City Tour", img: "https://pictures.topspeed.com/IMG/jpg/201604/leisure-travel-vans--3.jpg" },
//             { title: "Car Rentals", img: "https://leisurevans.com/wp-content/themes/ltv-wp/img/libero/photos/preview/exterior/06-lineup.jpg" },
//             { title: "Pilgrimage Trips", img: "https://joewalshtours.co.uk/app/uploads/2021/12/view-of-lourdes-shrine-and-river-joe-walsh-tours.jpg" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="rounded overflow-hidden shadow-lg"
//               data-aos="fade-up"
//               data-aos-delay={i * 200}
//             >
//               <img src={item.img} alt={item.title} className="w-full h-52 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{item.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Popular




// import React from "react";

// const services = [
//   {
//     title: "Force Urbania 12+1 Seater",
//     desc: "Spacious and perfect for group travel with AC & modern features.",
//     img: "https://kartikcab.com/wp-content/uploads/2024/12/12-seater-new-force-urbania-3.webp",
//   },
//   {
//     title: "Urbania 17 Seater",
//     desc: "Ideal for corporate tours, weddings, and family trips.",
//     img: "https://www.indiancarrental.com/uploads/carrent/96075_1702649381.webp",
//   },
//   {
//     title: "Luxury Tempo Traveller",
//     desc: "Travel in style and comfort for long or short journeys.",
//     img: "https://www.renttempotraveller.com/images/new-img/exterior1.jpg",
//   },


  //  {
  //   title: "City Tour",
  //   // desc: "Travel in style and comfort for long or short journeys.",
  //   img: "https://pictures.topspeed.com/IMG/jpg/201604/leisure-travel-vans--3.jpg",
  // },
  //  {
  //   title: "Car Rentals",
  //   // desc: "Travel in style and comfort for long or short journeys.",
  //   img: "https://leisurevans.com/wp-content/themes/ltv-wp/img/libero/photos/preview/exterior/06-lineup.jpg",
  // },
  //  {
  //   title: "Pilgrimage Trips",
  //   // desc: "Travel in style and comfort for long or short journeys.",
  //   img: "https://joewalshtours.co.uk/app/uploads/2021/12/view-of-lourdes-shrine-and-river-joe-walsh-tours.jpg",
  // },

// ];

// const PopularServices = () => {
//   return (
//     <>
//     <section className="py-16 bg-white">
//       <div className="text-center mb-10" data-aos="fade-up">
//         <h2 className="text-3xl font-bold text-blue-700">Popular Services</h2>
//         <p className="text-gray-600 mt-2">Top picks for travel in Bangalore</p>
//       </div>
//       <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
//             data-aos="zoom-in"
//             data-aos-delay={index * 150}
//           >
//             <img
//               src={service.img}
//               alt={service.title}
//               className="w-full h-52 object-cover"
//             />
//             <div className="p-5">
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600 text-sm">{service.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>

//     </>
//   );
// };

// export default PopularServices;




// import React from "react";

// const services = [
//   {
//     title: "Force Urbania 12+1 Seater",
//     desc: "Spacious and perfect for group travel with AC & modern features.",
//     img: "https://kartikcab.com/wp-content/uploads/2024/12/12-seater-new-force-urbania-3.webp",
//   },
//   {
//     title: "Urbania 17 Seater",
//     desc: "Ideal for corporate tours, weddings, and family trips.",
//     img: "https://www.indiancarrental.com/uploads/carrent/96075_1702649381.webp",
//   },
//   {
//     title: "Luxury Tempo Traveller",
//     desc: "Travel in style and comfort for long or short journeys.",
//     img: "https://www.renttempotraveller.com/images/new-img/exterior1.jpg",
//   },
// ];

// const PopularServices = () => {
//   return (
//     <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-red-900">
//       <div className="text-center mb-10" data-aos="fade-up">
//         <h2 className="text-3xl font-bold text-white">Popular Services</h2>
//         <p className="text-red-400 mt-2">Top picks for travel in Bangalore</p>
//       </div>
//       <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-red-700 hover:scale-105 transition duration-300"
//             data-aos="zoom-in"
//             data-aos-delay={index * 150}
//           >
//             <img
//               src={service.img}
//               alt={service.title}
//               className="w-full h-52 object-cover"
//             />
//             <div className="p-5">
//               <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
//               <p className="text-gray-300 text-sm">{service.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularServices;



// import React from "react";

// const services = [
//   {
//     title: "Force Urbania 12+1 Seater",
//     desc: "Spacious and perfect for group travel with AC & modern features.",
//     img: "https://kartikcab.com/wp-content/uploads/2024/12/12-seater-new-force-urbania-3.webp",
//   },
//   {
//     title: "Urbania 17 Seater",
//     desc: "Ideal for corporate tours, weddings, and family trips.",
//     img: "https://www.indiancarrental.com/uploads/carrent/96075_1702649381.webp",
//   },
//   {
//     title: "Luxury Tempo Traveller",
//     desc: "Travel in style and comfort for long or short journeys.",
//     img: "https://www.renttempotraveller.com/images/new-img/exterior1.jpg",
//   },
// ];

// const PopularServices = () => {
//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-blue-50">
//       <div className="text-center mb-12" data-aos="fade-up">
//         <h2 className="text-4xl font-bold text-blue-800 tracking-tight">
//           Our Popular Services
//         </h2>
//         <p className="text-gray-700 mt-3 text-lg">
//           Comfortable & reliable transport solutions in Bangalore
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
//             data-aos="zoom-in"
//             data-aos-delay={index * 150}
//           >
//             <img
//               src={service.img}
//               alt={service.title}
//               className="w-full h-52 object-cover rounded-t-2xl"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-blue-700 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{service.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularServices;




import React from "react";

const services = [
  {
    title: "Force Urbania 12+1 Seater",
    desc: "Spacious and perfect for group travel with AC & modern features.",
    img: "s7.jpg",
  },
  {
    title: "Urbania 17 Seater",
    desc: "Ideal for corporate tours, weddings, and family trips.",
    img: "s5.jpg",
  },
  {
    title: "Luxury Tempo Traveller",
    desc: "Travel in style and comfort for long or short journeys.",
    img: "8.jpg",
  },
     {
    title: "City Tour",
    // desc: "Travel in style and comfort for long or short journeys.",
    img: "9.jpg",
  },
   {
    title: "Car Rentals",
    // desc: "Travel in style and comfort for long or short journeys.",
    img: "18.jpg",
  },
   {
    title: "Pilgrimage Trips",
    // desc: "Travel in style and comfort for long or short journeys.",
    img: "19.jpg",
  },
];

const PopularServices = () => {
  return (
    <section 
    // className="py-16 bg-[#0a0a0a] text-white"
    className="py-16 bg-cover bg-center"
  style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 
        // className="text-3xl font-bold font-['Dancing_Script'] text-[#cda45e]"
        className="text-3xl md:text-5xl font-bold font-['Dancing_Script'] text-[#cda45e]"
        >
          Popular Services</h2>
        <p className="text-gray-300 mt-2 font-['Abril_Fatface'] text-lg ">Top picks for travel in Bangalore</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl shadow-md overflow-hidden hover:shadow-yellow-500/30 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-white mb-2 font-['Abril_Fatface'] ">
                {service.title}
              </h3>
              <p className="text-gray-300 text-lg font-['Abril_Fatface'] ">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default PopularServices;
