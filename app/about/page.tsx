// Developed by Stiner.dev
// Professional Web Developer
// Date: May 3, 2025
// Contact: https://stiner.dev

// Disclaimer: This code is provided "as is" without warranty of any kind, express or implied.
// The developer is not responsible for any content displayed on this website or any consequences
// arising from the use of this code. All content belongs to respective copyright holders.

import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ArrowRight, Calendar, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto py-4">
        <Navigation />

        {/* Mobile logo */}
        <div className="md:hidden text-center mt-24 mb-8">
          <h1 className="text-4xl font-serif italic tracking-wider">Rubin Williams</h1>
          <p className="text-sm text-gray-400 mt-1">Social Justice Speaker & Activist</p>
        </div>
      </header>

      <main className="flex-1 pt-16 md:pt-32">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
          <div className="relative h-[50vh] md:h-[60vh]">
            <Image
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
              alt="Rubin Williams speaking at an event"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">ABOUT RUBIN</h1>
              <p className="text-xl md:text-2xl mt-4 max-w-2xl text-white drop-shadow-lg">
                Former Black Panthers revolutionary, social justice advocate, and inspirational speaker
              </p>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3 lg:w-1/3">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop"
                    alt="Rubin Williams portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#B75F24] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Book Rubin for Speaking</h3>
                  <p className="mb-4">
                    Invite Rubin Williams to share his powerful story and insights at your next event, school, or
                    community gathering.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#FBFAF5] text-black px-6 py-3 rounded font-medium hover:bg-[#FBFAF5] transition-colors"
                  >
                    Request Booking <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-6 bg-black p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Calendar className="h-5 w-5 text-[#B75F24] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Black History Month Keynote</p>
                        <p className="text-sm text-gray-400">June 15, 2024</p>
                        <p className="text-sm text-gray-400 flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" /> Howard University, Washington DC
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Calendar className="h-5 w-5 text-[#B75F24] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Social Justice Summit</p>
                        <p className="text-sm text-gray-400">July 8-10, 2024</p>
                        <p className="text-sm text-gray-400 flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" /> Atlanta, GA
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Calendar className="h-5 w-5 text-[#B75F24] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Youth Leadership Conference</p>
                        <p className="text-sm text-gray-400">August 22, 2024</p>
                        <p className="text-sm text-gray-400 flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" /> Chicago, IL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 lg:w-2/3 space-y-6 md:space-y-8">
              {/* Stylish Title and Subtitle */}
              <div className="mb-8 md:mb-12">
                <div className="inline-block relative">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">THE REVOLUTIONARY JOURNEY</h2>
                  <div className="h-1 w-24 md:w-32 bg-[#B75F24] mt-2"></div>
                </div>
                <p className="text-xl md:text-2xl text-[#B75F24] mt-4 md:mt-6 font-serif italic">
                  From Black Panther to Social Justice Educator — A Story of Resilience and Transformation
                </p>
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-2xl leading-relaxed font-light tracking-wide text-[#FBFAF5] mb-6">
                  Rubin Williams is a former Black Panthers revolutionary and social justice advocate. Born during the
                  height of racial tension in America, Rubin's life has been defined by his commitment to fighting for
                  equality and justice for Black communities.
                </p>

                <div className="pl-4 border-l-4 border-[#B75F24] my-8">
                  <p className="text-xl leading-relaxed text-[#B75F24] font-medium italic">
                    Due to the social injustice during the 1960's Black Power movement, he was incarcerated for many years
                    due to America's constructed white power structure that targeted the Black African communities in the
                    United States.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-lg leading-relaxed mb-6 text-gray-300">
                    During his incarceration, Rubin developed a profound understanding of systemic oppression and the
                    power of education as a tool for liberation. He studied law, history, and philosophy, transforming his
                    confinement into an opportunity for intellectual growth.
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-6 text-gray-300">
                  Upon his release, Rubin dedicated himself to sharing his experiences and insights with younger
                  generations. He believes that by understanding the struggles of the past, today's youth can be better
                  equipped to continue the fight for true equality and justice.
                </p>

                <div className="mt-6 bg-gradient-to-r from-black to-[#B75F24]/10 p-6 rounded-lg mb-6">
                  <p className="text-xl leading-relaxed font-medium text-white mb-0">
                    Now he is a respected social justice speaker, traveling across the country to share his stories with
                    the youth and teaching on true leadership and standing strong in the face of adversity.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-lg leading-relaxed text-gray-300">
                    Rubin's powerful testimonies connect historical struggles with contemporary challenges, inspiring
                    audiences to recognize their own power to create meaningful change in their communities and beyond.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8">Life Journey</h2>
                <div className="relative border-l-2 border-[#B75F24] pl-8 space-y-12">
                  <div className="relative">
                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-[#B75F24]"></div>
                    <h3 className="text-xl font-bold">Early Activism</h3>
                    <p className="text-sm text-[#B75F24] mb-2">1960s</p>
                    <p>
                      Joined the Black Panthers Party during the height of the Civil Rights Movement, advocating for
                      Black empowerment and community self-determination.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-[#B75F24]"></div>
                    <h3 className="text-xl font-bold">Incarceration & Education</h3>
                    <p className="text-sm text-[#B75F24] mb-2">1970s - 1980s</p>
                    <p>
                      Targeted by law enforcement and imprisoned. During this time, Rubin transformed his confinement
                      into an opportunity for intellectual growth, studying law, history, and philosophy.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-[#B75F24]"></div>
                    <h3 className="text-xl font-bold">Freedom & New Purpose</h3>
                    <p className="text-sm text-[#B75F24] mb-2">1990s</p>
                    <p>
                      Upon release, Rubin began rebuilding his life with a new mission: to educate others about the
                      realities of systemic oppression and the importance of community organizing.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-[#B75F24]"></div>
                    <h3 className="text-xl font-bold">Speaking & Advocacy</h3>
                    <p className="text-sm text-[#B75F24] mb-2">2000s - Present</p>
                    <p>
                      Established himself as a respected social justice speaker, traveling across the country to share
                      his experiences and insights with younger generations, connecting historical struggles with
                      contemporary challenges.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-[#B75F24]"></div>
                    <h3 className="text-xl font-bold">Leadership Coaching</h3>
                    <p className="text-sm text-[#B75F24] mb-2">2021 - Present</p>
                    <p>
                      Began formal coaching programs to help develop the next generation of activists and community
                      leaders, teaching practical skills for effective advocacy and social change.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coaching Section */}
              <div className="mt-16">
                <h2 className="text-4xl font-bold mb-8">COACHING WITH RUBIN WILLIAMS</h2>
                <div className="space-y-6">
                  <p className="text-lg">
                    Rubin leads a busy <span className="font-semibold">"double life"</span> as an activist and an
                    educator. Over the years, as well as continuously fighting for social justice, he has learned how to
                    effectively share his experiences and insights with audiences of all backgrounds.
                  </p>

                  <p className="text-lg">
                    His coaching programs are designed to empower individuals who want to make a difference in their
                    communities but may not know how to effectively organize, communicate, or lead.
                  </p>

                  <p className="text-lg">
                    In 2021, he started coaching to see if he could replicate this process for his students: since then
                    he has helped thousands of young activists develop their leadership skills to a professional level,
                    as well as build personal brand to turn their skills as change-makers into a very impactful career.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-6">Available Coaching Programs:</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Leadership Workshop */}
                  <div className="bg-black p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">Leadership Workshop</h4>
                    <p className="mb-4">
                      Learn how to develop your leadership skills and make a meaningful impact in your community.
                    </p>
                    <Link
                      href="/coaching/leadership"
                      className="inline-flex items-center text-[#B75F24] hover:underline"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Social Justice Advocacy */}
                  <div className="bg-black p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">Social Justice Advocacy</h4>
                    <p className="mb-4">
                      A comprehensive course to add effective advocacy skills to your activism toolkit.
                    </p>
                    <Link href="/coaching/advocacy" className="inline-flex items-center text-[#B75F24] hover:underline">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Community Organizing */}
                  <div className="bg-black p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">Community Organizing</h4>
                    <p className="mb-4">
                      Practical strategies for building and sustaining grassroots movements for change.
                    </p>
                    <Link
                      href="/coaching/organizing"
                      className="inline-flex items-center text-[#B75F24] hover:underline"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Public Speaking */}
                  <div className="bg-black p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">Public Speaking</h4>
                    <p className="mb-4">
                      Master the art of compelling communication to amplify your message and inspire action.
                    </p>
                    <Link href="/coaching/speaking" className="inline-flex items-center text-[#B75F24] hover:underline">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* One-on-One Mentorship */}
                <div className="mt-6 md:mt-8 bg-[#F5F1E6] text-black p-6 md:p-8 rounded-lg flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
                        alt="Rubin Williams coaching"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h4 className="text-2xl font-bold mb-3">One-on-One Mentorship</h4>
                    <p className="mb-4">
                      For dedicated activists looking for personalized guidance, Rubin offers limited one-on-one
                      mentorship opportunities.
                    </p>
                    <Link
                      href="/coaching/mentorship"
                      className="inline-flex items-center bg-[#B75F24] text-[#FBFAF5] px-6 py-3 rounded font-medium hover:bg-[#a54e13] transition-colors"
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Speaking Topics */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8">Speaking Topics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-black p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">The Black Panthers Legacy</h3>
                    <p>
                      An insider's perspective on the Black Panthers movement, its community programs, and its lasting
                      impact on social justice organizing.
                    </p>
                  </div>

                  <div className="bg-black p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Surviving the System</h3>
                    <p>
                      Rubin's personal journey through incarceration and how education became a tool for personal
                      liberation and growth.
                    </p>
                  </div>

                  <div className="bg-black p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Youth Leadership</h3>
                    <p>
                      Empowering young people to recognize their potential as leaders and change-makers in their
                      communities.
                    </p>
                  </div>

                  <div className="bg-black p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">From Past to Present</h3>
                    <p>
                      Connecting historical civil rights struggles with contemporary social justice movements and
                      challenges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8">What People Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="bg-black p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <span className="text-[#B75F24] text-5xl font-serif leading-none">"</span>
                    </div>
                    <p className="text-lg mb-6">
                      Rubin's presentation was transformative for our students. His ability to connect historical
                      struggles with today's challenges gave them a new perspective on their own power to create change.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                        <Image
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
                          alt="Dr. Michelle Johnson"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-bold">Dr. Michelle Johnson</p>
                        <p className="text-sm text-gray-400">Howard University</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <span className="text-[#B75F24] text-5xl font-serif leading-none">"</span>
                    </div>
                    <p className="text-lg mb-6">
                      Having Rubin speak at our community center was an incredible experience. His story of resilience
                      and transformation inspired everyone in attendance, from teenagers to seniors.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                          alt="Marcus Williams"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-bold">Marcus Williams</p>
                        <p className="text-sm text-gray-400">Community Organizer, Chicago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 bg-[#B75F24] p-8 rounded-lg text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Bring Rubin to Your Community</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Invite Rubin Williams to speak at your school, organization, or community event and inspire the next
                  generation of leaders and change-makers.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#FBFAF5] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#FBFAF5] transition-colors"
                >
                  Book for Speaking <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                    <Link href="/" className="text-gray-400 hover:text-[#F5F1E6]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-[#F5F1E6]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/coaching" className="text-gray-400 hover:text-[#F5F1E6]">
                      Coaching
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/press" className="text-gray-400 hover:text-[#F5F1E6]">
                      Medium
                    </Link>
                  </li>
                  <li>
                    <Link href="/store" className="text-gray-400 hover:text-[#F5F1E6]">
                      Store
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-[#F5F1E6]">
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
              <Link href="/privacy" className="hover:text-[#F5F1E6]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#F5F1E6]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
