import { motion } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub,FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();

  const navLinks = [
    { name: "Home", href: "#Header" },
    { name: "About Me", href: "#About" },
    { name: "Projects", href: "#Project" },
    { name: "Contact", href: "#Contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/thankgod-dev", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaWhatsapp />, href: "https://wa.me/2349094420188", label: "WhatSapp" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      id="Footer"
      className="pt-12 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        {/* Logo & Description */}
        <motion.div
          className="w-full md:w-1/3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="border-b-4 border-blue-500 rounded-l-full text-gray-300 text-xl font-semibold">
            DEV_THanKGoD
          </span>
          <p className="text-gray-400 mt-4 leading-relaxed max-w-sm">
            Full stack developer passionate about creating efficient and user-friendly applications.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-blue-500 text-2xl transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="w-full md:w-1/4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-blue-500 transition-colors duration-300 flex items-center gap-2"
                >
                  {link.name}
                  {link.name === "Home" && <ArrowUp size={18} />}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="w-full md:w-1/4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
          <ul className="text-gray-400 space-y-3">
            <li className="break-words">mfamthankgod70@gmail.com</li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-blue-500" />
              +234-8069107279
            </li>
          </ul>

          {/* Back-to-Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
          >
            <ArrowUp size={18} /> Back to Top
          </motion.button>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="border-t border-gray-700 py-6 mt-12 text-center text-gray-500 text-sm"
        variants={fadeUp}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        &copy; {thisYear}{" "}
        <span className="border-b-4 border-blue-500 rounded-l-full px-1">
          DEV_THanKGoD
        </span>
        . All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;

