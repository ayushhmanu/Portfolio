import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: "A cinematic journey through visual storytelling",
  },
  {
    id: 2,
    title: "Project 2",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Creative excellence meets technical precision",
  },
  {
    id: 3,
    title: "Project 3",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "Bringing ideas to life through motion",
  },
];

export function LongVideoProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="handwriting text-5xl md:text-6xl text-gray-900 mb-4">
                Long Video Projects
              </h2>
              <p className="text-gray-600 text-lg">Crafted with passion and precision</p>
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

              {/* Video Player */}
              <div className="flex-1 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="aspect-video relative">
                  <AnimatePresence initial={false} mode="wait" custom={direction}>
                    <motion.video
                      key={projects[currentIndex].id}
                      custom={direction}
                      initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="w-full h-full object-cover absolute inset-0"
                      controls
                    >
                      <source src={projects[currentIndex].videoUrl} type="video/mp4" />
                    </motion.video>
                  </AnimatePresence>
                </div>
                
                {/* Project Info Overlay */}
                <motion.div
                  key={projects[currentIndex].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                >
                  <h3 className="handwriting text-white text-3xl mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-gray-300">{projects[currentIndex].description}</p>
                </motion.div>
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

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "w-8 bg-red-600" 
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
