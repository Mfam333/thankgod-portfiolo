import {motion} from "framer-motion"
import { FaLinkedin, FaGithub,  FaWhatsapp } from "react-icons/fa";
import Navbar from "./NavBar"
const Header=()=>{
    return(
         <header
      id="Header"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/fotis-fotopoulos-LJ9KY8pIH3E-unsplash (2).jpg')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Navbar */}
      <Navbar className="relative z-20 w-full" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center px-6 sm:px-12 md:px-20 lg:px-32 text-white flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-500">ThankGod</span>, <br /> Full Stack Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Building seamless experiences from backend to frontend
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="#Project"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="#Contact"
            className="inline-block bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow hover:shadow-lg"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="mt-10 flex space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a href="https://www.linkedin.com/in/thankgod-dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300 text-2xl">
            <FaGithub />
          </a>
           <a href="https://wa.me/2349094420188" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300 text-2xl">
            <FaWhatsapp />
          </a>
        </motion.div>
      </motion.div>
    </header>
    )
}

export default Header
