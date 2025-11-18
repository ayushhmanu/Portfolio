import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Play } from "lucide-react"

let gsapRegistered = false

if (typeof window !== "undefined" && !gsapRegistered) {
  gsap.registerPlugin(ScrollTrigger)
  gsapRegistered = true
}

interface Project {
  id: number
  title: string
  category: string
  videoUrl: string
  thumbnail: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Reel 2024",
    category: "Commercial",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Brand Story",
    category: "Branding",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Music Video",
    category: "Music",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Documentary Short",
    category: "Documentary",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "Social",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Cinematic Showreel",
    category: "Showreel",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1612000656409-16fcf948b2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 7,
    title: "Behind The Scenes",
    category: "BTS",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 8,
    title: "Creative Studio Work",
    category: "Studio",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1750727770129-6f4e79d9e620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 9,
    title: "Fashion Editorial",
    category: "Fashion",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1642072130544-7cb9796534fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 10,
    title: "Corporate Video",
    category: "Corporate",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1654723011663-2ac59c385b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
]

interface ProjectCardProps {
  project: Project
  index: number
  variant: "desktop" | "mobile"
}

const ProjectCard = ({ project, index, variant }: ProjectCardProps) => {
  const desktopSizing = "h-[65vh] min-h-[420px] w-[60vw] min-w-[520px] max-w-[780px]"
  const mobileSizing = "h-[320px] w-[78vw] min-w-[260px] max-w-[360px]"
  const sizing = variant === "desktop" ? desktopSizing : mobileSizing

  const snapClass = variant === "mobile" ? "snap-center" : ""

  return (
    <article
      className={`group relative shrink-0 overflow-hidden rounded-[42px] bg-neutral-900 text-white shadow-2xl transition-transform duration-500 ${sizing} ${snapClass}`}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1200 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="rounded-full border border-white/30 px-3 py-1 text-[0.65rem] tracking-[0.25em]">
            {project.category}
          </span>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-red-300/80">Feature</p>
          <h3 className="handwriting text-4xl leading-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
            {project.title}
          </h3>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium tracking-wide backdrop-blur transition hover:border-red-400 hover:bg-white/20"
            aria-label={`Play ${project.title}`}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
              <Play className="h-4 w-4" fill="currentColor" />
            </span>
            Watch project
          </button>
        </div>
      </div>
    </article>
  )
}

export function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  )

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !isDesktop) {
      return
    }

    if (!containerRef.current || !trackRef.current || !progressRef.current) return

    const ctx = gsap.context(() => {
      const section = containerRef.current
      const track = trackRef.current
      const progress = progressRef.current
      if (!section || !track || !progress) return

      gsap.set(progress, { scaleX: 0, transformOrigin: "left center" })

      gsap.to(track, {
        x: () => `-${Math.max(0, track.scrollWidth - window.innerWidth)}`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => {
            const distance = Math.max(0, track.scrollWidth - window.innerWidth)
            return `+=${distance + window.innerHeight}`
          },
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.to(progress, {
              scaleX: self.progress,
              ease: "none",
              duration: 0,
            })
          },
        },
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, containerRef)

    return () => ctx.revert()
  }, [isDesktop])

  if (!isDesktop) {
    return (
      <section
        ref={containerRef}
        className="relative overflow-hidden bg-[#050505] py-20 text-white"
      >
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/90 to-black/70" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "160px 160px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-screen-sm space-y-4 px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-red-300">Featured Work</p>
          <h2 className="handwriting text-5xl leading-tight">Swipe through the reel</h2>
          <p className="text-white/70">
            Drag sideways to browse hero projects crafted for bold brands.
          </p>
        </div>

        <div className="relative mt-10 pl-4 sm:pl-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="flex gap-5 overflow-x-auto pb-10 pr-10 snap-x snap-mandatory">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} variant="mobile" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#030303] text-white"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/90 to-[#050505]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(239,68,68,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12), transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 flex h-screen flex-col">
        <header className="mx-auto w-full max-w-screen-2xl px-6 pt-16 pb-10 md:px-12 lg:px-24">
          <p className="text-xs uppercase tracking-[0.5em] text-red-400">Featured Work</p>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:gap-12">
            <h2 className="handwriting text-5xl leading-tight md:text-6xl lg:text-[4.5rem]">
              Scroll to glide through the reel
            </h2>
            <p className="max-w-xl text-base text-white/70">
              The section locks in place the moment it fills your screen, then glides sideways
              revealing every hero project with a cinematic pace. Keep scrolling to exit once you
              reach the end.
            </p>
          </div>
        </header>

        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-linear-to-r from-[#030303] via-[#030303]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-linear-to-l from-[#030303] via-[#030303]/80 to-transparent" />

          <div
            ref={trackRef}
            className="flex h-full items-center gap-10 px-4 md:px-12 lg:px-24 pr-[55vw] will-change-transform"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} variant="desktop" />
            ))}
          </div>

          <div className="absolute bottom-10 left-4 right-4 h-1.5 rounded-full bg-white/10 md:left-12 md:right-12">
            <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 rounded-full bg-linear-to-r from-red-600 via-white to-red-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
