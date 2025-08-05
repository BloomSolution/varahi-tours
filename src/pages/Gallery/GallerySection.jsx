
import React, { useEffect, useState } from "react";


const galleryImages = [
  // { src: "/i1.jpg", title: "Executive Collection", category: "Business Class Seats"  },
  // { src: "/i2.jpg", title: "Presidential Suite", category: "Business Class Seats" },
  // { src: "/i3.jpg", title: "Grand Touring", category: "Business Class Seats" },
  // { src: "/2.jpg", title: "Elite Series", category: "Ultra Premium Bus" },
  // { src: "/3.jpg", title: "Platinum Edition", category: "Ultra Premium Bus" },
  // { src: "/i6.jpg", title: "Royal Fleet", category: "Luxury Car" },
  // { src: "/5.jpg", title: "Diamond Class", category: "Ultra Premium Bus" },
  // { src: "/i9.jpg", title: "Imperial Ride", category: "Luxury Car" },
  // { src: "/i10.jpg", title: "Velvet Comfort", category: "Business Class Seats" },
  // { src: "/10.jpg", title: "Luxury Trail", category: "Ultra Premium Bus" },
  // { src: "/i16.jpg", title: "Golden Cruiser", category: "High-End SUV" },
  // { src: "/11.jpg", title: "Prestige Tour", category: "Ultra Premium Bus" },
  // { src: "/12.jpg", title: "Supreme Class", category: "Ultra Premium Bus" },
  // { src: "/13.jpg", title: "Silken Glide", category: "Ultra Premium Bus" },
  // { src: "/14.jpg", title: "Crown Jewel", category: "Ultra Premium Bus" },
  // { src: "/16.jpg", title: "Majestic Moves", category: "Ultra Premium Bus" },

  // ! Urbenia 10 + 1
  { src: "/6.jpg", title: "Crystal Drive", category: "10 + 1 Urbania seate" },
  { src: "/s17.jpg", title: "Majestic Moves", category: "10 + 1 Urbania seate" },
  { src: "/7.jpg", title: "Noble Class", category: "10 + 1 Urbania seate" },
  { src: "/8.jpg", title: "Urban Explorer", category: "10 + 1 Urbania seate" },
  // { src: "/9.jpg", title: "Jet Black Edition", category: "10 + 1 Urbania seate" },

  // { src: "/i17.jpg", title: "Regal Series", category: "Luxury Car" },
  // { src: "/i8.jpg", title: "Signature Series", category: "10 + 1  Urbania seate" },
  // { src: "/17.jpg", title: "Glide Supreme", category: "Luxury Car" },
  // { src: "/18.jpg", title: "Silver Drive", category: "Luxury Car" },



  // ! Urbenia  16 +1
  { src: "/16+1/u5.jpg", title: "Majestic Moves", category: "16 + 1 Urbania seate" },
  { src: "/16+1/u1.jpg", title: "Glide Supreme", category: "16 + 1 Urbania seate" },
  { src: "/16+1/u7.jpg", title: "Silver Drive", category: "16 + 1 Urbania seate" },
  { src: "/16+1/u4.jpg", title: "Regal Series", category: "16 + 1 Urbania seate" },
  { src: "/16+1/u2.jpg", title: "Silver Drive", category: "16 + 1 Urbania seate" },
  { src: "/16+1/u6.jpg", title: "Silver Drive", category: "16 + 1 Urbania seate" },
  { src: "/16+1/u8.jpg", title: "Silver Drive", category: "16 + 1 Urbania seate" },
  { src: "/16+1/u9.jpg", title: "Silver Drive", category: "16 + 1 Urbania seate" },
  

  // ! Bus 
   { src: "/19.jpg", title: "Supreme Class", category: "Ultra Premium Bus" },
  { src: "/20.jpg", title: "Silken Glide", category: "Ultra Premium Bus" },
  { src: "/21.jpg", title: "Crown Jewel", category: "Ultra Premium Bus" },
  { src: "/22.jpg", title: "Majestic Moves", category: "Ultra Premium Bus" },

// ! seat 
  // { src: "s1.jpg", title: "Pristine Journey", category: "Business Class Seats" },
  // { src: "/s2.jpg", title: "Orchid Class", category: "Business Class Seats" },
  // { src: "/s3.jpg", title: "Executive Collection", category: "Business Class Seats" },
  // { src: "/s4.jpg", title: "Presidential Suite", category: "Business Class Seats" },
  // { src: "/s5.jpg", title: "Grand Touring", category: "Business Class Seats" },
  // { src: "/s6.jpg", title: "Elite Series", category: "Business Class Seats" },
  // { src: "/s7.jpg", title: "Platinum Edition", category: "Business Class Seats" },
  // { src: "/s8.jpg", title: "Royal Fleet", category: "Business Class Seats" },
  // { src: "/s9.jpg", title: "Diamond Class", category: "Business Class Seats" },
  // { src: "/s10.jpg", title: "Signature Series", category: "Business Class Seats" },
  // { src: "s11.jpg", title: "Imperial Ride", category: "Business Class Seats" },
  // { src: "/s12.jpg", title: "Velvet Comfort", category: "Business Class Seats" },
  // { src: "/s13.jpg", title: "Crystal Drive", category: "Business Class Seats" },
  // { src: "/s14.jpg", title: "Noble Class", category: "Business Class Seats" },
  // { src: "/s15.jpg", title: "Urban Explorer", category: "Business Class Seats" },
  // { src: "/s16.jpg", title: "Jet Black Edition", category: "Business Class Seats" },

];


