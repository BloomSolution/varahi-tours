// import React from "react";
// import { FaCarAlt, FaCouch, FaShieldAlt } from "react-icons/fa";

// const features = [
//   {
//     title: "Stylish Design",
//     icon: <FaCarAlt size={28} className="text-blue-400" />,
//     img: "https://images.unsplash.com/photo-1583267748495-dc806b9a4e27?auto=format&fit=crop&w=800&q=80",
//     points: [
//       "Muscular Look",
//       "LED Signature Tail Lamps",
//       "Aerodynamic Body",
//       "6/8 Speaker Audio System",
//       "Touchscreen with Bluetooth & Camera",
//       "Projector headlamps with LED DRLs",
//     ],
//   },
//   {
//     title: "Comfort",
//     icon: <FaCouch size={28} className="text-green-400" />,
//     img: "https://images.unsplash.com/photo-1603459029261-3b29b33f86f7?auto=format&fit=crop&w=800&q=80",
//     points: [
//       "Best Cabin Space",
//       "Triple AC System",
//       "Reclining Seats",
//       "Sealed Panoramic Windows",
//       "Reading Lights & USB Chargers",
//       "Armrests & Lap Belts",
//     ],
//   },
//   {
//     title: "Advanced Safety",
//     icon: <FaShieldAlt size={28} className="text-red-400" />,
//     img: "https://images.unsplash.com/photo-1615229880225-27d74251f41b?auto=format&fit=crop&w=800&q=80",
//     points: [
//       "Monocoque Structure",
//       "Airbags, ABS, EBD",
//       "Rollover Protection",
//       "Hill Hold Assist with ESP",
//       "Vehicle Transponder",
//       "Dedicated AC Vents",
//     ],
//   },
// ];

// const UrbaniaFeatures = () => {
//   return (
//     <section className="bg-black text-white py-16">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-white">Urbania Features</h2>
//         <p className="text-gray-400 mt-2">Stylish, Comfortable & Safe Mobility</p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-blue-600 transition duration-300"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <div className="flex items-center gap-3 mb-4">
//                 {item.icon}
//                 <h3 className="text-xl font-semibold">{item.title}</h3>
//               </div>
//               <ul className="text-sm space-y-2 text-gray-300">
//                 {item.points.map((point, idx) => (
//                   <li key={idx} className="before:content-['✓'] before:mr-2 before:text-blue-500">
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default UrbaniaFeatures;




import React from "react";
import { motion } from "framer-motion";
import { FaCarAlt, FaCouch, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    title: "Stylish Design",
    icon: <FaCarAlt size={28} className="text-blue-400" />,
    // img: "https://pics.craiyon.com/2023-10-26/198689f658604bc9ac8d400fb281bb00.webp",
    img: "./i2.jpg",
    points: [
      "Muscular Look",
      "LED Signature Tail Lamps",
      "Aerodynamic Body",
      "6/8 Speaker Audio System",
      "Touchscreen with Bluetooth & Camera",
      "Projector headlamps with LED DRLs",
    ],
  },
  {
    title: "Comfort",
    icon: <FaCouch size={28} className="text-green-400" />,
    // img: "https://www.siddeshwaratravels.in/van_images/83.png",
    img: "i1.jpg",
    points: [
      "Best Cabin Space",
      "Triple AC System",
      "Reclining Seats",
      "Sealed Panoramic Windows",
      "Reading Lights & USB Chargers",
      "Armrests & Lap Belts",
    ],
  },
  {
    title: "Advanced Safety",
    icon: <FaShieldAlt size={28} className="text-red-400" />,
    // img: "https://www.indiancarrental.com/uploads/carrent/94266_1710930154.jpeg",
    img: "i4.jpg",
    points: [
      "Monocoque Structure",
      "Airbags, ABS, EBD",
      "Rollover Protection",
      "Hill Hold Assist with ESP",
      "Vehicle Transponder",
      "Dedicated AC Vents",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const UrbaniaFeatures = () => {
  return (
    <section
    //  className="bg-black text-white py-16"
    className="relative bg-fixed bg-center bg-cover py-16 "
      style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/07/16/61/22/1000_F_716612257_JAEcSXB2cewXYAdfWhC5C8tTJa0I6nV8.jpg')" }}
    >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold  font-['Dancing_Script'] text-[#cda45e]">Urbania Features</h2>
        <p className="text-gray-400 mt-2 font-['Abril_Fatface']">Stylish, Comfortable & Safe Mobility</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-black/70 rounded-xl overflow-hidden shadow-md hover:shadow-gray-600 transition duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={index}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-white font-['Abril_Fatface']">{item.title}</h3>
              </div>
              <ul className="text-sm space-y-2 text-gray-300 ">
                {item.points.map((point, idx) => (
                  <li key={idx} className=" font-['Abril_Fatface'] before:content-['✓'] before:mr-2 before:text-blue-500">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default UrbaniaFeatures;
