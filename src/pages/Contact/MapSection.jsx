
// import React from "react";

// export default function MapSection() {
//   return (
//     <section id="map" className="w-full h-[400px]">
//       <iframe
//         title="Restaurant Location"
//         src=""
//         className="w-full h-full border-0 rounded-none"
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </section>
//   );
// }



import React from "react";

export default function MapSection() {
  return (
    <section id="map" className="w-full h-[400px] md:h-[500px]">
      <iframe
        title="Pro Net Solutions Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.252536108045!2d77.61011657507955!3d12.820264118059723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7d690c8f9e4d%3A0x9976a76b4539ef60!2sPro%20Net%20Solutions!5e0!3m2!1sen!2sin!4v1692954309074!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
