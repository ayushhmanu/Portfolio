import { motion } from "motion/react"
import { Film, Lightbulb, Palette, Zap, Heart, Code } from "lucide-react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

const skills = [
  { label: "Video Editing", icon: Film, color: "bg-red-600" },
  { label: "Creative Vision", icon: Lightbulb, color: "bg-red-500" },
  { label: "Color Grading", icon: Palette, color: "bg-gray-800" },
  { label: "Motion Graphics", icon: Zap, color: "bg-red-700" },
  { label: "Storytelling", icon: Heart, color: "bg-red-600" },
  { label: "Technical Skills", icon: Code, color: "bg-gray-900" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="handwriting text-5xl md:text-6xl text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A passionate video editor with 5+ years of experience crafting compelling visual
                stories
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Profile Card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-red-600 flex items-center justify-center shadow-xl">
                    <Film className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="handwriting text-4xl text-center text-gray-900 mb-4">Ayushmanu</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Transforming ideas into captivating visual experiences. Specializing in creative
                    storytelling, color grading, and motion graphics that leave lasting impressions.
                  </p>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${skill.color} flex items-center justify-center mb-3 shadow-lg`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-gray-800">{skill.label}</h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Software */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="handwriting text-3xl text-center text-gray-900 mb-8">
                Tools I Master
              </h3>
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
                    key={index}
                    className="px-6 py-3 bg-red-50 rounded-full text-red-700 shadow-md border border-red-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
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
