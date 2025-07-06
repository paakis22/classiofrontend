// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import log from '../assets/log.png'; 



const Navbar = () => {
  return (
    <div className=" bg-[#E99858]   font-sans"> 

      {/* Navbar */}
      <nav className="{bg-#8B786D} py-3 px-6 md:px-12 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          {/* If you have a logo image: */}
          <img src={log} alt="Clasio Logo" className="h-15 w-auto mr-4" />
          {/* <span className="text-xl font-bold text-blue-800">C<span className="text-gray-700">lasio</span></span> */}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium ">
          <Link to="/" className="text-blue-900 transition duration-300">Home</Link>
          <Link to="/service" className="text-blue-900 transition duration-300">service</Link>
          <Link to="/contact" className="text-blue-900 transition duration-300">contact</Link>
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="px-6 py-2 bg-[#053F5C]  text-white rounded-md hover:bg-[#0e0b2a] transition duration-300 shadow-md">
            login
          </button>
        </Link>
      </nav> 
     </div>
    ) ;
    }

export default Navbar;



 


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BookOpen, ArrowRight, Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [showRegisterOptions, setShowRegisterOptions] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <nav className="bg-[#E99858] shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center text-white text-2xl font-bold gap-2">
//           <BookOpen size={28} />
//           Clasio
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6 text-white font-medium">
//           <Link to="/">Home</Link>
//           <Link to="/courses">Courses</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/login">Login</Link>
           
//         </div>

//         {/* Mobile Menu Toggle */}
//          <button
//           className="md:hidden text-white"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div> 

//       {/* Mobile Menu Items */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-[#E99858] px-6 pb-4 text-white">
//           <div className="flex flex-col gap-4">
//             <Link to="/">Home</Link>
//             <Link to="/courses">Courses</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="/login">Login</Link>
//             <button
//               onClick={() => setShowRegisterOptions(!showRegisterOptions)}
//               className="bg-[#053F5C] px-4 py-2 rounded-full mt-2 w-fit"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
