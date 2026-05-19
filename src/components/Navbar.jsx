import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-lg border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Lakshmi Visalakshi
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-cyan-400 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-black border-t border-gray-800">

          <ul className="flex flex-col items-center gap-8 py-8 text-gray-300 font-medium">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      )}

    </nav>
  )
}

export default Navbar