// import React from "react";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import AOS from "aos";

// const RentUrbania = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const destinations = [
//     {
//       title: "Mysore",
//       description:
//         "150kms one way, 400kms round trip including Mysore Palace, Chamundeshwari Temple, Museum, KRS Dam. Great for group tour in Urbania."
//     },
//     {
//       title: "Coorg",
//       description:
//         "300kms one way, 700kms round trip. Sightseeing includes Abbey Falls, Dubare, Raja Seat, Golden Temple. Ideal for Force Urbania."
//     },
//     {
//       title: "Ooty",
//       description:
//         "Includes Pykara Lakes, Spice Garden. Hill drives and cool weather make Bangalore to Ooty by Force Urbania a great option."
//     },
//     {
//       title: "Wayanad",
//       description:
//         "800kms approx. Includes destinations like Alleppey. Explore God's own country with Urbania AC rentals."
//     },
//     {
//       title: "Tirupathi",
//       description:
//         "600kms round trip. Visit Kalahasti and Kanipakam with Urbania luxury traveller."
//     },
//     {
//       title: "Chennai",
//       description:
//         "Bangalore to Chennai round trip within 900kms in Urbania traveller."
//     },
//     {
//       title: "Sakleshpura",
//       description:
//         "<500kms round trip. Explore nature and homestays around Sakleshpura."
//     },
//     {
//       title: "Chikkamagalur",
//       description:
//         "750kms round trip covering Mullayangiri hills, Dabey falls, Kalathgiri falls, Bababudangiri, Kemmangundi."
//     }
//   ];

//   return (
//     <div className="px-6 py-12 bg-white text-gray-800">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-4" data-aos="fade-down">
//           Rent a Car Today!
//         </h1>
//         <p className="text-center text-lg mb-10" data-aos="fade-up">
//           Experience luxury van rental in Bangalore with Urbania vans for outstation destinations.
//         </p>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {destinations.map((place, index) => (
//             <div
//               key={index}
//               className="border rounded-xl p-6 shadow-md bg-gray-50 hover:bg-white transition"
//               data-aos="zoom-in"
//             >
//               <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
//               <p className="text-sm text-gray-700">{place.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 bg-gray-100 p-6 rounded-xl shadow" data-aos="fade-up">
//           <h2 className="text-2xl font-bold mb-2">
//             Other Fleet Options from Varahi Tours and Travels
//           </h2>
//           <p className="mb-4">
//             We also offer 10, 13, and 17-seater luxury tempo travellers.
//           </p>

//           <h2 className="text-xl font-semibold mt-6 mb-2">
//             Permit Charges (South India)
//           </h2>
//           <ul className="list-disc pl-6 text-sm text-gray-700">
//             <li>Tamil Nadu: ₹2500</li>
//             <li>Andhra Pradesh: ₹3500</li>
//             <li>Kerala: ₹5500</li>
//             <li>Goa: ₹5000</li>
//           </ul>

//           <h2 className="text-xl font-semibold mt-6 mb-2">Cancellation Policy</h2>
//           <p className="text-sm text-gray-700">
//             Advance paid is non-refundable. If canceled 48 hours before, the same amount can be used within 60 days for future bookings.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RentUrbania;

