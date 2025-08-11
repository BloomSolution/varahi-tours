// import React, { useState } from "react";

// const BookingForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     pickup: "",
//     drop: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Booking Submitted!");
//     console.log(form);
//   };

//   return (
//     <section className="bg-[#111827] py-16 text-white" id="booking">
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="text-center mb-8" data-aos="fade-up">
//           <h2 className="text-3xl font-bold mb-2">Book Your Ride Now</h2>
//           <p className="text-gray-400">Fast, Safe, Reliable Booking</p>
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-[#1f2937] p-6 rounded-xl grid gap-4 md:grid-cols-2"
//           data-aos="fade-up"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             className="p-3 rounded bg-[#374151] text-white placeholder-gray-400 focus:outline-none"
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={form.phone}
//             onChange={handleChange}
//             className="p-3 rounded bg-[#374151] text-white placeholder-gray-400 focus:outline-none"
//             required
//           />
//           <input
//             type="text"
//             name="pickup"
//             placeholder="Pickup Location"
//             value={form.pickup}
//             onChange={handleChange}
//             className="p-3 rounded bg-[#374151] text-white placeholder-gray-400 focus:outline-none"
//             required
//           />
//           <input
//             type="text"
//             name="drop"
//             placeholder="Drop Location"
//             value={form.drop}
//             onChange={handleChange}
//             className="p-3 rounded bg-[#374151] text-white placeholder-gray-400 focus:outline-none"
//             required
//           />
//           <input
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//             className="p-3 rounded bg-[#374151] text-white placeholder-gray-400 focus:outline-none col-span-2"
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded text-white font-semibold col-span-2"
//           >
//             Submit Booking
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default BookingForm;
