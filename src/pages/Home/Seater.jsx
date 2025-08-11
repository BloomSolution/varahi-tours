import React from "react";

const urbaniaTypes = [
  {
    title: "10-Seater Force Urbania A/C",
    desc: "Ideal for small groups, families, or intimate gatherings.",
  },
  {
    title: "13-Seater Force Urbania A/C",
    desc: "Perfect for slightly larger groups or extended families.",
  },
  {
    title: "15-Seater Force Urbania A/C",
    desc: "Spacious and comfortable, great for medium-sized groups or corporate outings.",
  },
  {
    title: "17-Seater Force Urbania A/C",
    desc: "The ultimate choice for larger groups, ensuring ample space and comfort.",
  },
];

const facilities = [
  "Newspaper",
  "Mineral Water Bottle",
  "First Aid Box",
  "Tissue Paper",
  "Ample Luggage Area",
  "GPS Tracker with Panic Button",
  "Driver in Uniform",
];

const Seater = () => {
  return (
    <section
    className="py-16 bg-gradient-to-br from-black/90 via-[#c40707] to-black/90 text-white px-6 md:px-12 "
     id="urbania">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 font-['Dancing_Script'] text-[#cda45e]">
          Rent Urbania Luxury Vans in Bangalore
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto font-['Abril_Fatface'] text-lg">
          At Rent Urbania Bangalore, we offer world-class luxury and comfort travel
          with our new Force Urbania Luxury Vans. Hire our 10, 13, 15 or 17 seater A/C vehicles
          at affordable prices for your travel needs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {urbaniaTypes.map((item, index) => (
            <div
              key={index}
              className="bg-black/70 rounded-xl p-6 border border-gray-700 hover:border-gray-400 transition"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-2xl font-semibold  mb-2 font-['Abril_Fatface']">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-black/70 p-6 rounded-xl" data-aos="fade-up">
          <h3 className="text-2xl font-semibold  mb-4 font-['Abril_Fatface']">
            In-Vehicle Facilities & Amenities
          </h3>
          <ul className="list-disc list-inside text-gray-300 grid sm:grid-cols-2 gap-2">
            {facilities.map((facility, idx) => (
              <li key={idx} className="hover:text-yellow-400 transition font-['Abril_Fatface']">
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </div>


<div className="text-center mt-10">
  <a
    href="/services"
    className="inline-block px-6 py-3 text-sm md:text-base font-semibold font-['Abril_Fatface'] bg-[#cda45e] text-black rounded-full hover:bg-[#b4933a] transition"
  >
    View More Details
  </a>
</div>

    </section>
  );
};

export default Seater;
