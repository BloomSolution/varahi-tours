// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "" },
//     { name: "Services", path: "" },
//     { name: "Contact", path: "" },
//   ];

//   return (
//     <header className="bg-white shadow-md fixed w-full z-50 top-0">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           Varahi Travels
//         </Link>

//         {/* Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
//             ☰
//           </button>
//         </div>

//         {/* Nav Links */}
//         <nav
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex gap-6 items-center`}
//         >
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `block py-2 px-3 rounded hover:text-blue-600 ${
//                   isActive ? "text-blue-600 font-semibold" : "text-gray-700"
//                 }`
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     {name: "Gallery", path:"/gallery" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className=" bg-gradient-to-br from-black via-[#c40707] to-black bg-blue-300/10 backdrop-blur-sm fixed w-full z-50 top-0">
//       <div className="container mx-auto px-4  flex justify-between items-center">
//         <div className="w-40 h-20 flex justify-center items-center">
//           <img src="logo2.png" alt="" className="h-40 w-40" />
//         </div>

//         {/* Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white text-2xl"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Nav Links */}
//         <nav
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex gap-6 items-center bg-[#a1141e] md:bg-transparent absolute md:static left-0 w-full md:w-auto top-16 md:top-0 px-4 md:px-0 py-4 md:py-0`}
//         >
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `block py-2 px-4 rounded-md  hover:bg-white hover:text-red-500 transition ${
//                   isActive ? "bg-white text-[#a1141e] font-semibold" : "text-yellow-500"
//                 }`
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-black via-[#8B0000] to-black fixed w-full z-50 top-0 shadow-lg font-['Poppins']">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        {/* <div className="w-40 h-full flex justify-center items-center">
          <img src="logo2.png" alt="Logo" className="h-full object-contain" />
        </div> */}
        <div className="w-40 h-20 flex justify-center items-center">
         <img src="logo2.png" alt="" className="h-40 w-40" />
         </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex gap-6 items-center bg-black md:bg-transparent absolute md:static left-0 w-full md:w-auto top-20 md:top-0 px-4 md:px-0 py-4 md:py-0 transition-all duration-300`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md text-yellow-400 hover:text-black hover:bg-yellow-400 transition font-medium tracking-wide ${
                  isActive ? "bg-white text-black font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
