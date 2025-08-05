// import React, { useState } from "react";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });
//   const [focusedField, setFocusedField] = useState("");

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     console.log("Form submitted:", formData);
//     // Add your form submission logic here
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-black/90 via-[#c40707] to-black/90 py-20 px-4 relative overflow-hidden font-['Abril_Fatface']"
//     style={{ backgroundImage: "url('https://muffingroup.com/blog/wp-content/uploads/2020/05/christian-chen-KPydzVyWfqg-unsplash.jpg')" }}
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
//       <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block">
//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight  font-['Dancing_Script']">
//               Get in <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-medium">Touch</span>
//             </h2>
//             <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//           </div>
//           <p className="text-xl text-slate-300 mt-8 max-w-2xl mx-auto leading-relaxed">
//             Ready to create something extraordinary together? Let's start the conversation.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
//           {/* Contact Form */}
//           <div className="relative">
//             <div className="bg-white/5 backdrop-blur- rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
//               <form action="">
//               <div className="relative z-10 space-y-8">
//                 {/* Name Field */}
//                 <div className="relative group">
                  
                  
                  
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField("name")}
//                     onBlur={() => setFocusedField("")}
//                     className="w-full bg-transparent border-0 border-b-2 border-white/20 text-white text-lg pt-4 px-5 focus:outline-none focus:border-amber-400 transition-all duration-300 placeholder-transparent peer"
//                     placeholder="Your Name"
//                     required
//                   />
//                   <label className={`absolute left-0 top-0 text-slate-400 transition-all duration-300 pointer-events-none ${
//                     focusedField === "name" || formData.name 
//                       ? "-top-6 text-sm text-amber-400" 
//                       : "text-lg"
//                   }`}>
//                     Your Name
//                   </label>
//                   <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
//                 </div>

//                 {/* Email Field */}
//                 <div className="relative group">
                  
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField("email")}
//                     onBlur={() => setFocusedField("")}
//                     className="w-full bg-transparent border-0 border-b-2 border-white/20 text-white text-lg pt-4 px-5 focus:outline-none focus:border-amber-400 transition-all duration-300 placeholder-transparent peer"
//                     placeholder="Email Address"
//                     required
//                   />

//                   <label className={`absolute left-0 top-0 text-slate-400 transition-all duration-300 pointer-events-none ${
//                     focusedField === "email" || formData.email 
//                       ? "-top-6 text-sm text-amber-400" 
//                       : "text-lg"
//                   }`}>
//                     Email Address
//                   </label>
                  
//                   <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
//                 </div>

//                 {/* Phone Field */}
//                 <div className="relative group">
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField("phone")}
//                     onBlur={() => setFocusedField("")}
//                     className="w-full bg-transparent border-0 border-b-2 border-white/20 text-white text-lg pt-4 px-5 focus:outline-none focus:border-amber-400 transition-all duration-300 placeholder-transparent peer"
//                     placeholder="Phone Number"
//                   />
//                   <label className={`absolute left-0 top-0 text-slate-400 transition-all duration-300 pointer-events-none ${
//                     focusedField === "phone" || formData.phone 
//                       ? "-top-6 text-sm text-amber-400" 
//                       : "text-lg"
//                   }`}>
//                     Phone Number
//                   </label>

//                   <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
//                 </div>

//                 {/* Message Field */}
//                 <div className="relative group">
//                   <textarea
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField("message")}
//                     onBlur={() => setFocusedField("")}
//                     className="w-full bg-transparent border-0 border-b-2 border-white/20 text-white text-lg py-4 pt-4 px-5 focus:outline-none focus:border-amber-400 transition-all duration-300 placeholder-transparent peer resize-none"
//                     placeholder="Your Message"
//                     required
//                   ></textarea>
//                   <label className={`absolute left-0 top-0 text-slate-400 transition-all duration-300 pointer-events-none ${
//                     focusedField === "message" || formData.message 
//                       ? "-top-6 text-sm text-amber-400" 
//                       : "text-lg"
//                   }`}>
//                     Your Message
//                   </label>
//                   {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div> */}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   onClick={handleSubmit}
//                   className="group relative w-full md:w-auto px-12 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/25"
//                 >
//                   <span className="relative z-10 flex items-center justify-center gap-3">
//                     Send Message
//                     <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                     </svg>
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </button>
//               </div>
//               </form>
//             </div>
//           </div>

