

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative p-4 lg:hidden">
      {/* Hamburger Menu Button (Hides When Navbar Opens) */}
      {!isOpen && (
        <div className="lg:hidden fixed top-4 right-4 z-[1100] transition-opacity duration-300">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} className="transition-transform duration-300" />
          </button>
        </div>
      )}

      {/* Navigation Menu */}
      <div
        className={`fixed top-10 right-4 w-48 bg-[#918F8F] bg-opacity-80 bg-[url('/path-to-texture.jpg')] bg-cover bg-center shadow-lg p-4 rounded-2xl backdrop-blur-sm transform transition-all duration-500 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 1000 }}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-black">
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-4 space-y-3 font-serif">
          {["About", "Events", "Team", "Mentor", "Contact Us", "Sponsor Us"].map((item) => (
            <li key={item} onClick={() => setIsOpen(false)}>
              <a
                href="#"
                className="block px-6 py-2 text-black hover:text-white rounded-full transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;