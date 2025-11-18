import type { CSSProperties } from "react"
import { motion } from "motion/react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

type TalentProfile = {
  name: string
  title: string
  image: string
}

const talentProfiles: TalentProfile[] = [
  {
    name: "Karan Sharma",
    title: "Cinematic Strategist",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b74?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
  {
    name: "Ritika Bansal",
    title: "Product Filmmaker",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
  {
    name: "Ash Ray",
    title: "Director of Story",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
  {
    name: "Monica Chugh",
    title: "Agency Lead",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
  {
    name: "Dev Patel",
    title: "Creative Technologist",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
  {
    name: "Ananya Rao",
    title: "Brand Producer",
    image:
      "https://images.unsplash.com/photo-1544723795-432537f4b55f?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
  {
    name: "Rohit Bakshi",
    title: "Campaign Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
  {
    name: "Saloni Kaur",
    title: "Content Architect",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
  {
    name: "Prathmesh Iyengar",
    title: "Lead Editor",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=facearea&facepad=3&q=80&auto=format",
  },
]

// Company logos to display in the grid
const companyLogos = [
  { name: "Google", color: "multicolor", hasIcon: true },
  { name: "Swish", color: "white", hasIcon: true },
  { name: "Unacademy", color: "white", hasIcon: true },
  { name: "Vedantu", color: "white", hasIcon: false },
  { name: "AD.KO", color: "white", hasIcon: false, bg: "white" },
  { name: "IIT", color: "white", hasIcon: false },
  { name: "Google", color: "multicolor", hasIcon: true },
  { name: "Vedantu", color: "white", hasIcon: false },
  { name: "AD.KO", color: "white", hasIcon: false, bg: "white" },
  { name: "Koo", color: "white", hasIcon: true },
  { name: "Growth School", color: "teal", hasIcon: true },
  { name: "Unacademy", color: "white", hasIcon: true },
  { name: "Swish", color: "green", hasIcon: false },
  { name: "AD.KO", color: "white", hasIcon: false, bg: "white" },
  { name: "Swish", color: "white", hasIcon: true },
  { name: "100x Engineers", color: "orange", hasIcon: false, bg: "white" },
]

export function ClientsSection() {
  const wheelStyle = {
    "--wheel-size": "80vw",
    "--wheel-radius": "calc((var(--wheel-size) / 2) - 70px)",
    "--wheel-duration": "36s",
  } as CSSProperties

  return (
    <section className="relative overflow-hidden py-28 text-white">
      {/* Deep blue strip background */}
      <div className="absolute inset-0 bg-[#021b4a]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 md:px-6 gap-10">
        {/* Ferris wheel arc on top */}
        <div className="relative flex w-full justify-center pt-6">
          <div className="ferris-wheel ferris-wheel--arc" style={wheelStyle}>
            <div className="ferris-wheel__rotor">
              {talentProfiles.map((profile, index) => {
                const angle = (index / talentProfiles.length) * 360

                return (
                  <div
                    key={profile.name}
                    className="ferris-wheel__orbit"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * var(--wheel-radius)))`,
                    }}
                  >
                    <div
                      className="ferris-wheel__avatar-shell"
                      style={{ transform: `rotate(${-angle}deg)` }}
                    >
                      <div className="ferris-wheel__avatar ferris-wheel__avatar--counter">
                        <img
                          src={profile.image}
                          alt={profile.name}
                          loading="lazy"
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Heading + logo card block */}
        <ScrollAnimationWrapper>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex w-full flex-col items-center gap-6 -mt-6"
          >
            {/* Heading in the middle */}
            <h2
              className="text-center text-3xl font-semibold md:text-4xl lg:text-[2.7rem] leading-tight"
              style={{ color: "#d4ff00" }}
            >
              Look who&apos;s hiring from us
            </h2>

            {/* Logo card */}
            <div className="w-full max-w-5xl">
              <div className="mx-auto rounded-3xl bg-[#071939]/95 px-10 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.65)] border border-white/8">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-6 items-center justify-items-center">
                  {companyLogos.map((company) => (
                    <div
                      key={company.name}
                      className={`flex h-12 min-w-[110px] items-center justify-center rounded-xl px-4 ${
                        company.bg === "white" ? "bg-white" : "bg-transparent"
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          company.bg === "white" || company.color === "multicolor"
                            ? "text-gray-900"
                            : company.color === "orange"
                              ? "text-orange-400"
                              : company.color === "green"
                                ? "text-emerald-400"
                                : company.color === "teal"
                                  ? "text-teal-300"
                                  : "text-white"
                        }`}
                      >
                        {company.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
