import {motion} from "framer-motion"
import { asset } from "../assets/asset"
const About=()=>{
    return(
       <motion.section
  id="About"
  initial={{ opacity: 0, x: -200 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="bg-bbb flex flex-col items-center justify-center w-full overflow-hidden py-16 px-6 md:px-16 lg:px-32"
>
  {/* Section Header */}
  <div className="text-center mb-10">
    <h1 className="text-3xl sm:text-5xl font-bold mb-2">
      About{" "}
      <span className="underline underline-offset-4 decoration-2 font-light">
        Me
      </span>
    </h1>
    <p className="text-gray-500 max-w-2xl mx-auto text-lg sm:text-xl">
      I'm a MERN stack developer crafting full-stack applications. My expertise spans building responsive React interfaces powered by robust Node.js/Express backends and MongoDB databases.
    </p>
  </div>

  {/* Main Content */}
  <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 w-full max-w-6xl">
    {/* Profile Image */}
    <img
      src={asset.About_img}
      alt="E-commerce app built with MERN stack"
      className="w-full sm:w-1/2 max-w-lg rounded-xl shadow-lg"
    />

    {/* Skills & Description */}
    <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600 w-full">
      
      {/* Skills with Animated Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Frontend Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frontend Skills</h2>
          {[
            { skill: "React.js", level: 90 },
            { skill: "Tailwind CSS", level: 85 },
            { skill: "HTML5 & CSS3", level: 95 },
            { skill: "Zustand", level: 80 },
            { skill: "React Router", level: 85 },
            { skill: "Axios", level: 90 },
            { skill: "daisyUI", level: 75 },
          ].map(({ skill, level }, i) => (
            <div key={i} className="mb-3">
              <p className="text-gray-800 font-medium">{skill}</p>
              <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                  className="h-3 bg-blue-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Backend Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Backend Skills</h2>
          {[
            { skill: "Node.js", level: 90 },
            { skill: "Express.js", level: 85 },
            { skill: "REST APIs", level: 95 },
            { skill: "Socket.io", level: 80 },
            { skill: "Django", level: 75 },
          ].map(({ skill, level }, i) => (
            <div key={i} className="mb-3">
              <p className="text-gray-800 font-medium">{skill}</p>
              <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                  className="h-3 bg-green-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="my-8 max-w-lg text-lg sm:text-xl mb-3">
        I have developed several production-ready applications, including:
        </p>
        <ol className="list-decimal list-inside mt-1 space-y-1">
          <li>E-commerce web application with authentication, product listing, admin dashboard, and Stripe checkout</li>
          <li>Real-time chat application</li>
          <li>Estate listing website</li>
          <li>Advance Authentication system</li>
        </ol>
      

      {/* CTA Button */}
      <a href="#Project">
        <button className=" mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium transition-colors duration-300">
          View Projects
        </button>
      </a>
    </div>
  </div>
</motion.section>
       
    )
}

export default About



