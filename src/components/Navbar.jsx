import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 relative">
      {/* Hamburger Icon (Visible only on smaller screens) */}
      <div className="lg:hidden flex justify-end">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } lg:flex lg:relative lg:w-auto lg:bg-transparent`}
      >
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">Home</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">About</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">Services</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
