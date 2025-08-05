// import React from "react";

// const testimonials = [
//   {
//     name: "Ramesh Kumar",
//     message: "Very clean and comfortable ride. Driver was punctual and professional.",
//     img: "https://randomuser.me/api/portraits/men/45.jpg",
//   },
//   {
//     name: "Sneha Patel",
//     message: "Urbania was perfect for our wedding trip. Highly recommended!",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "Amit Singh",
//     message: "Easy booking, smooth travel, and great customer support!",
//     img: "https://randomuser.me/api/portraits/men/35.jpg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="text-center mb-10" data-aos="fade-up">
//         <h2 className="text-3xl font-bold text-blue-700">Client Testimonials</h2>
//         <p className="text-gray-600 mt-2">What our customers say</p>
//       </div>
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
//             data-aos="fade-up"
//             data-aos-delay={i * 150}
//           >
//             <img
//               src={t.img}
//               alt={t.name}
//               className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
//             />
//             <p className="text-gray-700 italic mb-3">“{t.message}”</p>
//             <h4 className="text-lg font-semibold text-blue-600">{t.name}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




import React from "react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    message: "Very clean and comfortable ride. Driver was punctual and professional.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sneha Patel",
    message: "Urbania was perfect for our wedding trip. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Amit Singh",
    message: "Easy booking, smooth travel, and great customer support!",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-black/90 via-[#c40707] to-black/90 py-16 text-white">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold font-['Dancing_Script'] text-[#cda45e]">Client Testimonials</h2>
        <p className="text-gray-400 mt-2 font-['Abril_Fatface'] text-lg">What our customers say</p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-black/70 rounded-xl shadow-lg p-6 text-center border border-gray-700 hover:shadow-yellow-200/20 transition"
            // data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-[#FACC15]"
            />
            <p className="text-gray-300 italic mb-3 font-['Abril_Fatface'] text-lg ">“{t.message}”</p>
            <h4 className="text-2xl font-['Abril_Fatface']  font-semibold text-white">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
