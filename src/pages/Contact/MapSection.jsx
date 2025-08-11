
import React from "react";

export default function MapSection() {
  return (
    <section id="map" className="w-full h-[400px] md:h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.9772015982703!2d77.57521857507537!3d12.909186787400442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzMzLjEiTiA3N8KwMzQnNDAuMSJF!5e0!3m2!1sen!2sin!4v1754472481172!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
