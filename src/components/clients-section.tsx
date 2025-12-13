import { useEffect, useRef, useState, useMemo } from "react"
import { motion } from "motion/react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import { talentProfiles, companyLogos } from "../content/portfolio"

const activeProfiles = talentProfiles; // Used in component logic


const MarqueeRow = ({
  logos,
  reverse = false,
}: {
  logos: typeof companyLogos
  reverse?: boolean
}) => (
  <div className="flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div
      className={`flex min-w-full shrink-0 gap-6 md:gap-12 py-2 pr-6 md:pr-12 items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {logos.map((company, i) => (
        <div
          key={`${company.name}-${i}`}
          className="flex items-center justify-center min-w-20 md:min-w-[100px]"
        >
          {company.bg === "white" ? (
            <span className="px-2 py-0.5 bg-white text-black font-bold rounded text-[10px] md:text-xs">
              {company.name}
            </span>
          ) : (
            <span className="text-xs md:text-sm font-bold text-white/40 hover:text-white transition-colors duration-300">
              {company.name}
            </span>
          )}
        </div>
      ))}
    </div>
    <div
      className={`flex min-w-full shrink-0 gap-6 md:gap-12 py-2 pr-6 md:pr-12 items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {logos.map((company, i) => (
        <div
          key={`${company.name}-${i}-duplicate`}
          className="flex items-center justify-center min-w-20 md:min-w-[100px]"
        >
          {company.bg === "white" ? (
            <span className="px-2 py-0.5 bg-white text-black font-bold rounded text-[10px] md:text-xs">
              {company.name}
            </span>
          ) : (
            <span className="text-xs md:text-sm font-bold text-white/40 hover:text-white transition-colors duration-300">
              {company.name}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
)

export function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const activeProfiles = useMemo(
    () => (isMobile ? [...talentProfiles, ...talentProfiles] : talentProfiles),
    [isMobile]
  )

  useEffect(() => {
    if (!activeProfiles.length) return

    const ctx = gsap.context(() => {
      // Rotate the wheel
      gsap.to(".ferris-wheel__rotor", {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none",
      })

      // Counter-rotate the avatars to keep them upright
      // We animate relative to their initial rotation
      const shells = gsap.utils.toArray(".ferris-wheel__avatar-shell") as HTMLElement[]
      shells.forEach((shell) => {
        const initialRotation = gsap.getProperty(shell, "rotation") as number
        gsap.to(shell, {
          rotation: initialRotation - 360,
          duration: 120,
          repeat: -1,
          ease: "none",
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [activeProfiles])

  const wheelSize = isMobile ? "340dvw" : "110dvw"
  const avatarSize = isMobile ? 60 : 100

  const wheelStyle = {
    "--wheel-size": wheelSize,
    "--wheel-radius": "calc((var(--wheel-size) / 2))",
    width: wheelSize,
    height: wheelSize,
  } as React.CSSProperties

  return (
    <section
      ref={containerRef}
      className="relative z-30 overflow-hidden py-20 md:py-32 text-white bg-[#000000] min-h-screen flex flex-col justify-center items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#020202]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Ferris wheel arc - Positioned absolutely to act as background arch */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[11%] md:-translate-y-[14%] w-full flex justify-center pointer-events-none z-20">
        <div className="ferris-wheel relative rounded-full" style={wheelStyle}>
          <div className="ferris-wheel__rotor absolute inset-0" style={{ animation: "none" }}>
            {activeProfiles.map((profile, index) => {
              const angle = (index / activeProfiles.length) * 360

              return (
                <div
                  key={`${profile.name}-${index}`}
                  className="ferris-wheel__orbit absolute top-1/2 left-1/2 w-0 h-0"
                  style={{
                    transform: `rotate(${angle}deg) translateY(calc(-1 * var(--wheel-radius)))`,
                  }}
                >
                  <div
                    className="ferris-wheel__avatar-shell absolute top-1/2 left-1/2"
                    style={{
                      animation: "none",
                      width: `${avatarSize}px`,
                      height: `${avatarSize}px`,
                      marginLeft: `-${avatarSize / 2}px`,
                      marginTop: `-${avatarSize}px`, // Bottom aligned with the arc
                      transform: `rotate(-${angle}deg)`, // Initial counter-rotation
                    }}
                  >
                    <div className="ferris-wheel__avatar w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-[#111] ring-2 ring-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.3)] pointer-events-auto">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 md:px-6 gap-10 md:gap-16 w-full">
        {/* Heading + logo card block */}
        <ScrollAnimationWrapper>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex w-full flex-col items-center gap-6 mt-20 md:mt-32"
          >
            {/* Heading in the middle */}
            <div className="text-center">
              <h2 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl leading-tight text-white">
                TRUSTED BY <span className="text-red-600">VISIONARIES</span>
              </h2>
            </div>

            {/* Logo card */}
            <div className="w-full max-w-5xl">
              <div className="mx-auto rounded-3xl md:rounded-4xl bg-[#050505]/80 px-0 py-1 shadow-2xl border border-white/5 backdrop-blur-md flex flex-col gap-1">
                <MarqueeRow logos={companyLogos} />
                <MarqueeRow logos={[...companyLogos].reverse()} reverse />
                <MarqueeRow logos={companyLogos} />
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
