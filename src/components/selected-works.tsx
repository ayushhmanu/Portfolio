import { useRef } from "react"

// Video data for marquees
const horizontalVideos = [
    { id: 1, src: "/videos/horizontal/HC1.mp4", title: "" },
    { id: 2, src: "/videos/horizontal/Speed Ramp Watch.mp4", title: "" },
    { id: 3, src: "/videos/horizontal/{Traders,Investers,Learners]Final.mp4", title: "" },
]

const verticalVideos = [
    { id: 1, src: "/videos/vertical/Camera match cut .mp4", title: "" },
    { id: 2, src: "/videos/vertical/IOS Ui Animation.mp4", title: "" },
    { id: 3, src: "/videos/vertical/Post ( Shape Morphing ).mp4", title: "" },
    { id: 4, src: "/videos/vertical/T animation.mp4", title: "" },
    { id: 5, src: "/videos/vertical/Wins Fails Mess.mp4", title: "" },
    { id: 6, src: "/videos/vertical/actions cures anxiety.mp4", title: "" },
]

export function SelectedWorks() {
    const componentRef = useRef<HTMLDivElement>(null)

    return (
        <section
            ref={componentRef}
            className="relative w-full h-screen bg-black text-white flex overflow-hidden z-20"
        >
            {/* Left Side: Title + Horizontal Marquee */}
            <div className="flex-[3] flex flex-col overflow-hidden">
                {/* Title - With 192px left margin like other sections */}
                <div className="flex-1 flex items-center">
                    <div className="ml-6 md:ml-[192px]">
                        <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter text-left">
                            SELECTED
                            <br />
                            <span className="text-red-600">WORKS</span>
                        </h2>
                        <div className="h-1 w-20 bg-red-600 mt-6"></div>
                    </div>
                </div>

                {/* Horizontal Marquee - at bottom */}
                <div className="relative flex items-center w-full overflow-hidden h-[30vh] mb-8">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

                    {/* Marquee Track */}
                    <div className="flex gap-8 md:gap-12 animate-marquee">
                        {/* Set 1 */}
                        {horizontalVideos.map((video, index) => (
                            <div
                                key={`h-set1-${video.id}-${index}`}
                                className="relative w-[50vw] md:w-[20vw] aspect-video shrink-0 rounded-lg overflow-hidden border border-white/10"
                            >
                                <video
                                    src={video.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute bottom-4 left-4 z-10">
                                    <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                        {/* Set 2 (duplicate for seamless loop) */}
                        {horizontalVideos.map((video, index) => (
                            <div
                                key={`h-set2-${video.id}-${index}`}
                                className="relative w-[50vw] md:w-[20vw] aspect-video shrink-0 rounded-lg overflow-hidden border border-white/10"
                            >
                                <video
                                    src={video.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute bottom-4 left-4 z-10">
                                    <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side: Vertical Marquee (wider - 1/3 instead of 1/4) */}
            <div className="w-[30%] hidden md:flex flex-col items-center justify-center overflow-hidden relative">
                {/* Gradient Masks - Top and Bottom */}
                <div className="absolute top-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>

                {/* Vertical Marquee Track */}
                <div className="flex flex-col gap-8 md:gap-12 animate-marquee-vertical">
                    {/* Set 1 */}
                    {verticalVideos.map((video, index) => (
                        <div
                            key={`v-set1-${video.id}-${index}`}
                            className="relative w-[14vw] aspect-[9/16] shrink-0 rounded-lg overflow-hidden border border-white/10"
                        >
                            <video
                                src={video.src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute bottom-2 left-2 z-10">
                                <h3 className="font-display text-xs font-bold uppercase tracking-wider">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                    {/* Set 2 (duplicate for seamless loop) */}
                    {verticalVideos.map((video, index) => (
                        <div
                            key={`v-set2-${video.id}-${index}`}
                            className="relative w-[14vw] aspect-[9/16] shrink-0 rounded-lg overflow-hidden border border-white/10"
                        >
                            <video
                                src={video.src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute bottom-2 left-2 z-10">
                                <h3 className="font-display text-xs font-bold uppercase tracking-wider">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
