import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Commercial Reel 2024",
    category: "Commercial",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Brand Story",
    category: "Branding",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Music Video",
    category: "Music",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Documentary Short",
    category: "Documentary",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "Social",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Cinematic Showreel",
    category: "Showreel",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 7,
    title: "Behind The Scenes",
    category: "BTS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 8,
    title: "Creative Studio Work",
    category: "Studio",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1750727770129-6f4e79d9e620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 9,
    title: "Fashion Editorial",
    category: "Fashion",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1642072130544-7cb9796534fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 10,
    title: "Corporate Video",
    category: "Corporate",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1654723011663-2ac59c385b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the proper x translation based on number of projects
  const totalWidth = projects.length * 632;
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const scrollDistance = -((totalWidth - viewportWidth) / totalWidth) * 100;
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${scrollDistance}%`]);

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full">
          <div className="container mx-auto px-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="handwriting text-5xl md:text-6xl text-gray-900 mb-4">
                Featured Work
              </h2>
              <p className="text-gray-600 text-lg">Scroll to explore my latest projects</p>
            </motion.div>
          </div>

          <motion.div style={{ x }} className="flex gap-8 pl-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative flex-shrink-0 w-[600px] h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="handwriting text-white text-3xl mb-4">{project.title}</h3>
                    <button className="flex items-center gap-2 text-white hover:text-red-400 transition-colors">
                      <Play className="w-5 h-5" fill="currentColor" />
                      <span>Watch Project</span>
                    </button>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-red-600 ml-1" fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
