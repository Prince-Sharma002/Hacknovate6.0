import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react"; // Importing Hamburger React component

const Navbar = () => {
  const [isOpen, setOpen] = useState(false); // State to track menu open/close

  return (
    <nav className="bg-gray-900 text-white p-4">
      {/* Hamburger Icon */}
      <div className="max-lg:flex hidden justify-end">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Navigation Links (shown when isOpen is true) */}
      <ul
        className={`max-lg:flex flex-col items-center gap-4 mt-4 ${
          isOpen ? "flex" : "hidden"
        } lg:flex lg:flex-row`}
      >
        <li>
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