export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  const categories = ["All", "10 + 1 Urbania seate", "16 + 1 Urbania seate",  "Ultra Premium Bus"];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ ...filteredImages[newIndex], index: newIndex });
  };

  return (
    <>
      <section
        id="gallery"
        className="min-h-screen py-20 px-4 sm:px-6 relative overflow-hidden font-['Abril_Fatface']"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/5 to-yellow-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-400/5 to-yellow-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-400/3 to-yellow-600/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Premium Header Section */}
        <div className={`relative z-10 max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-wider mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent font-serif">
                LUXURY
              </span>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mt-8 mb-6 font-light tracking-widest font-['Dancing_Script']">
            COLLECTION
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light font-['Abril_Fatface']">
            Experience unparalleled elegance with our meticulously curated fleet of premium vehicles. 
            Where luxury meets performance, and sophistication defines every journey.
          </p>
        </div>

        {/* Premium Filter Tabs */}
        <div className={`relative z-10 max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 text-sm font-light tracking-wider transition-all duration-500 relative overflow-hidden group
                  ${activeCategory === category 
                    ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30' 
                    : 'text-gray-400 hover:text-amber-300 border border-gray-700 hover:border-amber-400/30'
                  } rounded-none`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{category}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-amber-400/5 to-yellow-400/5 transform transition-transform duration-500 
                  ${activeCategory === category ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} origin-left`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Premium Gallery Grid */}
        <div className={`relative z-10 max-w-7xl mx-auto mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${activeCategory}`}
                className="group relative cursor-pointer transition-all duration-700 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: isVisible ? 'fadeInScale 0.8s ease-out forwards' : 'none'
                }}
                onClick={() => openLightbox(image, index)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <div className="aspect-[4/5] relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="border-l-2 border-amber-400 pl-4">
                      {/* <h3 className="text-white text-lg font-light tracking-wide mb-1">
                        {image.title}
                      </h3> */}
                      <h3 className="text-amber-300  font-light tracking-wider uppercase">
                        {image.category}
                      </h3>
                    </div>
                  </div>

                  {/* Premium Border Effect */}
                  <div className="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/30 transition-colors duration-500"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/0 group-hover:border-amber-400/60 transition-colors duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/0 group-hover:border-amber-400/60 transition-colors duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-light tracking-wide mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-amber-300 text-sm font-light tracking-wider uppercase">
                    {selectedImage.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     
    </>
  );
}