import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { motion } from "motion/react"

const shorts = [
  {
    id: 1,
    title: "Short 1",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 2,
    title: "Short 2",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: 3,
    title: "Short 3",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: 4,
    title: "Short 4",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  },
  {
    id: 5,
    title: "Short 5",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
]

export function ShortsVideoProjects() {
  return (
    <section className="relative py-32 bg-[#020202] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-4">Social Content</p>
              <h2 className="handwriting text-6xl md:text-7xl text-white">Shorts & Reels</h2>
            </div>
            <p className="text-white/60 text-lg max-w-md text-right md:text-left">
              High-impact vertical content designed to stop the scroll and engage audiences
              instantly.
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative -mx-6 px-6 overflow-x-auto pb-12 hide-scrollbar">
            <div className="flex gap-8 w-max">
              {shorts.map((short, index) => (
                <motion.div
                  key={short.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group w-[300px] md:w-[360px] aspect-9/16 rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl ring-1 ring-white/10"
                >
                  <video
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    controls
                    preload="metadata"
                  >
                    <source src={short.videoUrl} type="video/mp4" />
                    <track kind="captions" />
                  </video>

                  <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-black/80 opacity-60" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                    <h3 className="text-xl font-bold text-white mb-1">{short.title}</h3>
                    <p className="text-red-400 text-xs uppercase tracking-widest">Watch Reel</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
