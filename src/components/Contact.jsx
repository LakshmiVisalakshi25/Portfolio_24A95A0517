function Contact() {
  return (
    <section
  id="contact"
  className="py-24 px-6 md:px-16"
>

      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-12">
          Feel free to connect with me for collaborations,
          opportunities, or frontend development projects.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* EMAIL */}
          <a
            href="mailto:lakshmivisalakshiganisetti@gmail.com"
            className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition duration-300"
          >
            Email Me
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/LakshmiVisalakshi25"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            GitHub
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/lakshmi-visalakshi-ganisetti-6b91202a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact