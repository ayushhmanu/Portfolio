import { motion } from "motion/react"
import { Magnetic } from "./ui/magnetic"
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { longFormProjects, shortFormProjects } from "../content/portfolio"

gsap.registerPlugin(ScrollTrigger)

// Helper function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/, // Just the ID
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export function LongVideoProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shortCardsRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Mobile Animation - Full screen cards sliding over each other
        "(max-width: 767px)": () => {
          shortCardsRef.current.forEach((card, index) => {
            if (!card) return
            const nextCard = shortCardsRef.current[index + 1]

            if (nextCard) {
              gsap.to(card, {
                scale: 0.85,
                opacity: 0.3,
                ease: "none",
                scrollTrigger: {
                  trigger: nextCard,
                  start: "top bottom",
                  end: "top top",
                  scrub: 0.5,
                },
              })
            }
          })
        },
        // Desktop - No animation
        "(min-width: 768px)": () => {
          shortCardsRef.current.forEach((card) => {
            if (card) gsap.set(card, { clearProps: "all" })
          })
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="work" className="pt-0 pb-32 bg-black text-white relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Long Form Section */}
        <div className="mb-20 pt-20">
          <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            LONG FORM
            <br />
            <span className="text-red-600">STORIES</span>
          </h2>
          <div className="h-1 w-20 bg-red-600"></div>
        </div>

        <div className="flex flex-col gap-32 mb-40">
          {longFormProjects.map((project, index) => {
            const videoId = getYouTubeVideoId(project.videoUrl)
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
              >
                {/* Video Embed */}
                <div className="w-full md:w-3/5 relative group">
                  <div className="relative overflow-hidden aspect-video bg-neutral-900 border border-white/10">
                    {videoId ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/50">
                        Invalid video URL
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-px w-10 bg-red-600"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-red-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-lg leading-relaxed mb-8">{project.description}</p>


                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Short Form Section */}
        <div className="mb-10 md:mb-20">
          <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-right">
            SHORT FORM
            <br />
            <span className="text-red-600">CONTENT</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 ml-auto"></div>
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-8">
          {shortFormProjects.map((project, index) => {
            const videoId = getYouTubeVideoId(project.videoUrl)
            return (
              <div
                key={project.id}
                ref={(el) => {
                  shortCardsRef.current[index] = el
                }}
                className="sticky top-0 md:static h-dvh md:h-auto flex items-center justify-center md:block"
              >
                <div className="relative overflow-hidden w-full h-full md:aspect-9/16 bg-neutral-900 md:border md:border-white/10 md:shadow-2xl">
                  {videoId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&loop=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50">
                      Invalid video URL
                    </div>
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-6 pointer-events-none">
                    <div className="flex items-center justify-between mb-3 md:mb-2">
                      <span className="text-sm md:text-xs font-bold tracking-widest uppercase text-red-500">
                        {project.category}
                      </span>
                      <span className="text-sm md:text-xs font-mono text-white/60 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Views"
                        >
                          <title>Views</title>
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        {project.views}
                      </span>
                    </div>
                    <h3 className="font-display text-4xl md:text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
