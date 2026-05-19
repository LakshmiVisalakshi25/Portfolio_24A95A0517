import { motion } from "framer-motion"

function About() {
  return (
    <section
  id="about"
  className="py-24 px-6 md:px-16"
>
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
         <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="flex justify-center items-center"
>

  <div className="relative w-[320px] h-[320px] flex items-center justify-center">

    {/* OUTER RING */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/30"
    />

    {/* MIDDLE RING */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[250px] h-[250px] rounded-full border border-blue-400/30"
    />

    {/* INNER GLOW */}
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-xl opacity-70"
    />

    {/* CENTER TEXT */}
    <div className="absolute text-center">
      <h2 className="text-3xl font-bold text-cyan-400">
        Software
      </h2>

      <p className="text-gray-300 mt-2">
        Engineer
      </p>
    </div>

  </div>

</motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-semibold mb-6 text-cyan-400">
              Frontend Developer
            </h3>

           <p className="text-gray-400 leading-8 text-lg mb-6">
  I am currently pursuing B.Tech in Computer Science and Engineering at Aditya Engineering College. I completed my diploma in Communication and Computer Networking with strong academic performance and developed a strong interest in software development and modern web technologies.
</p>

<p className="text-gray-400 leading-8 text-lg mb-6">
  I enjoy building responsive and interactive web applications using React and JavaScript. I am continuously improving my skills in frontend development, full stack technologies, and problem solving through hands-on projects and practical learning.
</p>

<p className="text-gray-400 leading-8 text-lg">
  My goal is to become a skilled Software Engineer by gaining real-world development experience, building impactful applications, and continuously learning modern technologies.
</p>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About