//           {/* Contact Information & Visual */}
//           <div className="space-y-8">
//             {/* Contact Cards */}
//             <div className="grid gap-6">
//               {/* Email Card */}
//               <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-white font-semibold text-lg">Email Us</h3>
//                     <p className="text-slate-400">contact@example.com</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Phone Card */}
//               <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-white font-semibold text-lg">Call Us</h3>
//                     <p className="text-slate-400">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Location Card */}
//               <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-white font-semibold text-lg">Visit Us</h3>
//                     <p className="text-slate-400">123 Business Ave, City</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



// ! contact form main 
// import React from "react";

// const ContactSection = () => {
//   return (
//     <section className=" text-white py-32 px-4 md:px-0 bg-cover"
//      style={{ backgroundImage: "url('bg.jpg')" }}

//     >
//       <div className="max-w-6xl mx-auto  rounded-3xl overflow-hidden flex flex-col md:flex-row "
//       >
//         {/* Left: Contact Form */}
//         <div
//           className="w-full md:w-1/2 p-8 md:p-12 bg-cover bg-center bg-no-repeat relative"
//           // style={{ backgroundImage: `url('/i13.jpg')` }}
//         >
//           <div className="absolute inset-0 bg-black/30 rounded-3xl" />
//           <div className="relative z-10 space-y-6 text-center text-[#bebab3]">
//             <h2 className="text-3xl uppercase tracking-wide font-['Dancing_Script'] text-[#cda45e] font-extrabold">
//               Get in Touch with Us
//             </h2>
//             {/* text-5xl font-['Dancing_Script'] text-[#cda45e] */}
//             <p className="text-lg text-[#e0d3c2] font-['Abril_Fatface']">
//               Whether you’ve got questions, feedback, or want to discuss an event,
//               we’re here to listen and help.
//             </p>

//             {/* Contact Form */}
//             <form className="space-y-4 mt-8 font-['Abril_Fatface'] text-xl">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
//               />
             
