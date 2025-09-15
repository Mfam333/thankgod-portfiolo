import { useEffect, useState } from "react";
import { asset } from "../assets/asset";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#Header");

  const navLinks = [
    { name: "Home", href: "#Header" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Project" },
    { name: "Contact", href: "#Contact" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  // Detect scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      // Scroll spy logic
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (!section) continue;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-20 lg:px-32">
        {/* Logo */}
        <div className="text-white md:text-gray-800 font-bold border-b-4 border-blue-500 rounded-l-full px-3 py-1 text-lg sm:text-xl">
          DEV_THanKGoD
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white md:text-gray-800 font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className={`transition-colors duration-300 ${
                  activeSection === link.href
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-blue-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <img src={asset.menu_icon} alt="Menu" className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                className="focus:outline-none"
                onClick={() => setShowMobileMenu(false)}
                aria-label="Close menu"
              >
                <img src={asset.cross_icon} alt="Close" className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col items-center gap-6 mt-10 text-xl font-medium">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                      activeSection === link.href
                        ? "bg-blue-100 text-blue-500"
                        : "hover:bg-blue-100 hover:text-blue-500"
                    }`}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
