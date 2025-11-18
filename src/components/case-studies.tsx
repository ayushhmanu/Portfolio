import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"
import { motion, AnimatePresence } from "motion/react"

const caseStudies = [
  {
    id: 1,
    title: "Case Study 1",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    client: "Volkswagen",
    category: "Automotive",
  },
  {
    id: 2,
    title: "Case Study 2",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    client: "Adventure Co.",
    category: "Travel",
  },
  {
    id: 3,
    title: "Case Study 3",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    client: "Auto Guide",
    category: "Review",
  },
]

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="handwriting text-5xl md:text-6xl bg-gradient-to-r from-red-500 via-red-700 to-black bg-clip-text text-transparent mb-4">
                Case Studies
              </h2>
              <p className="text-gray-600 text-lg">Deep dives into successful projects</p>
            </div>

            {/* Carousel */}
            <div className="relative flex items-center gap-6">
              {/* Left Arrow */}
              <motion.button
                onClick={handlePrev}
                className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all z-10"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-7 h-7" />
              </motion.button>

              {/* Video Player */}
              <div className="flex-1 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="aspect-video relative">
                  <AnimatePresence initial={false} mode="wait" custom={direction}>
                    <motion.video
                      key={caseStudies[currentIndex].id}
                      custom={direction}
                      initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="w-full h-full object-cover absolute inset-0"
                      controls
                    >
                      <source src={caseStudies[currentIndex].videoUrl} type="video/mp4" />
                    </motion.video>
                  </AnimatePresence>
                </div>

                {/* Case Study Info */}
                <motion.div
                  key={caseStudies[currentIndex].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                      {caseStudies[currentIndex].category}
                    </span>
                    <span className="text-gray-300 text-sm">
                      {caseStudies[currentIndex].client}
                    </span>
                  </div>
                  <h3 className="handwriting text-white text-3xl">
                    {caseStudies[currentIndex].title}
                  </h3>
                </motion.div>
              </div>

              {/* Right Arrow */}
              <motion.button
                onClick={handleNext}
                className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all z-10"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-7 h-7" />
              </motion.button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-red-500 via-red-700 to-black"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
