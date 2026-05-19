import { motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden pt-24 relative min-h-screen">

      {/* ANIMATED TOP LEFT GLOW */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full"
      />

      {/* ANIMATED RIGHT GLOW */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] right-0 w-[350px] h-[350px] bg-blue-500/20 blur-3xl rounded-full"
      />

      {/* ANIMATED BOTTOM GLOW */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-[30%] w-[350px] h-[350px] bg-cyan-400/10 blur-3xl rounded-full"
      />

      {/* SMALL FLOATING BALL */}
      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[10%] w-6 h-6 bg-cyan-400 rounded-full blur-sm"
      />

      {/* SMALL FLOATING BALL */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[15%] w-8 h-8 bg-blue-400 rounded-full blur-sm"
      />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App