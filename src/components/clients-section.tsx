import { motion } from "motion/react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

const clients = [
  { name: "Google", logo: "G" },
  { name: "Netflix", logo: "N" },
  { name: "Apple", logo: "A" },
  { name: "Amazon", logo: "Az" },
  { name: "Microsoft", logo: "M" },
  { name: "Meta", logo: "M" },
  { name: "Tesla", logo: "T" },
  { name: "Nike", logo: "N" },
  { name: "Spotify", logo: "S" },
]

export function ClientsSection() {
  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper>
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="handwriting text-5xl md:text-6xl text-gray-900 mb-4">
                Trusted By Industry Leaders
              </h2>
              <p className="text-gray-600 text-lg">Collaborating with amazing brands</p>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center aspect-square border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)",
                  }}
                >
                  <div className="text-center">
                    <div className="handwriting text-4xl text-red-600 mb-2">{client.logo}</div>
                    <div className="text-gray-700 text-sm">{client.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { label: "Global Reach", value: "50+ Countries" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Repeat Clients", value: "85%" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="handwriting text-4xl text-red-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
