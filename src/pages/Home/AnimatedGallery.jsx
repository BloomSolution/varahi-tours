
import React, { useState, useEffect } from "react";

const PremiumTempoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    {
      id: 1,
      // image:
      //   "https://www.onlinebusbookingindia.com/uploads/66040_7-Seater-Tempo-Traveller-in-Delhi.jpg",
       image:
        "https://tse3.mm.bing.net/th/id/OIP.sh95vt28A38HZg-UlL4EZwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "7 Seater Executive",
      description: "Intimate luxury for small groups",
      category: "Compact",
      capacity: "7 Passengers",
      features: ["Premium leather", "Climate control", "Entertainment system"],
    },
    {
      id: 2,
      // image: "https://busprestige.pl/wp-content/uploads/2018/09/BP.313_MAN_BUS_PRODUCER_MAN_TGEIMG_5189.jpg",
      image: "https://www.luxurytempotraveller.com/assets/images/10-seater-force-urbania-luxury-van-with-1x1-modified-seats-on-rent.jpg",
      title: "8 Seater Business",
      description: "Perfect blend of comfort and efficiency",
      category: "Business",
      capacity: "8 Passengers",
      features: ["Business seating", "Wi-Fi enabled", "Premium audio"],
    },
    {
      id: 3,
      // image: "https://www.renttempotraveller.com/tempo-images/9seatermaharaja1x1.jpg",
      image: "https://www.urbaniahire.com/jap/media/uploads/9-seater-premium-urbania2.webp",
      title: "9 Seater Maharaja",
      description: "Royal comfort for discerning travelers",
      category: "Luxury",
      capacity: "9 Passengers",
      features: ["Maharaja seating", "Luxury amenities", "Premium service"],
    },
    {
      id: 4,
      image:
        "https://harikrishnatourism.com/img/gallery/tempo-traveller-on-rent-22.jpg",
      title: "10 Seater Premium",
      description: "Spacious elegance for group travel",
      category: "Premium",
      capacity: "10 Passengers",
      features: ["Extra legroom", "Premium interiors", "Advanced safety"],
    },
    {
      id: 5,
      image:
        "https://www.tempotravller.com/images/12-seater-maharaja-tempo.jpg",
      title: "11 Seater Deluxe",
      description: "Ultimate comfort for larger groups",
      category: "Deluxe",
      capacity: "11 Passengers",
      features: ["Deluxe seating", "Entertainment", "Refreshment bar"],
    },
    {
      id: 6,
      image: "https://delhitempotravels.com/dist/images/12-seater-tempo.webp",
      title: "12 Seater Grand",
      description: "Magnificent journey for extended families",
      category: "Grand",
      capacity: "12 Passengers",
      features: ["Grand luxury", "Premium comfort", "VIP treatment"],
    },
  ];

  // const categories = [
  //   "All",
  //   "Compact",
  //   "Business",
  //   "Luxury",
  //   "Premium",
  //   "Deluxe",
  //   "Grand",
  // ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const LuxuryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" className="text-amber-400">
      <path
        fill="currentColor"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );

  const GeometricPattern = () => (
    <div className="absolute inset-0 opacity-5">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.05) 0%, transparent 50%),
          linear-gradient(45deg, transparent 45%, rgba(212, 175, 55, 0.02) 50%, transparent 55%)
        `,
          backgroundSize: "100px 100px, 150px 150px, 50px 50px",
        }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden font-['Abril_Fatface']">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('5.jpg')",
          filter: "brightness(0.3) contrast(1.2)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/55 to-black/50" />

      {/* Geometric Pattern Overlay */}
      <GeometricPattern />

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-20 px-6">
        {/* Premium Header */}
        <div
          className={`text-center mb-20 transition-all duration-1200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtitle */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <span className="mx-6 text-amber-300 text-sm font-light tracking-[0.3em] uppercase">
              Premium Fleet
            </span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-wider mb-6">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent ">
              LUXURY
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-light tracking-[0.2em] mb-8 font-['Dancing_Script'] ">
            ON EVERY MILE
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Experience unparalleled comfort and sophistication with our
            meticulously maintained fleet of premium tempo travellers. Where
            every journey becomes a luxurious adventure.
          </p>

          {/* Decorative Element */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <LuxuryIcon />
              <div className="w-8 h-px bg-amber-400"></div>
              <LuxuryIcon />
              <div className="w-8 h-px bg-amber-400"></div>
              <LuxuryIcon />
            </div>
          </div>
        </div>

        {/* Category Filter */}   
        {/* <div className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-8 py-4 font-light tracking-wider transition-all duration-500 overflow-hidden
                  ${selectedCategory === category 
                    ? 'text-black bg-amber-400 shadow-lg shadow-amber-400/25' 
                    : 'text-gray-400 bg-transparent border border-gray-600 hover:border-amber-400/50 hover:text-amber-300'
                  }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                }}
              >
                <span className="relative z-10 text-sm uppercase">{category}</span>
                {selectedCategory !== category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                )}
              </button>
            ))}
          </div>
        </div> */}

        {/* Premium Gallery Grid */}
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.id}-${selectedCategory}`}
                className="group relative transition-all duration-700 hover:scale-105"
                style={{
                  animation: isLoaded
                    ? `fadeInUp 0.8s ease-out ${index * 150}ms forwards`
                    : "none",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main Card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm border border-gray-800 hover:border-amber-400/30 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredIndex === index
                          ? "scale-110 brightness-110"
                          : "scale-100"
                      }`}
                    />

                    {/* Gradient Overlays */}

                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div> */}

                    {/* <div className={`absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} ></div> */}

                    {/* Capacity Badge */}
                    <div className="absolute top-4 right-4 bg-amber-400 text-black px-3 py-1 text-xs font-semibold tracking-wide">
                      {item.capacity}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Title and Category */}
                    <div className="border-l-2 border-amber-400 pl-4">
                      <h3 className="text-xl font-light text-white tracking-wide mb-1">
                        {item.title}
                      </h3>
                      <p className="text-amber-300 text-sm font-light tracking-wider uppercase">
                        {item.category} CLASS
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div
                      className={`space-y-2 transition-all duration-500 ${
                        hoveredIndex === index
                          ? "opacity-100 max-h-40"
                          : "opacity-0 max-h-0"
                      } overflow-hidden`}
                    >
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs tracking-wide">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Premium Corner Accents */}
                  <div
                    className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-400 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  ></div>
                  <div
                    className={`absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-amber-400 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-amber-400 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-amber-400 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Button */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="/gallery"
            className="group relative inline-block px-12 py-4 font-light tracking-[0.2em] uppercase text-sm overflow-hidden transition-all duration-500 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #ffd700 100%)",
              clipPath:
                "polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)",
            }}
          >
            <span className="relative z-10 text-black font-medium">
              Explore Full Collection
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>

        {/* Bottom Decorative Section */}
        <div
          className={`flex justify-center mt-20 transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="flex items-center space-x-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="flex items-center space-x-2">
              <LuxuryIcon />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase">
                Premium Fleet
              </span>
              <LuxuryIcon />
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default PremiumTempoGallery;
