// import React from "react";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// const FloatingButtons = () => {
//   return (
//     <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-4">
//       {/* Call Button */}
//       <a
//         href="tel:+919999999999"
//         className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition"
//         title="Call Us"
//       >
//         <FaPhoneAlt />
//       </a>

//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/919999999999"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition"
//         title="Chat on WhatsApp"
//       >
//         <FaWhatsapp />
//       </a>
//     </div>
//   );
// };

// export default FloatingButtons;





// ! phone Whatsap 
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  // Show buttons only after scrolling 200px
  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Call Button */}
      {/* <div className="group relative">
        <div className="absolute right-14 top-2 bg-white text-black text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition">
          Call us
        </div>
        <a
          href="tel:+919525165642"
          className="bg-blue-600 hover:bg-blue-700 text-white text-2xl p-4 rounded-full shadow-lg flex items-center justify-center relative"
        >
          <FaPhone />
          <span className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-50 z-[-1]"></span>
        </a>
      </div> */}

      {/* WhatsApp Button */}
      <div className="group relative">
        <div className="absolute right-14 top-2 bg-white text-black text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition">
          Chat on WhatsApp
        </div>
        <a
          href="https://wa.me/919342508635"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-2xl p-4 rounded-full shadow-lg flex items-center justify-center relative"
        >
          <FaWhatsapp />
          <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-50 z-[-1]"></span>
        </a>
      </div>
    </div>
  );
}