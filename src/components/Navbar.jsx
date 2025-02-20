import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <nav className="relative p-4">
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

      {/* Navigation Menu (Slides in from Right but Slightly Higher) */}
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
=======
    <nav className="bg-gray-900 text-white p-4 relative">
      {/* Hamburger Icon (Visible only on smaller screens) */}
      <div className="lg:hidden flex justify-end ">
        <Hamburger toggled={isOpen} toggle={setOpen}  />
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out p-3 ${
          isOpen ? "block" : "hidden"
        } lg:flex lg:relative lg:w-auto lg:bg-transparent`}
      >
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">
            Events
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">
            Team
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">
            Mentor
          </a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">
            Contact Us
          </a>
        </li>
      </ul>
>>>>>>> f551e9a6c4ccfbc70f6a7794c4d9e8d21cf5e2d8
    </nav>
  );
};

export default Navbar;
