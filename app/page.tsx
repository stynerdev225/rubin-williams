// Developed by Stiner.dev
// Professional Web Developer
// Date: May 3, 2025
// Contact: https://stiner.dev

// Disclaimer: This code is provided "as is" without warranty of any kind, express or implied.
// The developer is not responsible for any content displayed on this website or any consequences
// arising from the use of this code. All content belongs to respective copyright holders.

"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Play, Volume2, Maximize2 } from "lucide-react"
import { useRef, useState } from "react"
import Navigation from "@/components/navigation"

export default function Home() {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<"keynote" | "tour" | "workshops">("keynote")

  const scrollLeft = () => {
    if (videoContainerRef.current) {
      const container = videoContainerRef.current
      const scrollAmount = container.clientWidth / 2
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (videoContainerRef.current) {
      const container = videoContainerRef.current
      const scrollAmount = container.clientWidth / 2
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  // Content for each tab
  const tabContent = {
    keynote: {
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop",
      alt: "Keynote speech on social justice",
      title: "Latest keynote",
      highlight: '"The Path to Justice"',
      description: "is now available",
    },
    tour: {
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
      alt: "Speaking tour poster",
      title: "On tour now",
      highlight: '"Truth & Justice Tour 2024"',
      description: "Get your tickets!",
    },
    workshops: {
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
      alt: "Leadership workshop session",
      title: "Upcoming workshops",
      highlight: '"Leadership for Change"',
      description: "Register today",
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation */}
      <header>
        <Navigation />
      </header>

      {/* Main content with padding to prevent overlap with fixed navbar */}
      <main className="flex-1 space-y-16 pt-32 md:pt-40">
        {/* Mobile logo */}
        <div className="md:hidden text-center container mx-auto px-4 -mt-16">
          <h1 className="text-4xl font-serif italic tracking-wider">Rubin Williams</h1>
          <p className="text-sm text-gray-400 mt-1">Social Justice Speaker & Activist</p>
        </div>

        <div className="container mx-auto px-4">
          <div className="bg-[#f8f5eb] text-black rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold">RUBIN WILLIAMS</h2>
                <h3 className="text-xl md:text-3xl font-medium">SOCIAL JUSTICE SPEAKER & ACTIVIST</h3>
                <p className="italic text-lg">
                  "Former Black Panthers revolutionary, inspiring the next generation of leaders"
                </p>
                <div>
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] text-white font-medium py-3 px-8 rounded">
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[500px] md:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop"
                    alt="Performer with microphone"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section - Keynote Speeches, Speaking Tour, Workshops */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="md:w-1/2 space-y-6" style={{ perspective: "1000px" }}>
              {/* Clickable Tabs */}
              <button
                onClick={() => setActiveTab("keynote")}
                className={`text-6xl md:text-7xl font-extrabold block w-full text-left transition-all duration-500 tracking-tight ${activeTab === "keynote"
                    ? "text-[#B75F24] transform translate-z-0 scale-100"
                    : "text-gray-500 hover:text-gray-300 transform translate-z-[-50px] scale-95 opacity-60 blur-[0.5px]"
                  }`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  backfaceVisibility: "hidden",
                }}
              >
                KEYNOTE SPEECHES
              </button>

              <button
                onClick={() => setActiveTab("tour")}
                className={`text-6xl md:text-7xl font-extrabold block w-full text-left transition-all duration-500 tracking-tight ${activeTab === "tour"
                    ? "text-[#B75F24] transform translate-z-0 scale-100"
                    : "text-gray-500 hover:text-gray-300 transform translate-z-[-50px] scale-95 opacity-60 blur-[0.5px]"
                  }`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  backfaceVisibility: "hidden",
                }}
              >
                SPEAKING TOUR
              </button>

              <button
                onClick={() => setActiveTab("workshops")}
                className={`text-6xl md:text-7xl font-extrabold block w-full text-left transition-all duration-500 tracking-tight ${activeTab === "workshops"
                    ? "text-[#B75F24] transform translate-z-0 scale-100"
                    : "text-gray-500 hover:text-gray-300 transform translate-z-[-50px] scale-95 opacity-60 blur-[0.5px]"
                  }`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  backfaceVisibility: "hidden",
                }}
              >
                WORKSHOPS
              </button>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="relative aspect-video bg-black rounded overflow-hidden">
                  <Image
                    src={tabContent[activeTab].image || "/placeholder.svg"}
                    alt={tabContent[activeTab].alt}
                    width={1280}
                    height={720}
                    className="object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors">
                      <Play className="h-8 w-8 text-white" />
                    </button>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center p-2 bg-black/50 text-white text-xs">
                    <button className="p-1">
                      <Play className="h-4 w-4" />
                    </button>
                    <div className="mx-2">00:00</div>
                    <div className="flex-1 h-1 bg-gray-600 rounded-full">
                      <div className="w-0 h-full bg-white rounded-full"></div>
                    </div>
                    <button className="p-1 mx-1">
                      <Volume2 className="h-4 w-4" />
                    </button>
                    <button className="p-1">
                      <Maximize2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  {tabContent[activeTab].title}{" "}
                  <span className="text-[#B75F24]">{tabContent[activeTab].highlight}</span>{" "}
                  {tabContent[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-[#f8f5eb] text-black rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Testimonial */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#B75F24] text-6xl font-serif leading-none">"</span>
                </div>
                <p className="text-lg">
                  Rubin's keynote address on the Black Panthers' legacy was profoundly moving and educational. His
                  ability to connect historical struggles with today's social justice movements gave our students a
                  powerful framework for understanding systemic change.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                      alt="Dr. James Thompson"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-bold">Dr. James Thompson</p>
                    <p className="text-sm">Director, Center for Social Justice Studies</p>
                  </div>
                </div>
              </div>

              {/* Second Testimonial */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#B75F24] text-6xl font-serif leading-none">"</span>
                </div>
                <p className="text-lg">
                  The community organizing workshop led by Rubin transformed our grassroots movement. His practical
                  strategies, drawn from decades of activism experience, provided our team with the tools we needed to
                  create sustainable change in our neighborhood.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                      alt="Maria Rodriguez"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-bold">Maria Rodriguez</p>
                    <p className="text-sm">Executive Director, Urban Justice Coalition</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {[1, 2, 3, 4, 5, 6].map((dot) => (
                <span key={dot} className={`w-2 h-2 rounded-full ${dot === 4 ? "bg-[#B75F24]" : "bg-gray-300"}`}></span>
              ))}
            </div>
          </div>
        </div>

        {/* Album Download Section */}
        <div className="container mx-auto px-4 py-16 bg-black">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-lg font-medium uppercase">DOWNLOAD MY FREE E-BOOK</h3>
              <h2 className="text-4xl md:text-5xl font-bold">
                "REVOLUTIONARY REFLECTIONS: LESSONS FROM THE BLACK PANTHERS"
              </h2>
              <p className="text-gray-300">
                Enter your email address to receive a FREE download of my e-book "Revolutionary Reflections: Lessons
                from the Black Panthers" - a personal account of my experiences and the enduring lessons for today's
                activists.
              </p>
              <form className="space-y-4 max-w-md">
                <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white text-black rounded" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white text-black rounded" />
                <button
                  type="submit"
                  className="bg-[#B75F24] hover:bg-[#a54e13] text-white font-medium py-3 px-8 rounded uppercase"
                >
                  Download
                </button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                {/* Tilted frame behind the book cover */}
                <div
                  className="absolute inset-0 border-4 border-[#B75F24] rounded-lg transform rotate-6 -translate-x-4 translate-y-4 z-0"
                  aria-hidden="true"
                ></div>

                {/* Second tilted frame for layered effect */}
                <div
                  className="absolute inset-0 border-4 border-white/30 rounded-lg transform -rotate-3 translate-x-6 -translate-y-2 z-0"
                  aria-hidden="true"
                ></div>

                {/* Book cover image */}
                <div className="relative z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=500&auto=format&fit=crop"
                    alt="Book Cover - Revolutionary Reflections"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Videos Section - HORIZONTAL SCROLLABLE ROW */}
        <div className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">LATEST VIDEOS</h2>

            {/* Horizontal scrollable container */}
            <div className="relative overflow-hidden">
              <div
                ref={videoContainerRef}
                className="flex overflow-x-auto space-x-4 pb-8 hide-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Video 1 */}
                <div className="flex-none w-[360px] md:w-[450px]">
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=450&auto=format&fit=crop"
                        alt="The Legacy of the Black Panthers: Misunderstood Revolutionaries"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-[#B75F24] p-4 rounded-full">
                          <Play className="h-6 w-6 text-white" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xs font-bold uppercase text-center">
                      THE LEGACY OF THE BLACK PANTHERS: MISUNDERSTOOD REVOLUTIONARIES
                    </h3>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="flex-none w-[360px] md:w-[450px]">
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=450&auto=format&fit=crop"
                        alt="Community Organizing: Building Grassroots Movements"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-[#B75F24] p-4 rounded-full">
                          <Play className="h-6 w-6 text-white" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xs font-bold uppercase text-center">
                      COMMUNITY ORGANIZING: BUILDING GRASSROOTS MOVEMENTS
                    </h3>
                  </div>
                </div>

                {/* Video 3 */}
                <div className="flex-none w-[360px] md:w-[450px]">
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=450&auto=format&fit=crop"
                        alt="Leadership for Social Change: Beyond Charisma"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-[#B75F24] p-4 rounded-full">
                          <Play className="h-6 w-6 text-white" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xs font-bold uppercase text-center">
                      LEADERSHIP FOR SOCIAL CHANGE: BEYOND CHARISMA
                    </h3>
                  </div>
                </div>

                {/* Video 4 */}
                <div className="flex-none w-[360px] md:w-[450px]">
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=450&auto=format&fit=crop"
                        alt="Finding Your Voice: Public Speaking for Activists"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-[#B75F24] p-4 rounded-full">
                          <Play className="h-6 w-6 text-white" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-xs font-bold uppercase text-center">
                      FINDING YOUR VOICE: PUBLIC SPEAKING FOR ACTIVISTS
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex mt-4 gap-2">
              <button
                onClick={scrollLeft}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                aria-label="Previous videos"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                aria-label="Next videos"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Custom CSS to hide scrollbar */}
            <style jsx global>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>
        </div>

        {/* About Section */}
        <div className="container mx-auto px-4 py-16 bg-black">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">ABOUT RUBIN</h2>
              <p className="text-gray-300">
                Rubin Williams is a former Black Panthers revolutionary and social justice speaker. Due to the social
                injustice during the 1960's Black Power movement, he was incarcerated for many years due to America's
                constructed white power structure that targeted the Black African communities in the United States.
              </p>
              <p className="text-gray-300">
                Now he is a social justice speaker sharing his stories with the youth and teaching on true leadership
                and standing strong.
              </p>
              <div>
                <Link
                  href="/about"
                  className="bg-[#B75F24] hover:bg-[#a54e13] text-white font-medium py-3 px-8 rounded uppercase inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop"
                  alt="Rubin Williams speaking at an event"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coaching Section - EXACT RECREATION */}
        <div className="container mx-auto px-4 py-16 bg-black">
          <div className="bg-[#f8f5eb] text-black rounded-3xl overflow-hidden">
            <div className="flex flex-col md:flex-row p-8 md:p-12">
              <div className="md:w-3/5 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-wider text-[#B75F24]">COACHING WITH</h3>
                  <h2 className="text-5xl md:text-6xl font-bold relative">
                    RUBIN WILLIAMS
                    <span className="absolute -bottom-3 left-0 w-24 h-1 bg-[#B75F24]"></span>
                  </h2>
                </div>

                <p className="text-base">
                  Rubin leads a busy <span className="font-semibold">"double life"</span> as an activist and an
                  educator. Over the years, as well as continuously fighting for social justice, he has learned how to
                  effectively share his experiences and insights with audiences of all backgrounds.
                </p>

                <p className="text-base">
                  In 2021, he started coaching to see if he could replicate this process for his students: since then he
                  has helped thousands of young activists develop their leadership skills to a professional level, as
                  well as build personal brand to turn their skills as change-makers into a very impactful career.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mt-8">
                  <div className="space-y-3">
                    <button className="bg-[#B75F24] hover:bg-[#a54e13] text-white font-medium py-3 px-6 rounded w-full md:w-auto">
                      LEADERSHIP WORKSHOP
                    </button>
                    <p className="text-sm">
                      Learn how to develop your leadership skills and make a meaningful impact in your community.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button className="border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-200 font-medium py-3 px-6 rounded w-full md:w-auto">
                      LEARN SOCIAL JUSTICE ADVOCACY
                    </button>
                    <p className="text-sm">
                      A new exciting course to add effective advocacy skills to your activism toolkit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5 mt-8 md:mt-0">
                <div className="relative h-[400px] md:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop"
                    alt="Rubin Williams speaking at a coaching session"
                    fill
                    className="object-contain object-right-bottom grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Comprehensive version from About page */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-8 md:mb-0">
              <h3 className="font-serif italic text-3xl">Rubin Williams</h3>
              <p className="text-sm text-gray-400 mt-1">Social Justice Speaker & Activist</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/coaching" className="text-gray-400 hover:text-white">
                      Coaching
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/press" className="text-gray-400 hover:text-white">
                      Medium
                    </Link>
                  </li>
                  <li>
                    <Link href="/store" className="text-gray-400 hover:text-white">
                      Store
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold mb-4">Connect</h4>
                <div className="flex gap-4 mb-4">
                  <Link href="#" className="bg-[#B75F24] rounded-full p-2 text-white hover:bg-[#a54e13]">
                    <Facebook size={18} />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="bg-[#B75F24] rounded-full p-2 text-white hover:bg-[#a54e13]">
                    <Instagram size={18} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="bg-[#B75F24] rounded-full p-2 text-white hover:bg-[#a54e13]">
                    <Youtube size={18} />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
                <p className="text-sm text-gray-400">
                  For booking inquiries:
                  <br />
                  <a href="mailto:booking@rubinwilliams.com" className="text-[#B75F24] hover:underline">
                    booking@rubinwilliams.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© Rubin Williams, 2024. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-400">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
