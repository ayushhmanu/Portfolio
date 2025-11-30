import { motion } from "motion/react"
import { useState, useEffect, useRef } from "react"
import { Magnetic } from "./ui/magnetic"
import gsap from "gsap"

const BRAND_NAME = "AYUSH MANU"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const phoneNumber = "917067415578"
  const message = encodeURIComponent(
    "Hi Ayush, interested in a video project. Can we have a quick call?"
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      const tl = gsap.timeline()

      tl.to(menuRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 1,
        ease: "power4.inOut",
      })

      tl.from(
        ".mobile-nav-item",
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      )

      document.body.style.overflow = "hidden"
    } else {
      const tl = gsap.timeline()

      tl.to(menuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      })

      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 mix-blend-difference ${
          isScrolled ? "py-4" : "py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 cursor-pointer relative z-101"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="font-display text-xl font-bold tracking-tighter text-white">
              {BRAND_NAME}
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              type="button"
              onClick={() => {
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-red-500 transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              type="button"
              className="text-sm uppercase tracking-widest text-white/70 hover:text-red-500 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-red-500 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <Magnetic>
            <button
              type="button"
              onClick={() => {
                window.open(whatsappUrl, "_blank", "noopener,noreferrer")
              }}
              className="hidden md:block px-6 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Let's Talk
            </button>
          </Magnetic>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden relative z-101 w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`h-0.5 bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "w-8 rotate-45 translate-y-2" : "w-8"
              }`}
            />
            <span
              className={`h-0.5 bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0 translate-x-4" : "w-6 group-hover:w-8"
              }`}
            />
            <span
              className={`h-0.5 bg-white transition-all duration-300 ease-out ${
                isMenuOpen ? "w-8 -rotate-45 -translate-y-2" : "w-4 group-hover:w-8"
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-90 bg-black flex flex-col justify-center px-6 md:hidden"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        <div className="flex flex-col gap-8">
          <nav className="flex flex-col gap-6">
            {["Work", "About", "Contact"].map((item) => (
              <div key={item} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false)
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="mobile-nav-item block text-6xl font-display font-bold text-white tracking-tighter hover:text-red-600 transition-colors text-left"
                >
                  {item}
                </button>
              </div>
            ))}
          </nav>

          <div className="h-px w-full bg-white/10 mobile-nav-item" />

          <div className="mobile-nav-item">
            <button
              type="button"
              onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
              className="w-full py-4 bg-white text-black rounded-full text-lg font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          <div className="flex gap-6 mt-4">
            {[
              { name: "Instagram", url: "https://www.instagram.com/ayushhmanu/" },
              { name: "YouTube", url: "https://www.youtube.com/@ayushhmanu" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/ayushhmanu/" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-item text-white/50 hover:text-white text-sm uppercase tracking-widest"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
