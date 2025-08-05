import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TopAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative bg-fixed py-12 px-4 sm:px-6 md:px-10 bg-cover bg-center text-white font-['Abril_Fatface']"
      style={{ backgroundImage: "url('/bg.jpg')" }}
      id="about"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <img
            src="./20.jpg"
            alt="Urbania Van"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div data-aos="fade-down">
          <h2
           className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-['Dancing_Script'] text-[#cda45e]"
           >
            About Us
          </h2>
          <p className="text-base sm:text-lg leading-7 mb-4">
            Welcome to <strong>Rent Urbania Bangalore</strong>, your one-stop-shop for affordable and reliable van rentals.
            Whether you're moving house, transporting goods, or going on a road trip, we have the perfect van for you.
          </p>
          <p className="text-base sm:text-lg leading-7 mb-4">
            Our vehicles are well-maintained, clean, and comfortable — ensuring a safe and enjoyable journey. We offer
            flexible rental options, competitive pricing, and top-notch customer service.
          </p>
          <p className="text-base sm:text-lg leading-7 font-medium">
            Book with us today and experience the best van rental service in Bangalore!
          </p>
        </div>
      </div>

      <div className="text-gray-300 px-2 sm:px-4 md:px-6 py-12"
      data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-['Dancing_Script'] text-[#cda45e]">
            Tempo Traveller on Rent in Bangalore
          </h2>
          <p className="mb-6 text-base sm:text-lg">
            We offer competitive rates to ensure you get the most value for your money.
          Check out our special offers for even more savings!
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Fleets</h3>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div data-aos="fade-right">
    <ul className="list-disc list-inside space-y-1 mb-6 text-lg sm:text-xl">
      {[
        "Traveller 12 seat AC/Non AC",
        "Luxury traveller 7 seater",
        "Luxury traveller 8 seater",
        "Luxury traveller 9 seater",
        "Luxury Traveller 12 seater",
        "Luxury Traveller 14 seater",
        "Luxury Traveller 16 seater",
        "Luxury Traveller 17 seater",
        "Luxury Traveller 18 seater",
        "Luxury Traveller 19 seater",
        "Luxury Traveller 20 seater",
        "Luxury Maharaja 9 seater (1+1)",
        "Luxury van rental 9, 12, 17-seater",
        "Traveller airport taxi"
      ].map((fleet, index) => (
        <li key={index}>{fleet}</li>
      ))}
    </ul>
  </div>

  <div data-aos="fade-up">
    <img
      src="./19.jpg"
      alt="Fleet Vans"
      className="w-full rounded-2xl shadow-lg object-cover"

    />
  </div>
</div>


          <p className="mb-4 text-base sm:text-lg mt-4">
           We Provide Luxury <strong>A/c</strong> and <strong>Non A/c</strong> Tempo Traveller for Outstation services as well as for
          Local usage in and around Bangalore and Airport Transfer to and from BIAL (Bangalore International Airport Limited).
          </p>

          <p className="mb-4 text-base sm:text-lg">
            You can hire our vehicle to travel any state in India.
          <strong> Experienced Drivers:</strong> Our professional drivers are well-trained, courteous,
          and familiar with the best routes, ensuring a smooth ride.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            <strong>Affordable Pricing:</strong> We offer competitive rental rates with no hidden charges.
          <strong> Wide Fleet Selection:</strong> Choose from 12 to 26-seater Tempo Travellers.
          <strong> 24/7 Support:</strong> Our customer service is always available.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            <strong>Flexible Pick-Up and Drop-Off:</strong> Choose convenient locations and times.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            Pricing starts @ ₹17/km. Best for Group & Family Tours. Most vehicles come with GPS for safe tracking.
          Drivers have a minimum 5 years of experience and are professionally trained.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            <strong>Need more than a Tempo Traveller?</strong> We also offer 21-seater Mini Bus (AC/Non-AC),
          Urbania, Innova, Crysta, Hycross, Etios Cabs for Outstation & Airport Transfers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopAbout;
