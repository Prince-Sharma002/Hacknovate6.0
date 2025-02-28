import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Use navigate instead of Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // React Router navigation hook

  const handleNavigation = (path) => {
    console.log("Navigating to:", path); // Debugging
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="relative p-4 lg:hidden">
      {/* Hamburger Menu Button */}
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
        className={`fixed top-10 right-4 w-48 bg-[#918F8F] bg-opacity-80 shadow-lg p-4 rounded-2xl backdrop-blur-sm transform transition-all duration-500 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
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
          {[
            { name: "About", path: "/" },
            { name: "Events", path: "/events" },
            { name: "Team", path: "/team" },
            { name: "Code of Conduct", path: "/Code of Conduct" },
            { name: "Contact Us", path: "/contact" },
            { name: "Sponsor Us", path: "/sponsor" },
          ].map((item) => (
            <li key={item.name} onClick={() => handleNavigation(item.path)}>
              <button className="block px-6 py-2 text-black hover:text-white rounded-full transition-all duration-300">
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