//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Your Message"
//                 className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
//                 required
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-[#d9b47b] hover:bg-[#c4a66f] text-black px-6 py-3 uppercase tracking-wider font-semibold rounded-full mt-4"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Right: Visual Image */}
//         <div className="w-full md:w-1/2 p-10">
//           {/* <img
//             src="/i4.jpg"
//             alt="Contact Visual"
//             className="w-full h-full object-cover"
//           /> */}
          
//           {/* Contact Information & Visual */}
//           <div className="space-y-8">
//             {/* Contact Cards */}
//             <div className="grid gap-6">
//               {/* Email Card */}
//               <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path  strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-white font-semibold text-lg">Email Us</h3>
//                     <p className="text-slate-400">contact@example.com</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Phone Card */}
//               <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-white font-semibold text-lg">Call Us</h3>
//                     <p className="text-slate-400">+919845774497, 9342508635</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Location Card */}
//               <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
//                     <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-white font-semibold text-lg">Visit Us</h3>
//                     <p className="text-slate-400">123 Business Ave, City</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



import { Mail, MapIcon, MapPin, Phone } from "lucide-react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappNumber = "919342508635"; // ← apna WhatsApp number daal do (with country code)
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section
      className="text-white py-32 px-4 md:px-0 bg-cover"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Contact Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-black/30 rounded-3xl" />
          <div className="relative z-10 space-y-6 text-center text-[#bebab3]">
            <h2 className="text-3xl uppercase tracking-wide font-['Dancing_Script'] text-[#cda45e] font-extrabold">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-[#e0d3c2] font-['Abril_Fatface']">
              Whether you’ve got questions, feedback, or want to discuss an event,
              we’re here to listen and help.
            </p>

            {/* Contact Form */}
            <form
              className="space-y-4 mt-8 font-['Abril_Fatface'] text-xl"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="bg-transparent border-b border-white w-full p-2 focus:outline-none"
                required
              ></textarea>
              <div className=" flex justify-center">
              <button
                type="submit"
                className="bg-[#d9b47b] hover:bg-[#c4a66f] text-black px-6 py-3 uppercase tracking-wider font-semibold rounded-full mt-4 flex items-center gap-2"
              >
                <BsWhatsapp className="text-green-600"/>
                Send Message
              </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Visual Info Cards */}
        <div className="w-full md:w-1/2 p-10">
          <div className="space-y-8">
            <div className="grid gap-6">
              {/* Email Card */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Mail className="text-black"/>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email Us</h3>
                    <p className="text-slate-400">contact@example.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <Phone className="text-black " />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Call Us</h3>
                    <p className="text-slate-400">+919845774497, 9342508635</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    {/* <MapIcon className="text-black"/> */}
                    <MapPin className="text-black"/>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Visit Us</h3>
                    <p className="text-slate-400">123 Business Ave, City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;




// ~ContactBookingSection.jsx
// import React from "react";
// import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

// const ContactBookingSection = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#0f2027] to-[#2c5364] text-white py-16 px-4 md:px-16 rounded-3xl shadow-2xl mx-4 md:mx-20 my-12">
//       <div className="grid md:grid-cols-2 gap-12 items-start">
//         {/* Contact Info */}
//         <div>
//           <h2 className="text-4xl font-bold mb-6 border-b border-gray-500 pb-2">Contact Us</h2>
//           <div className="space-y-5 text-lg text-gray-200">
//             <div className="flex items-center gap-3">
//               <FaPhone className="text-yellow-400" /> <span>+91 98765 43210</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <FaEnvelope className="text-yellow-400" /> <span>info@yourbrand.com</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <FaMapMarkerAlt className="text-yellow-400" /> <span>Koramangala, Bangalore</span>
//             </div>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <div className="bg-white text-black p-8 rounded-2xl shadow-lg">
//           <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
//             <FaCalendarAlt className="text-blue-600" /> Book Now
//           </h3>
//           <form className="space-y-4">
//             <input type="text" placeholder="Full Name" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//             <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//             <input type="date" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//             <textarea placeholder="Pickup Address" rows="3" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
//             <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 w-full rounded-xl transition">
//               Confirm Booking
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactBookingSection;






// ! contact form  
// import React from "react";
// import { motion } from "framer-motion";

// const ContactForm = () => {
//   return (
//     <div className=" text-white py-16 px-4 md:px-20"
//     style={{ backgroundImage: "url('https://muffingroup.com/blog/wp-content/uploads/2020/05/christian-chen-KPydzVyWfqg-unsplash.jpg')" }}
//     >
//       <motion.h2
//         className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#FF4C29]"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Get in Touch
//       </motion.h2>

//       <motion.form
//         className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl outline-none focus:border-[#FF4C29] transition-all"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl outline-none focus:border-[#FF4C29] transition-all"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl outline-none focus:border-[#FF4C29] transition-all col-span-2"
//         />
//         <textarea
//           placeholder="Your Message"
//           className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl outline-none focus:border-[#FF4C29] transition-all col-span-2 h-40 resize-none"
//           required
//         />
//         <button
//           type="submit"
//           className="col-span-2 bg-[#FF4C29] hover:bg-[#e53d1c] text-white font-bold py-3 rounded-xl transition-all"
//         >
//           Send Message
//         </button>
//       </motion.form>
//     </div>
//   );
// };

// export default ContactForm;