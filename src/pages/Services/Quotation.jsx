// import React from "react";

// const quotations = [
//   {
//     title: "Force Urbania 10 Seater – 1 Day",
//     price: "₹10,200",
//     details: "300km drive with day bata",
//     rate: "₹32/km + ₹600 bata",
//     extra: "₹32/km (Excess)",
//   },
//   {
//     title: "Force Urbania 10 Seater – 2 Days",
//     price: "₹20,400",
//     details: "600km drive with day bata",
//     rate: "₹32/km + ₹600 bata × 2",
//     extra: "₹35/km (Excess)",
//   },
//   {
//     title: "Force Urbania 13 Seater – 1 Day",
//     price: "₹12,600",
//     details: "300km drive with day bata",
//     rate: "₹40/km + ₹600 bata",
//     extra: "₹40/km (Excess)",
//   },
//   {
//     title: "Force Urbania 13 Seater – 2 Days",
//     price: "₹25,200",
//     details: "600km drive with day bata",
//     rate: "₹40/km + ₹600 bata × 2",
//     extra: "₹40/km (Excess)",
//   },
//   {
//     title: "Force Urbania 17 Seater – 1 Day",
//     price: "₹14,200",
//     details: "300km drive with day bata",
//     rate: "₹45/km + ₹700 bata",
//     extra: "₹45/km (Excess)",
//   },
//   {
//     title: "Force Urbania 17 Seater – 2 Days",
//     price: "₹28,400",
//     details: "600km drive with day bata",
//     rate: "₹45/km + ₹700 bata × 2",
//     extra: "₹45/km (Excess)",
//   },
// ];

// const Quotation = () => {
//   return (
//     <div className="bg-gray-900 text-white py-16 px-4" id="quotation">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" data-aos="fade-up">
//         Force Urbania Quotation
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {quotations.map((item, i) => (
//           <div
//             key={i}
//             className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:scale-105 transition duration-300"
//             data-aos="zoom-in"
//           >
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p className="text-lg font-bold mb-1">{item.price}</p>
//             <p className="text-sm text-gray-300">{item.details}</p>
//             <p className="text-sm text-gray-400 mt-2">Rate: {item.rate}</p>
//             <p className="text-sm text-gray-400">Extra: {item.extra}</p>
//             <p className="text-xs text-gray-500 mt-2">* Toll, parking, permit, and night bata excluded</p>
//           </div>
//         ))}
//       </div>

//       <div className="max-w-4xl mx-auto mt-12 text-sm text-gray-300 space-y-3" data-aos="fade-up">
//         <h3 className="text-xl font-semibold text-white">Terms and Conditions</h3>
//         <ul className="list-disc list-inside">
//           <li>Time & Kms count from Garage (Kammanahalli) to Garage.</li>
//           <li>300 km/day limit, 600 km/2 days.</li>
//           <li>Driver day bata is mandatory. Night bata is optional.</li>
//         </ul>
//         <p className="mt-3">
//           <strong>Why Force Urbania over Luxury Tempo Traveller?</strong> <br />
//           Modified travellers may not follow BIS standards. Urbania is company-certified, more premium, and provides a better travel experience.
//         </p>
//         <p>
//           <strong>Airport Service:</strong> Available for group departures or arrivals from Bangalore Airport – 10, 13, and 17 seater.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Quotation;



import React from "react";

const quotationData = [
  {
    title: "Force Urbania 10 Seater – 1 Day",
    price: "₹10,200",
    details: [
      "Luxury AC",
      "300km drive with day bata",
      "₹32/km + ₹600 bata",
      "Excess: ₹32/km",
      "Excludes: Toll, parking, permit, night bata"
    ],
  },
  {
    title: "Force Urbania 10 Seater – 2 Days",
    price: "₹20,400",
    details: [
      "Luxury AC",
      "600km drive with day bata",
      "₹32/km + ₹600 bata x 2",
      "Excess: ₹35/km",
      "Excludes: Toll, parking, permit, night bata"
    ],
  },
  {
    title: "Force Urbania 13 Seater – 1 Day",
    price: "₹12,600",
    details: [
      "Luxury AC",
      "300km drive with day bata",
      "₹40/km + ₹600 bata",
      "Excess: ₹40/km",
      "Excludes: Toll, parking, permit, night bata"
    ],
  },
  {
    title: "Force Urbania 13 Seater – 2 Days",
    price: "₹25,200",
    details: [
      "Luxury AC",
      "600km drive with day bata",
      "₹40/km + ₹600 bata x 2",
      "Excess: ₹40/km",
      "Excludes: Toll, parking, permit, night bata"
    ],
  },
  {
    title: "Force Urbania 17 Seater – 1 Day",
    price: "₹14,200",
    details: [
      "Luxury AC",
      "300km drive with day bata",
      "₹45/km + ₹700 bata",
      "Excess: ₹45/km",
      "Excludes: Toll, parking, permit, night bata"
    ],
  },
  {
    title: "Force Urbania 17 Seater – 2 Days",
    price: "₹28,400",
    details: [
      "Luxury AC",
      "600km drive with day bata",
      "₹45/km + ₹700 bata x 2",
      "Excess: ₹45/km",
      "Excludes: Toll, parking, permit, night bata"
    ],
  },
];

const QuotationSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up">
        Outstation Force Urbania AC Premium Minivan Rates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotationData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-lg font-bold text-blue-600 mb-3">{item.price}</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-gray-700 space-y-4" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-gray-800">Bangalore Airport Transfers</h3>
        <p>
          Book the most luxurious Force Urbania 10, 13, and 17 seater for group
          departures or arrivals at Bangalore Airport.
        </p>

        <h4 className="text-xl font-bold text-gray-800">Terms & Conditions</h4>
        <ul className="list-disc pl-6">
          <li>Time and km count from Garage (Kammanahalli Office)</li>
          <li>300km/day or 600km/2 days limit</li>
          <li>Driver day bata compulsory, night bata optional</li>
        </ul>

        <h4 className="text-xl font-bold text-gray-800">
          Force Urbania vs Luxury Tempo Traveller
        </h4>
        <p>
          Urbania is built per company standards with sleek interiors and
          premium comfort. Luxury Travellers are modified and not BIS-certified.
        </p>
      </div>
    </div>
  );
};

export default QuotationSection;
