import React from "react";

const RateCard = () => {
  return (
    <section
    //  className="bg-gray-900 text-white py-16 px-4 md:px-10" 
     className="py-16 px-4 md:px-10 bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/bg.jpg')" }}
     id="rate-card">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold font-['Dancing_Script'] text-[#cda45e] mb-10 text-center"
          data-aos="fade-up"
        >
          Force Urbania rate Card- Local Package, outstation trip and Airport transfer
        </h2>

        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
          {/* Urbania 10+1 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 font-['Abril_Fatface']">
            <h3 className="text-2xl font-semibold text-white mb-4 ">Urbania 10+1 AC</h3>
            <p><strong>Local Package (8hrs / 80kms):</strong> ₹6500</p>
            <p>Extra Hour: ₹300</p>
            <p>Outstation: ₹35/km</p>
            <p>Extra KM: ₹35</p>
            <p>Driver Bata: ₹600</p>
            <p>Toll & Parking: Extra</p>

            <div className="mt-4 border-t border-gray-600 pt-4">
              <p><strong>Airport Pickup:</strong> ₹7000</p>
              <p><strong>Airport Drop:</strong> ₹7000</p>
              <p><strong>Pickup + Drop:</strong> ₹9000</p>
            </div>
          </div>

          {/* Urbania 12+1 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 font-['Abril_Fatface']">
            <h3 className="text-2xl font-semibold text-white mb-4">Urbania 12+1 / 13+1 AC</h3>
            <p><strong>Local Package (8hrs / 80kms):</strong> ₹7500</p>
            <p>Extra Hour: ₹400</p>
            <p>Outstation: ₹40/km</p>
            <p>Extra KM: ₹40</p>
            <p>Driver Bata: ₹600</p>
            <p>Toll & Parking: Extra</p>

            <div className="mt-4 border-t border-gray-600 pt-4">
              <p><strong>Airport Pickup:</strong> ₹7500</p>
              <p><strong>Airport Drop:</strong> ₹7500</p>
              <p><strong>Pickup + Drop:</strong> ₹9500</p>
            </div>
          </div>

          {/* Urbania 16+1 */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 font-['Abril_Fatface']">
            <h3 className="text-2xl font-semibold text-white mb-4">Urbania 16+1 AC</h3>
            <p><strong>Local Package (8hrs / 80kms):</strong> ₹8000</p>
            <p>Extra Hour: ₹400</p>
            <p>Outstation: ₹42/km</p>
            <p>Extra KM: ₹42</p>
            <p>Driver Bata: ₹700</p>
            <p>Toll & Parking: Extra</p>

            <div className="mt-4 border-t border-gray-600 pt-4">
              <p><strong>Airport Pickup:</strong> ₹8500</p>
              <p><strong>Airport Drop:</strong> ₹8500</p>
              <p><strong>Pickup + Drop:</strong> ₹10000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateCard;




// import React from "react";

// const RateCard = () => {
//   return (
//     <div className="bg-black py-16 px-4 text-white" id="rate-card">
//       <div className="max-w-6xl mx-auto">
//         <h2
//           className="text-4xl font-bold text-center text-yellow-400 mb-12"
//           data-aos="fade-up"
//         >
//           Force Urbania Rate Card
//         </h2>

//         {/* Card Grid */}
//         <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
//           {/* Local Package */}
//           <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl hover:shadow-yellow-500/30 transition">
//             <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
//               Local Package
//             </h3>
//             <p className="mb-2 text-gray-300">8hrs 80kms</p>
//             <ul className="space-y-2 text-gray-200 text-sm">
//               <li>Urbania 10+1 AC: ₹6500</li>
//               <li>Urbania 12+1 or 13+1 AC: ₹7500</li>
//               <li>Urbania 16+1 AC: ₹8000</li>
//               <li>Extra Hour: ₹300–₹400</li>
//               <li>Driver Bata: ₹600–₹700</li>
//               <li>Toll & Parking: Extra</li>
//             </ul>
//           </div>

//           {/* Outstation */}
//           <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl hover:shadow-yellow-500/30 transition">
//             <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
//               Outstation Trip
//             </h3>
//             <ul className="space-y-2 text-gray-200 text-sm">
//               <li>Urbania 10+1 AC: ₹35/km</li>
//               <li>Urbania 12+1 AC: ₹40/km</li>
//               <li>Urbania 16+1 AC: ₹42/km</li>
//               <li>Extra KM: ₹35–₹42</li>
//               <li>Driver Bata: ₹600–₹700</li>
//               <li>Toll & Parking: Extra</li>
//             </ul>
//           </div>

//           {/* Airport Transfer */}
//           <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl hover:shadow-yellow-500/30 transition">
//             <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
//               Airport Transfer
//             </h3>
//             <ul className="space-y-2 text-gray-200 text-sm">
//               <li>Urbania 10+1 AC Pickup/Drop: ₹7000</li>
//               <li>Urbania 10+1 AC Both: ₹9000</li>
//               <li>Urbania 12+1 AC Pickup/Drop: ₹7500</li>
//               <li>Urbania 12+1 AC Both: ₹9500</li>
//               <li>Urbania 16+1 AC Pickup/Drop: ₹8500</li>
//               <li>Urbania 16+1 AC Both: ₹10000</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RateCard;
