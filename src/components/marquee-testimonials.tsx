import type { CSSProperties } from "react"
import { motion } from "motion/react"
import { ScrollAnimationWrapper } from "./scroll-animation-wrapper"

const testimonials = [
  {
    id: 1,
    text: "Absolutely brilliant work! The final edit exceeded all expectations.",
    author: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    text: "Professional, creative, and delivers on time. Highly recommend!",
    author: "Michael Chen",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    text: "The storytelling was captivating. Amazing attention to detail.",
    author: "Emma Davis",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    text: "Best video editor I've worked with. The results speak for themselves.",
    author: "James Wilson",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    text: "Creative vision combined with technical excellence. Perfect!",
    author: "Lisa Anderson",
    role: "Producer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
  },
]

export function MarqueeTestimonials() {
  const wheelStyle = {
    "--wheel-size": "80vw",
    "--wheel-radius": "calc((var(--wheel-size) / 2) - 52px)",
    "--wheel-duration": "36s",
  } as CSSProperties

  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-40" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollAnimationWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.45em] text-lime-300">Client Love</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              What people are saying
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
              Hear from the creative teams and brands who trust us with their story
            </p>
          </motion.div>

          <div className="mt-16 flex flex-col items-center gap-10">
            <div className="relative w-full flex justify-center">
              <div className="ferris-wheel ferris-wheel--arc" style={wheelStyle}>
                <div className="ferris-wheel__halo" />
                <div className="ferris-wheel__rotor">
                  {testimonials.map((testimonial, index) => {
                    const angle = (index / testimonials.length) * 360

                    return (
                      <div
                        key={testimonial.id}
                        className="ferris-wheel__orbit"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * var(--wheel-radius)))`,
                        }}
                      >
                        <div
                          className="ferris-wheel__testimonial-shell"
                          style={{ transform: `rotate(${-angle}deg)` }}
                        >
                          <div className="ferris-wheel__testimonial ferris-wheel__avatar--counter">
                            <img src={testimonial.image} alt={testimonial.author} loading="lazy" />
                            <div>
                              <p>{testimonial.author}</p>
                              <span>{testimonial.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
