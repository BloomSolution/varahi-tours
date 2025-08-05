import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Bus, MapPin, Users, ShieldCheck, Star } from "lucide-react";
import {
  Bus,
  MapPin,
  Users,
  ShieldCheck,
  Star,
  Send,
  Briefcase,
  Smile,
  Landmark,
  Car,
} from "lucide-react";
import { GiPathDistance } from "react-icons/gi";

const services = [
  {
    title: "Urbania 17-Seater Van",
    icon: <Bus size={32} />,
    desc: "Spacious, air-conditioned, and reliable van perfect for group travel.",
  },
  {
    title: "Outstation Tours",
    icon: <MapPin size={32} />,
    desc: "Affordable packages to Mysore, Coorg, Chikmagalur, and more.",
  },
  {
    title: "Group Booking",
    icon: <Users size={32} />,
    desc: "Ideal for family trips, corporate outings, and school tours.",
  },
  {
    title: "Comfort & Cleanliness",
    icon: <ShieldCheck size={32} />,
    desc: "Well-maintained, clean interiors for a safe and cozy ride.",
  },
  {
    title: "Experienced Drivers",
    icon: <Star size={32} />,
    desc: "Our drivers ensure smooth, timely, and secure journeys.",
  },
  {
    title: "Airport Transfers",
    icon: <Send size={32} />,
    desc: "Arrive in style with our comfortable and punctual airport transfer service.",
  },
  {
    title: "Corporate Travel",
    icon: <Briefcase size={32} />,
    desc: "We cater to business groups for conferences, meetings, and events.",
  },
  {
    title: "Family & Group Outings",
    icon: <Smile size={32} />,
    desc: "Enjoy family vacations, weddings, or get-togethers without worrying about transport.",
  },
  {
    title: "Tour Packages",
    icon: <Landmark size={32} />,
    desc: "Explore nearby tourist destinations with our customized tour packages.",
  },
  {
    title: "Outstation Rentals",
    icon: <Car size={32} />,
    desc: "Take a trip to distant places with our reliable outstation services.",
  },
];

const TopServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className=" py-20 px-4 md:px-16 font-['Abril_Fatface']"
      id="services"
    >
      {/* <div className="max-w-6xl mx-auto text-center mb-14" data-aos="fade-down">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 font-['Dancing_Script'] text-[#cda45e]">Our Services</h2>
        <p className="text-lg text-gray-300">
           Discover our reliable van rental services for safe, stylish, and stress-free outstation journeys.
        </p>
      </div> */}

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 font-['Dancing_Script'] text-[#cda45e]">
        Your Comfort, Our Priority – Services We Offer
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black/60 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-300"
            data-aos="zoom-in"
          >
            <div className="text-red-400 mb-4 hover:text-red-900 ">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 ">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopServices;
