import React from 'react';

const FeatureSection = () => {
  return (
    <div className="bg-gradient-to-br from-black/90 via-[#c40707] to-black/90 text-white py-12 px-4 sm:px-6 md:px-16">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 font-['Dancing_Script'] text-[#cda45e]"
        data-aos="fade-down"
      >
        Explore with Rent Urbania Bangalore Car Rentals
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div
          className="w-full h-60 sm:h-72 md:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-gray-700"
          data-aos="zoom-in"
        >
          <img
            src="/22.jpg"
            alt="Force Urbania Luxury Van"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 space-y-6 font-['Abril_Fatface']">
          <p data-aos="fade-right">
            <strong className="text-white text-xl sm:text-2xl">Road Trip Ready:</strong><br />
           Our Vans are perfect for road trips, with comfortable seating, spacious interiors, and plenty of storage space. We also offer GPS navigation and road trip planning services to help you make the most of your journey.
          </p>

          <p data-aos="fade-up">
            <strong className="text-white text-xl sm:text-2xl">Airport Pickup:</strong><br />
            We offer airport pick-up services to make your trip even more convenient. Our friendly staff will meet you at the airport and take you directly to your rental car, so you can start your adventure right away.
          </p>

          <p data-aos="fade-right">
            <strong className="text-white text-xl sm:text-2xl">Family-Friendly Cars:</strong><br />
            We understand the importance of traveling with family, which is why we offer family-friendly cars that are safe and spacious. Our cars are equipped with child seats and other safety features to ensure your family's comfort and well-being.
          </p>

          <p data-aos="fade-up">
            <strong className="text-white text-xl sm:text-2xl">Weekend Getaways:</strong><br />
            Looking for a quick weekend getaway? We offer affordable weekend rental rates that are perfect for short trips. You can choose from a variety of cars and rental periods to fit your schedule and budget.
          </p>

          <p data-aos="fade-right">
            <strong className="text-white text-xl sm:text-2xl">Corporate Travel:</strong><br />
             We offer corporate rental services for businesses and organizations. Whether you need a car for a day or a month, we can provide you with a reliable and professional rental experience.
          </p>

          <p data-aos="fade-up">
            <strong className="text-white text-xl sm:text-2xl">Customer Satisfaction:</strong><br />
            At Rent Urbania Bangalore Car Rentals, we are committed to providing you with the best rental experience possible. If you have any questions or concerns, please don't hesitate to contact us at <span className="text-yellow-300 font-medium">+919845774497, 9342508635</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

