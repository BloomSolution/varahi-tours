
// ! Schroller
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const slides = [
  {
    // title: "Discover Incredible Destinations",
    // subtitle: "Plan your next trip with Varahi Travels",
    image:"hbnr.jpg",
  },
  {
    // title: "Comfortable Rides, Amazing Packages",
    // subtitle: "Affordable, safe and luxurious tours",
    image: "hbnr2.jpg",
  },
  
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full overflow-hidden pt-15 ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[30vh] md:h-[90vh]">
            {/* Background Image */}
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1
                  className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 font-['Dancing_Script'] text-[#cda45e]"
                  data-aos="fade-up"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-lg sm:text-xl md:text-2xl mb-6 text-white/90 font-['Dancing_Script']"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {slide.subtitle}
                </p>

                {/* <Link
                  to="/services"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="bg-[#f6a623] hover:bg-[#e5971d] text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Explore Services
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;



// import React from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     title: "Discover Incredible Destinations",
//     subtitle: "Plan your next trip with Varahi Travels",
//     image: "5.jpg",
//   },
//   {
//     title: "Comfortable Rides, Amazing Packages",
//     subtitle: "Affordable, safe and luxurious tours",
//     image: "2.jpg",
//   },
//   {
//     title: "Book Now, Travel Hassle-Free",
//     subtitle: "We take care of your journey",
//     image: "3.jpg",
//   },
// ];

// const HeroSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     pauseOnHover: false,
//   };

//   return (
//     <section className="relative w-full overflow-hidden">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative h-[50vh] md:h-screen">
//             {/* Background Image */}
//             <div
//               className="h-full w-full bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* Overlay */}
//               {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

//               {/* Content */}
//               <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
//                 <h1
//                   className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 font-['Dancing_Script'] text-[#cda45e]"
//                   data-aos="fade-up"
//                 >
//                   {slide.title}
//                 </h1>
//                 <p
//                   className="text-lg sm:text-xl md:text-2xl mb-6 text-white/90 font-['Dancing_Script']"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   {slide.subtitle}
//                 </p>

//                 <Link
//                   to="/services"
//                   data-aos="zoom-in"
//                   data-aos-delay="400"
//                   className="bg-[#f6a623] hover:bg-[#e5971d] text-white px-6 py-3 rounded-full font-semibold transition"
//                 >
//                   Explore Services
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default HeroSlider;
