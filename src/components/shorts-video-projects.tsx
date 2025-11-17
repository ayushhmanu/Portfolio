import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
  const [startIndex, setStartIndex] = useState(0)

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? shorts.length - 3 : prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev >= shorts.length - 3 ? 0 : prev + 1))
  }

  const visibleShorts = shorts.slice(startIndex, startIndex + 3)

  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="handwriting text-5xl md:text-6xl text-gray-900 mb-4">
                Short Form Content
              </h2>
              <p className="text-gray-600 text-lg">Quick, impactful, memorable</p>
            </div>

            {/* Carousel */}
            <div className="relative flex items-center gap-6">
              {/* Left Arrow */}
              <motion.button
                onClick={handlePrev}
                className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all z-10 border border-gray-100"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-7 h-7" />
              </motion.button>

              {/* Video Players Grid */}
              <div className="flex-1 grid grid-cols-3 gap-6">
                {visibleShorts.map((short, index) => (
                  <motion.div
                    key={short.id}
                    className="aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                  >
                    <video className="w-full h-full object-cover" controls>
                      <source src={short.videoUrl} type="video/mp4" />
                    </video>
                  </motion.div>
                ))}
              </div>

              {/* Right Arrow */}
              <motion.button
                onClick={handleNext}
                className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all z-10 border border-gray-100"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-7 h-7" />
              </motion.button>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
