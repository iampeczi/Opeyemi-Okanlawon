import React, { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

import { MdClose } from "react-icons/md";

import colored from "../assets/portfolio/colored-side.jpg";

const navItems = [
  { name: "Home", href: "#home", id: 1 },
  { name: "About", href: "#about", id: 2 },
  { name: "Expertise", href: "#expertise", id: 3 },
  { name: "Projects", href: "#projects", id: 4 },
  { name: "Contact", href: "#contacts", id: 5 },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  return (
    <nav
      className={`fixed py-8 px-10 w-full max-w-full overflow-hidden h-10 flex items-center border-b border-primary/10 justify-between z-900 bg-background`}
    >
      {/* desktop logo */}
      <div className="hidden lg:grid z-100">
        <a href="#" className="text-secondary font-semibold text-xl momo-signature-regular hover:text-primary transition-colors duration-300">
          Opeyemi Okanlawon
        </a>
        <p className="text-[0.4rem] text-center text-primary">
          A mind, alive with ideas.
        </p>
      </div>
      {/* mobile logo */}
      <div className="lg:hidden z-100 flex flex-col justify-center items-center ">
        <a href="#">  <img
          src={colored}
          alt="header-image"
          className="h-9 w-9  rounded-full border-2 object-cover border-[#5f0c26] cursor-pointer "
        /></a>
         <p className="text-[0.35rem] text-center text-primary">
          A mind, alive with ideas.
        </p>
      
      </div>

      {/* desktop */}
      <div className="flex gap-10 z-100">
        <div className=" hidden md:flex space-x-5 momo-signature-regular">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className="hover:text-secondary transition-colors duration-300 relative group">
              {item.name}
              <span className="absolute top-6.5 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
         
        </div>
        <div className="flex justify-between items-center space-x-2 z-100  ">
          <button onClick={handleMenuToggle} className="md:hidden hover:text-secondary transition-colors duration-300">
            {menu ? <MdClose size={24} /> : <RiMenu2Line size={20} />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="fixed inset-0 bg-background  flex flex-col justify-center items-center lg:hidden">
          <div className="flex flex-col justify-center items-center md:hidden space-y-8 momo-signature-regular">
            {navItems.map((item) => (
              <a
                onClick={() => setMenu(false)}
                key={item.id}
                href={item.href}
                className="text-center hover:text-secondary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