import React from "react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const RentUrbania = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const destinations = [
    {
      title: "Mysore",
      description:
        "150kms one way, 400kms round trip including Mysore Palace, Chamundeshwari Temple, Museum, KRS Dam. Great for group tour in Urbania.",
    },
    {
      title: "Coorg",
      description:
        "300kms one way, 700kms round trip. Sightseeing includes Abbey Falls, Dubare, Raja Seat, Golden Temple. Ideal for Force Urbania.",
    },
    {
      title: "Ooty",
      description:
        "Includes Pykara Lakes, Spice Garden. Hill drives and cool weather make Bangalore to Ooty by Force Urbania a great option.",
    },
    {
      title: "Wayanad",
      description:
        "800kms approx. Includes destinations like Alleppey. Explore God's own country with Urbania AC rentals.",
    },
    {
      title: "Tirupathi",
      description:
        "600kms round trip. Visit Kalahasti and Kanipakam with Urbania luxury traveller.",
    },
    {
      title: "Chennai",
      description:
        "Bangalore to Chennai round trip within 900kms in Urbania traveller.",
    },
    {
      title: "Sakleshpura",
      description:
        "500kms round trip. Explore nature and homestays around Sakleshpura.",
    },
    {
      title: "Chikkamagalur",
      description:
        "750kms round trip covering Mullayangiri hills, Dabey falls, Kalathgiri falls, Bababudangiri, Kemmangundi.",
    },
  ];

  const temples = [
    "Padmanabhaswamy Temple – Trivandrum",
    "Ramanathaswamy Temple – Rameshwaram",
    "Ranganathaswamy Temple – Trichy",
    "Venkateshwara Temple – Tirupati",
    "Chennakeshava Temple – Belur",
    "Arunachaleswar Temple – Thiruvannamalai",
    "Brihadeeswarar Temple – Thanjavur",
    "Meenakshi Temple – Madurai",
    "Guruvayur Temple – Guruvayur",
    "Kailasanathar Temple – Kanchipuram",
    "Ekambareswarar Temple – Kanchipuram",
    "Sarangapani Temple – Kumbakonam",
    "Vadakkunnathan Temple – Thrissur",
    "Annapoorneshwari Temple – Horanadu",
    "Shore Temple – Mahabalipuram",
    "Sivagiri Temple – Varkala",
    "Mahabaleshwar Temple – Gokarna",
    "Parthasarathy Temple – Aranmula",
    "Bhutanatha Temple – Badami",
    "Murudeshwara Temple – Murdeshwar",
    "Murugan Temple – Tiruchendur",
    "Sabarimala Sastha Temple – Pathanamthitta",
    "Attukal Bhagavathy Temple – Trivandrum",
    "Sri Krishna Temple – Guruvayoor",
    "Thirunelli Temple – Wayanad",
    "Vaikom Mahadeva Temple – Varkala",
    "Thiruvalla Temple – Thiruvalla",
    "Aihole Durga Temple – Aihole",
    "Sri Krishna Temple – Udupi",
    "Veera Narayana Temple – Belavadi",
  ];

  const touristPlaces = [
    "Coorg : Hill Station, Karnataka",
    "Bandipur National Park : Wildlife Attraction, Karnataka",
    "Mysore : Historical, Karnataka",
    "Hampi : Historical, Karnataka",
    "Bengaluru : Urban Tourism, Karnataka",
    "Maravanthe : Beach Destination, Karnataka",
    "Udupi : Pilgrim Centre, Food Joints, Karnataka",
    "Madikeri : Hill Station, Karnataka",
    "Murudeshwar : Religious Place, Karnataka",
    "Bijapur : Historical Place, Karnataka",
    "Badami : Historical Place, Karnataka",
    "Nagarhole : Wildlife Attraction, Karnataka",
    "Gokarna : Beach Destination, Karnataka",
    "Chikmagalur : Hill Station, Karnataka",
    "Alappuzha : Backwater Tourism, Kerala",
    "Varkala : Beach Destination, Kerala",
    "Munnar : Hill Station, Kerala",
    "Kovalam : Beach Destination, Kerala",
    "Kochi : Beach Destination, Kerala",
    "Wayanad : Hill Station, Kerala",
    "Thrissur : Religious Place, Kerala",
    "Kollam : Backwater Tourism, Kerala",
    "Thiruvananthapuram : Religious Place, Kerala",
    "Kumarakom : Wildlife & Backwater Tourism, Kerala",
    "Idukki : Nature Lovers, Kerala",
    "Devikulam : Honeymoon Destination, Kerala",
    "Vagamon : Nature Lovers, Kerala",
    "Ooty : Hill Station, Tamil Nadu",
    "Kanyakumari : Religious Place, Tamil Nadu",
    "Kodaikanal : Hill Station, Tamil Nadu",
    "Madurai : Heritage Tourism, Tamil Nadu",
    "Rameshwaram : Spiritual Tourism, Tamil Nadu",
    "Thanjavur : Historical Place, Tamil Nadu",
    "Mahabalipuram : Historical Place, Tamil Nadu",
    "Kanchipuram : Cultural & Historical, Tamil Nadu",
    "Chennai : Beach, Religious & Urban Tourism, Tamil Nadu",
    "Yercaud : Nature Lovers, Tamil Nadu",
    "Coimbatore : Adventure & Religious Tourism, Tamil Nadu",
    "Coonoor : Hill Station, Tamil Nadu",
    "Mudumalai National Park : Wildlife, Tamil Nadu",
    "Araku Valley : Nature Lovers, Andhra Pradesh",
    "Vijayawada : Historical Place, Andhra Pradesh",
    "Visakhapatnam : Beach Destination, Andhra Pradesh",
    "Gandikota : Adventure Tourism, Andhra Pradesh",
    "Horsley Hills : Adventure Tourism, Andhra Pradesh",
    "Amaravati : Historical Place, Andhra Pradesh",
    "Hyderabad : Food, History & Urban Tourism, Telangana",
    "Warangal : Nature & History, Telangana",
    "Adilabad : Nature & History, Telangana",
    "Pondicherry : Beach Destination, Union Territory",
  ];

  const quotationData = [
    {
      title: "Force Urbania 10 Seater – 1 Day",
      price: "₹10,200",
      details: [
        "Luxury AC",
        "300km drive with day bata",
        "₹32/km + ₹600 bata",
        "Excess: ₹32/km",
        "Excludes: Toll, parking, permit, night bata",
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
        "Excludes: Toll, parking, permit, night bata",
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
        "Excludes: Toll, parking, permit, night bata",
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
        "Excludes: Toll, parking, permit, night bata",
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
        "Excludes: Toll, parking, permit, night bata",
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
        "Excludes: Toll, parking, permit, night bata",
      ],
    },
  ];

  return (
    <div className="px-6 font-['Abril_Fatface']">
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-3xl md:text-5xl font-bold text-center mb-2 font-['Dancing_Script'] text-[#cda45e]"
          //  className="text-3xl md:text-5xl font-bold mb-10 font-['Dancing_Script'] text-[#cda45e]"
          data-aos="fade-down"
        >
          Rent a Car Today 
        </h1>
        <p className="text-center text-lg mb-10" data-aos="fade-up">
          Experience luxury van rental in Bangalore with Urbania vans for
          outstation destinations.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-xl p-6 shadow-md bg-black/60 hover:bg-black/80 transition"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-semibold mb-2 ">{place.title}</h3>
              <p className=" text-gray-300">{place.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 bg-black/60 p-6 rounded-xl shadow "
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold mb-4">
            Popular Temples in South India
          </h2>
          <ul className="list-disc pl-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-300">
            {temples.map((temple, i) => (
              <li key={i}>{temple}</li>
            ))}
          </ul>
        </div>

        <div
          className="mt-12 bg-black/60 p-6 rounded-xl shadow"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold mb-4">
            Tourist Places in South India
          </h2>
          <ul className="list-disc pl-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-2  text-gray-300">
            {touristPlaces.map((place, i) => (
              <li key={i}>{place}</li>
            ))}
          </ul>
        </div>

        {/* <div
          className="mt-12 bg-black/60 p-6 rounded-xl shadow"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold mb-2">
            Other Fleet Options from Varahi Tours and Travels
          </h2>
          <p className="mb-4">
            We also offer 10, 13, and 17-seater luxury tempo travellers.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            Permit Charges (South India)
          </h2>
          <ul className="list-disc pl-6  text-gray-300">
            <li>Tamil Nadu: ₹2500</li>
            <li>Andhra Pradesh: ₹3500</li>
            <li>Kerala: ₹5500</li>
            <li>Goa: ₹5000</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            Cancellation Policy
          </h2>
          <p className=" text-gray-300">
            Advance paid is non-refundable. If canceled 48 hours before, the
            same amount can be used within 60 days for future bookings.
          </p>
        </div> */}

        {/* <div className="py-16 mt-3 sm:px-2 lg:px-1 max-w-6xl mx-auto ">
          <h2
            className="text-3xl md:text-5xl font-bold text-center font-['Dancing_Script'] text-[#cda45e] mb-8"
            data-aos="fade-up"
          >
            Outstation Force Urbania AC Premium Minivan Rates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotationData.map((item, index) => (
              <div
                key={index}
                className="bg-black/60 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-semibold  mb-2">{item.title}</h3>
                <p className="text-lg font-bold  mb-3">{item.price}</p>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-gray-300 space-y-4" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white">
              Bangalore Airport Transfers
            </h3>
            <p>
              Book the most luxurious Force Urbania 10, 13, and 17 seater for
              group departures or arrivals at Bangalore Airport.
            </p>

            <h4 className="text-xl font-bold text-white">Terms & Conditions</h4>
            <ul className="list-disc pl-6">
              <li>Time and km start form Office (JP Nagar)</li>
              <li>300km/day or 600km/2 days limit</li>
              <li>Driver day bata compulsory, night bata optional</li>
            </ul>

            <h4 className="text-xl font-bold text-white">
              Force Urbania vs Luxury Tempo Traveller
            </h4>
            <p>
              Urbania is built per company standards with sleek interiors and
              premium comfort. Luxury Travellers are modified and not
              BIS-certified.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RentUrbania;
