// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// // import "./TermsAndConditions.css"; // Optional CSS if needed

// const TermsAndConditions = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
//     <div className="p-6 md:p-26 pt-26 bg-gradient-to-br from-black/90 via-[#c40707] to-black/90 text-gray-800 dark:bg-[#111827] dark:text-gray-100 font-['Abril_Fatface']">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center  font-['Dancing_Script'] text-[#cda45e] md:text-5xl">Booking Terms & Conditions</h1>
//         <ul className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
//           <li>Cabs with suitable luggage space for 9 PAX are allowed.</li>
//           <li>Rental service assured with 2 days prior booking.</li>
//           <li>One day means one calendar day (12:00 AM to 11:59 PM).</li>
//           <li>Final quotation and booking process will be shared via WhatsApp.</li>
//           <li>Kilometers are counted from Garage to Garage.</li>
//           <li>Night driving allowance is extra if driving between 10:00 PM to 6:00 AM.</li>
//           <li>Tariff includes rental and fuel. Parking, toll, and permits are extra.</li>
//           <li>300 KMs free per day. Extra charges apply beyond 300 KMs.</li>
//           <li>Toll, parking, and interstate tax are to be borne by the customer.</li>
//           <li>Trips will be billed as roundtrip for luxury travellers.</li>
//         </ul>

//         <p className="mt-6 text-yellow-500 font-medium">
//           * Seasonal and festival prices may vary during Dussehra, Diwali, New Year, and public holidays.
//         </p>

//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold mb-4 ">Outstation Luxury Traveller Destinations</h2>
//           <p>
//             We offer tempo traveller hire for Coorg, Chikmagalur, Tirupathi, Chennai, Goa, Kerala, and other South Indian destinations from Bangalore.
//             Advance booking is recommended. We specialize in South India tour packages with professional and friendly drivers.
//           </p>
//         </div>

//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold mb-4 ">Tempo Traveller Features</h2>
//           <ul className="list-disc list-inside space-y-2">
//             <li>Manufacturer: Force</li>
//             <li>Seating Capacity: 7, 8, and 9-seaters</li>
//             <li>Pushback Maharaja seats with ample legroom</li>
//             <li>High-quality video entertainment sound system</li>
//             <li>32-inch LED TV for movies on the go</li>
//             <li>Premium AC with rapid cooling & heating</li>
//             <li>First Aid Box available</li>
//             <li>Drivers with tourist knowledge & experience</li>
//             <li>Flexible payment modes: UPI, bank transfer, or cash</li>
//           </ul>
//         </div>

//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold mb-4 ">Included in Rental</h2>
//           <ul className="list-disc list-inside space-y-2">
//             <li>Professional & friendly driver</li>
//             <li>Vehicle fuel included</li>
//             <li>Clean covers on all seats</li>
//             <li>Good quality sound system</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;



import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-black/80 text-slate-300 py-20 px-4 w-full flex justify-center items-center flex-col pt-[150px]">
      <h1 className="text-3xl font-bold mb-6 text-center  font-['Dancing_Script'] text-[#cda45e] md:text-5xl">Booking Terms & Conditions</h1>

      <div className="bg-[#19334a] rounded-lg max-w-4xl w-full p-6 md:p-8">
        <ul className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
          <li>Cabs with suitable luggage space for 9 PAX are allowed.</li>
          <li>Rental service assured with 2 days prior booking.</li>
          <li>One day means one calendar day (12:00 AM to 11:59 PM).</li>
          <li>Final quotation and booking process will be shared via WhatsApp.</li>
          <li>Kilometers are counted from Garage to Garage.</li>
          <li>Night driving allowance is extra if driving between 10:00 PM to 6:00 AM.</li>
          <li>Tariff includes rental and fuel. Parking, toll, and permits are extra.</li>
          <li>300 KMs free per day. Extra charges apply beyond 300 KMs.</li>
          <li>Toll, parking, and interstate tax are to be borne by the customer.</li>
          <li>Trips will be billed as roundtrip for luxury travellers.</li>
        </ul>

         <p className="mt-6 text-yellow-500 font-medium">
          * Seasonal and festival prices may vary during Dussehra, Diwali, New Year, and public holidays.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 ">Outstation Luxury Traveller Destinations</h2>
          <p>
            We offer tempo traveller hire for Coorg, Chikmagalur, Tirupathi, Chennai, Goa, Kerala, and other South Indian destinations from Bangalore.
            Advance booking is recommended. We specialize in South India tour packages with professional and friendly drivers.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 ">Tempo Traveller Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Manufacturer: Force</li>
            <li>Seating Capacity: 7, 8, and 9-seaters</li>
            <li>Pushback Maharaja seats with ample legroom</li>
            <li>High-quality video entertainment sound system</li>
            <li>32-inch LED TV for movies on the go</li>
            <li>Premium AC with rapid cooling & heating</li>
            <li>First Aid Box available</li>
            <li>Drivers with tourist knowledge & experience</li>
            <li>Flexible payment modes: UPI, bank transfer, or cash</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 ">Included in Rental</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Professional & friendly driver</li>
            <li>Vehicle fuel included</li>
            <li>Clean covers on all seats</li>
            <li>Good quality sound system</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
