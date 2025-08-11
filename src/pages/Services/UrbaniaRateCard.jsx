import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const vehicleData = [
  {
    type: "Modified 9 Seater Urbania",
    img: "https://forceurbaniaonrent.com/assets/images/9-seater-modified-seats-force-urbania-on-rent-delhi.jpg", // Replace if needed
    rate: 6500,
    extraHour: 400,
    extraKm: 40,
    osKm: 38,
    osBata: 700,
  },
  {
    type: "Regular 10 Seater Urbania",
    img: "https://www.asparkholidays.com/uploads/32110_Force%20Urbania%204.jpeg", // Replace
    rate: 6000,
    extraHour: 400,
    extraKm: 35,
    osKm: 35,
    osBata: 700,
  },
  {
    type: "16+1 / 17+1 Seater Urbania",
    img: "https://www.siddeshwaratravels.in/van_images/93.png", // Replace
    rate: 7000,
    extraHour: 400,
    extraKm: 40,
    osKm: 38,
    osBata: 700,
  },
  {
    type: "16+1 Modified to 10 or 12 Seater",
    img: "https://forceurbaniaonrent.com/assets/images/12-seater-force-urbania-van-with-1x1-maharaja-seats-hire-delhi.jpg", // Replace
    rate: 7500,
    extraHour: 500,
    extraKm: 45,
    osKm: 45,
    osBata: 700,
  },
  {
    type: "Available for 50 Seater A/c & Non A/c Tourist Bus",
    img: "service.jpg", // Replace with actual image link
    rate: "Contact for Price",
    
  },
];

const UrbaniaRateCard = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen px-4 md:px-90 py-10 font-['Abril_Fatface']"
    style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 font-['Dancing_Script'] text-[#cda45e]">
        Urbania Uniform Rates 
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
        {vehicleData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-yellow-500/30 overflow-hidden transition duration-300"
          >
            <img
              src={item.img}
              alt={item.type}
              className="w-full h-58 md:h-78  object-fill "
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold  mb-3">
                {item.type}
              </h3>
              {/* <ul className=" text-gray-300 space-y-1">
                <li>
                  <span className="font-medium text-white">8 Hrs / 80 KM:</span> ₹{item.rate}
                </li>
                <li>
                  <span className="font-medium text-white">Extra Hour:</span> ₹{item.extraHour}
                </li>
                <li>
                  <span className="font-medium text-white">Extra KM:</span> ₹{item.extraKm}
                </li>
                <li>
                  <span className="font-medium text-white">O/S per KM:</span> ₹{item.osKm}
                </li>
                <li>
                  <span className="font-medium text-white">O/S Bata:</span> ₹{item.osBata}
                </li>
                <li>
                  <span className="font-medium text-white">Outstation Coverage:</span> 300 KM
                </li>
              </ul> */}
              <ul className="text-gray-300 space-y-1">
  {item.rate && (
    <li>
      <span className="font-medium text-white">8 Hrs / 80 KM:</span> ₹{item.rate}
    </li>
  )}
  {item.extraHour && (
    <li>
      <span className="font-medium text-white">Extra Hour:</span> ₹{item.extraHour}
    </li>
  )}
  {item.extraKm && (
    <li>
      <span className="font-medium text-white">Extra KM:</span> ₹{item.extraKm}
    </li>
  )}
  {item.osKm && (
    <li>
      <span className="font-medium text-white">O/S per KM:</span> ₹{item.osKm}
    </li>
  )}
  {item.osBata && (
    <li>
      <span className="font-medium text-white">O/S Bata:</span> ₹{item.osBata}
    </li>
  )}
  <li>
    <span className="font-medium text-white">Outstation Coverage:</span> 300 KM
  </li>
</ul>

            </div>
            <div className="text-center  mb-4 flex justify-center">
  <a
    href="/contact"
    className=" px-6 py-3 text-sm md:text-base font-extrabold font-['Abril_Fatface'] bg-[#cda45e] text-black rounded-full hover:bg-[#b4933a] transition flex items-center gap-2"
  >
    <BsWhatsapp className="text-green-600"/>  <h3 className=" text-xl">Enquiry</h3>
  </a>
</div>
          </div>
        ))}
        
      </div>

      <p className="text-center text-red-500 font-semibold mt-10">
        * On the total bill we will charge @ 5% GST.
      </p>
    </div>
  );
};

export default UrbaniaRateCard;