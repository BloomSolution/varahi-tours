import {
  FaChargingStation,
  FaLightbulb,
  FaBed,
  FaFirstAid,
  FaTint,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const amenities = [
  { icon: <FaChargingStation  size={30}/>, label: "Charging Point" },
  { icon: <FaLightbulb size={30}/>, label: "Reading Light" },
  { icon: <FaBed size={30}/>, label: "Blanket" },
  { icon: <FaFirstAid size={30}/>, label: "First Aid Kit" },
  { icon: <FaTint size={30}/>, label: "Water Bottle" },
  { icon: <FaMapMarkerAlt size={30}/>, label: "Live Location" },
];

const AmenitiesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-[#b30202] via-[#e93900] to-[#4e0000] py-20 px-50 text-white flex flex-col md:flex-row items-center justify-between ">
      {/* Left: Icon Grid */}
      <div className="grid grid-cols-3 gap-10 md:gap-x-20 md:gap-y-12" data-aos="fade-up">
        {amenities.map((item, index) => (
          <div key={index} className="flex flex-col items-center" data-aos="zoom-in"
           data-aos-delay={index * 100}>
            <div className=" w-34 h-34 flex justify-center items-center rounded-full bg-black/50">
            {/* <div className="w-24 h-24 rounded-full bg-radial from-black/90 from-20% to-white/45 bg-opacity-90 shadow-xl flex items-center justify-center text-yellow-400 text-3xl transition-transform duration-300 hover:scale-110"> */}
            <div className="w-24 h-24 rounded-full bg-radial-[at_25%_25%] from-white/40 to-zinc-900 to-45% bg-opacity-90 shadow-xl flex items-center justify-center text-yellow-400 text-3xl transition-transform duration-300 hover:scale-110">
            
              {item.icon}
            </div>
            </div>
            <p className="text-white text-base mt-3">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Right: Title */}
      <div className="mt-12 md:mt-0 text-center md:text-right md:ml-16" data-aos="fade-up">
        <h4 className="text-xl font-light">OUR</h4>
        <h2 className="text-4xl font-bold">AMENITIES</h2>
      </div>
    </section>
  );
};

export default AmenitiesSection;