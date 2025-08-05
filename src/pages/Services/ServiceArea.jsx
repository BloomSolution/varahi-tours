import React from "react";
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from "react";

const serviceAreas = [
  "Attibele", "Anekal", "Jigani", "Banashankari", "Bommasandra", "Bidadi", "Kumbalagodu", "Kanakapura",
  "Yelahanka", "Hebbala", "Nagawara", "Banaswadi", "Kammanahalli", "Ramamurthynagar", "Kasturinagar",
  "Devanahalli", "Jayanagar", "JP Nagar", "Electronic City", "Kalyanagar", "Sahakarnagar", "Garage Locations",
  "KR Puram", "Mahadevpura", "Marathahalli", "Kundalahalli", "Whitefield", "Bellandur", "HSR Layout", "BTM Layout",
  "Bommanahalli", "Adugodi", "MG Road", "Koramangala", "Ejipura", "Domlur", "Indiranagar", "Tavarekere",
  "Yeshwanthpura", "Malleshwaram", "Rajajinagar", "Kengeri", "Harlur", "Sarjapur Road", "Vidyaranyapura",
  "Vijayanagar", "Panathur Road", "CV Raman Nagar", "Bagmane Tech Park", "Nandi Hills", "Brigade Road",
  "Thanisandra", "Sadashivanagar", "Bannerghatta Road", "CBD", "Frazer Town", "Cooke Town", "Basavanagudi", "Ulsoor"
];

const ServiceArea = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className=" text-white py-10 px-6 md:px-50 font-['Abril_Fatface']">
      <div data-aos="fade-up" className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-2  font-['Dancing_Script'] text-[#cda45e]">Service Areas in Bangalore</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Rent Urbania Bangalore makes it easy to rent a car wherever you are. Whether you're traveling for business or pleasure, we have a location near you.
        </p>
      </div>
      <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm md:text-base">
        {serviceAreas.map((area, index) => (
          <span key={index} className="bg-black/50 hover:bg-white/10 transition rounded-xl px-4 py-2 text-center shadow-sm text-lg">
            {area}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ServiceArea;
