import { motion } from "framer-motion"

const projects = [
  {
    title: "Job Board Application",

    description:
      "A modern React-based job board platform with advanced filtering, sorting, bookmarking, and pagination features for better job searching experience.",

    tech: ["React", "JavaScript", "CSS", "Docker"],

    live: "https://job-board-website-beta.vercel.app/",
  },

  {
    title: "Interactive Kanban Board",

    description:
      "A drag-and-drop task management application that allows users to create, edit, organize, and manage tasks efficiently with smooth interactions.",

    tech: ["React", "JavaScript", "HTML", "CSS"],

    live: "https://kanban-board-lemon-sigma.vercel.app/",
  },
]

function Projects() {
  return (
    <section
  id="projects"
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
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* LIVE DEMO BUTTON */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition duration-300"
              >
                Live Demo
              </a>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects