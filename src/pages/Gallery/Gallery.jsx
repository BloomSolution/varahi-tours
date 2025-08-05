// import React, { useState } from "react";
// // import Lightbox from "react-image-lightbox";
// // import "react-image-lightbox/style.css";

// const images = [
//   "https://picsum.photos/id/1018/1000/600",
//   "https://picsum.photos/id/1015/1000/600",
//   "https://picsum.photos/id/1019/1000/600",
// ];

// const Gallery = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   return (
//     <div className="bg-[#0f0f0f] text-white py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold mb-8 text-center">Our Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Gallery ${index + 1}`}
//               onClick={() => {
//                 setPhotoIndex(index);
//                 setIsOpen(true);
//               }}
//               className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
//             />
//           ))}
//         </div>
//       </div>

//       {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() =>
//             setPhotoIndex((photoIndex + images.length - 1) % images.length)
//           }
//           onMoveNextRequest={() =>
//             setPhotoIndex((photoIndex + 1) % images.length)
//           }
//         />
//       )}
//     </div>
//   );
// };

// export default Gallery;




import React from 'react'
import GalleryBanner from './GalleryBanner '
import GallerySection from './GallerySection'

const Gallery = () => {
  return (
    <div>
      <GalleryBanner/>
      <GallerySection/>
    </div>
  )
}

export default Gallery
