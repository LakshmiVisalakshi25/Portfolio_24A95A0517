import { motion } from "framer-motion"
import resume from "../assets/resume.pdf"
import profile from "../assets/profile.png"
function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 md:px-16"
>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 text-lg mb-4 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Ganisetti <br />

            <span className="text-cyan-400">
              Lakshmi Visalakshi
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6">
            Frontend Developer 
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
            Building responsive and modern web applications
            with React, JavaScript, and creative UI design.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-300 transition duration-300">
              View Projects
            </button>

           <a
  href={resume}
  download
  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
>
  Download Resume
</a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <motion.div
  animate={{
    y: [0, -30, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-3xl opacity-30 absolute"
>
</motion.div>

          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.5)] overflow-hidden">

  <img
    src={profile}
    alt="Profile"
    className="w-full h-full object-cover"
  />

</div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero