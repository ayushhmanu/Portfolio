import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Lightbulb, Film, Palette, Sparkles } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "Understanding your vision, brand, and objectives to create the perfect video strategy.",
    icon: Lightbulb,
    color: "bg-red-600",
  },
  {
    id: 2,
    title: "Pre-Production",
    description:
      "Planning shots, storyboarding, and organizing all the elements needed for success.",
    icon: Film,
    color: "bg-gray-800",
  },
  {
    id: 3,
    title: "Editing Magic",
    description: "Cutting, color grading, and polishing your footage into a compelling story.",
    icon: Palette,
    color: "bg-red-700",
  },
  {
    id: 4,
    title: "Final Delivery",
    description: "Optimized files ready for any platform, with revisions to ensure perfection.",
    icon: Sparkles,
    color: "bg-red-500",
  },
]

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"])

  return (
    <section ref={containerRef} className="relative py-32 bg-white" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full">
          <div className="container mx-auto px-6 mb-12">
            <h2 className="handwriting text-5xl md:text-6xl text-gray-900 mb-4">My Process</h2>
            <p className="text-gray-600 text-lg">From concept to final cut</p>
          </div>

          <motion.div style={{ x }} className="flex px-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-shrink-0 w-screen md:w-[50vw] px-6">
                <motion.div
                  className="relative h-[500px] rounded-3xl overflow-hidden bg-gray-50 p-12 shadow-2xl border border-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div
                    className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-8 shadow-xl`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="absolute top-12 right-12 text-9xl font-bold text-gray-200">
                    {step.id.toString().padStart(2, "0")}
                  </div>

                  <h3 className="handwriting text-5xl text-gray-900 mb-6">{step.title}</h3>

                  <p className="text-gray-600 text-xl leading-relaxed max-w-lg">
                    {step.description}
                  </p>

                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${step.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
