import { motion } from "motion/react"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleHireMe = () => {
    window.location.href = "mailto:ayushhmanu.works@gmail.com"
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-full bg-red-600 shadow-lg shadow-red-500/50"></div>
            <span className="handwriting text-white text-2xl drop-shadow-lg">ayushhmanu</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <motion.button
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white/90 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
            <motion.button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white/90 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
            <motion.button
              onClick={() =>
                document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white/90 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              Contacts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          </nav>

          <motion.button
            onClick={handleHireMe}
            className="px-6 py-2.5 bg-red-600 text-white rounded-full shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50 hover:bg-red-700 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
