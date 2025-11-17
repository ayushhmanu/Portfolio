import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoWidth = useTransform(scrollYProgress, [0, 0.3], ["97%", "100%"]);
  const videoBorderRadius = useTransform(scrollYProgress, [0, 0.3], ["24px", "0px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      {/* Video Container */}
      <motion.div
        className="relative h-full mx-auto overflow-hidden"
        style={{
          width: videoWidth,
          borderRadius: videoBorderRadius,
        }}
        initial={{ width: "97%", borderRadius: "24px" }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-tv-camera-in-a-professional-studio-14256-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </motion.div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Hero Content - Centered on video */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{ opacity: textOpacity, y: textY }}
      >
        <div className="text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="handwriting text-7xl md:text-9xl lg:text-[10rem] mb-8">
              <span className="block text-white drop-shadow-2xl mb-2">Not Just a</span>
              <span className="block text-red-500 drop-shadow-2xl">
                Video Editor
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-white/90 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Crafting cinematic stories that captivate audiences and elevate brands through 
            <span className="text-red-400"> cutting-edge editing</span>, 
            <span className="text-white"> color grading</span>, and 
            <span className="text-red-300"> motion design</span>
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 0.5 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-white/70 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
