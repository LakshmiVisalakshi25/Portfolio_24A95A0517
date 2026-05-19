import { motion } from "framer-motion"

const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Bootstrap",
  "Python",
  "Java",
  "C++",
  "SQL",
  "Git",
  "GitHub",
  "Docker",
]

function Skills() {
  return (
    <section
  id="skills"
  className="py-24 px-6 md:px-16"
>

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
         viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-xl font-semibold text-gray-200">
                {skill}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills