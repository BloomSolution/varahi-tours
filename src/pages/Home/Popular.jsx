
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
