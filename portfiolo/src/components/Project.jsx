

import { projectsData } from "../assets/asset";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on scroll position
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.firstChild.offsetWidth + 16; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="Project"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="overflow-hidden py-12 bg-gray-50 relative"
    >
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">
          Projects{" "}
          <span className="underline underline-offset-4 decoration-2 font-light">
            Completed
          </span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg sm:text-xl">
          Crafting full-stack applications, building seamless experiences from
          backend to frontend.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative px-4">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 z-10"
        >
          &#8592;
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide scroll-smooth"
        >
          {projectsData.map((project, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 sm:w-80 md:w-64 lg:w-72 snap-center group relative rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              
                <div className="bg-white rounded-lg p-4 w-full">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded text-sm sm:text-base font-medium transition-colors"
                      >
                        {/* GitHub icon */}
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12..."/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.livedom&& (
                      <a
                        href={project.livedom}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm sm:text-base font-medium transition-colors"
                      >
                        {/* External link icon */}
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14 3v2h3.59L12 10.59..."/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 z-10"
        >
          &#8594;
        </button>

        {/* Swipe Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {projectsData.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-blue-600 w-4 h-4" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}




