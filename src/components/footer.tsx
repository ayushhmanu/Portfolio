import { Youtube, Instagram, Twitter, Mail } from "lucide-react"
import { motion } from "motion/react"

export function Footer() {
  return (
    <footer id="contacts" className="relative py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Side - Brand & Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-600 shadow-lg"></div>
                <span className="handwriting text-gray-900 text-3xl">ayushhmanu</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Video Editor & Creative Storyteller
                <br />
                Crafting cinematic experiences that captivate and inspire.
              </p>
            </motion.div>

            {/* Right Side - Contact & Social */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div>
                <h3 className="text-gray-900 mb-4">Get In Touch</h3>
                <a
                  href="mailto:ayushhmanu.works@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">ayushhmanu.works@gmail.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-gray-900 mb-4">Follow</h3>
                <div className="flex gap-3">
                  <motion.a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Youtube className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-gray-200 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-500 text-sm">© 2025 Ayushhmanu. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
