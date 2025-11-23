import { motion } from "motion/react"
import { Film, Lightbulb, Palette, Zap, Heart, Code } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

const skills = [
  { label: "Video Editing", icon: Film, color: "bg-red-600" },
  { label: "Creative Vision", icon: Lightbulb, color: "bg-red-500" },
  { label: "Color Grading", icon: Palette, color: "bg-neutral-800" },
  { label: "Motion Graphics", icon: Zap, color: "bg-red-700" },
  { label: "Storytelling", icon: Heart, color: "bg-red-600" },
  { label: "Technical Skills", icon: Code, color: "bg-neutral-900" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-[#020202] text-white">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-20">
              <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-4">The Creator</p>
              <h2 className="handwriting text-6xl md:text-8xl text-white mb-6">About Me</h2>
              <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
                Ayush Manu is a self-taught video editor and filmmaker based in India, blending
                documentary instincts with commercial polish so every cut feels intimate and human.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Profile Card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-neutral-900/50 rounded-[2.5rem] p-10 shadow-2xl border border-white/5 backdrop-blur-sm">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.4)]">
                    <Film className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="handwriting text-5xl text-center text-white mb-6">Ayush Manu</h3>
                  <p className="text-white/70 text-center text-lg leading-relaxed">
                    I partner with founders, artists, and agencies to shape campaigns that feel like
                    lived moments—grounded in story, polished with thoughtful color, and paced for
                    modern platforms.
                  </p>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className="bg-neutral-900/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-white/5 hover:border-red-500/30 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${skill.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-medium text-lg">{skill.label}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Software */}
            <div className="bg-neutral-900/30 rounded-[2.5rem] p-12 shadow-xl border border-white/5">
              <h3 className="handwriting text-4xl text-center text-white mb-10">Tools I Master</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Adobe Premiere Pro",
                  "After Effects",
                  "DaVinci Resolve",
                  "Final Cut Pro",
                  "Photoshop",
                  "Illustrator",
                ].map((tool, index) => (
                  <motion.div
                    key={tool}
                    className="px-8 py-4 bg-white/5 rounded-full text-white/90 shadow-lg border border-white/10 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
