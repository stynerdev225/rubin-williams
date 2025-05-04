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
import Footer from "@/components/footer"
import { ArrowRight, MapPin, CheckCircle, Users, Award, BookOpen, Quote } from "lucide-react"

export default function CoachingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto py-4">
        <Navigation />

        {/* Mobile logo */}
        <div className="md:hidden text-center mt-4">
          <h1 className="text-4xl font-serif italic tracking-wider">Rubin Williams</h1>
          <p className="text-sm text-gray-400 mt-1">Social Justice Speaker & Activist</p>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
          <div className="relative h-[50vh] md:h-[60vh]">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              alt="Rubin Williams coaching a group"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">COACHING PROGRAMS</h1>
              <p className="text-xl md:text-2xl mt-4 max-w-2xl text-white drop-shadow-lg">
                Develop your leadership skills and make a meaningful impact in your community
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section - Redesigned with image */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-black rounded-xl overflow-hidden shadow-2xl border border-[#333]">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-wider text-[#B75F24]">COACHING WITH</h3>
                    <h2 className="text-5xl md:text-6xl font-bold relative">
                      RUBIN WILLIAMS
                      <span className="absolute -bottom-3 left-0 w-24 h-1 bg-[#B75F24]"></span>
                    </h2>
                  </div>
                </div>

                <div className="space-y-6 text-lg">
                  <div className="flex">
                    <Quote className="text-[#B75F24] h-8 w-8 mr-4 flex-shrink-0 mt-1" />
                    <p className="italic">
                      Rubin leads a busy <span className="font-semibold text-[#B75F24]">"double life"</span> as an
                      activist and an educator. Over the years, as well as continuously fighting for social justice, he
                      has learned how to effectively share his experiences and insights with audiences of all
                      backgrounds.
                    </p>
                  </div>

                  <p>
                    His coaching programs are designed to empower individuals who want to make a difference in their
                    communities but may not know how to effectively organize, communicate, or lead.
                  </p>

                  <p>
                    In 2021, he started coaching to see if he could replicate this process for his students: since then
                    he has helped thousands of young activists develop their leadership skills to a professional level,
                    as well as build personal brand to turn their skills as change-makers into a very impactful career.
                  </p>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-6 py-3 rounded font-medium"
                    >
                      Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 relative">
                <div className="h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Rubin Williams coaching a group of activists"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-l md:from-transparent md:to-black/10"></div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black to-transparent">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-3xl md:text-4xl font-bold text-[#B75F24]">1000+</p>
                        <p className="text-sm md:text-base">Activists Trained</p>
                      </div>
                      <div>
                        <p className="text-3xl md:text-4xl font-bold text-[#B75F24]">4</p>
                        <p className="text-sm md:text-base">Coaching Programs</p>
                      </div>
                      <div>
                        <p className="text-3xl md:text-4xl font-bold text-[#B75F24]">20+</p>
                        <p className="text-sm md:text-base">Years Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="bg-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Coaching Programs</h2>

            {/* Leadership Workshop */}
            <div className="bg-white rounded-lg overflow-hidden mb-12 text-black">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                    alt="Leadership Workshop"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Leadership Workshop</h3>
                  <div className="flex items-center text-[#B75F24] mb-6">
                    <Users className="mr-2 h-5 w-5" />
                    <span className="text-sm">Group sessions (10-15 participants)</span>
                  </div>
                  <p className="mb-6">
                    Learn how to develop your leadership skills and make a meaningful impact in your community. This
                    intensive workshop covers the fundamentals of effective leadership, from communication and conflict
                    resolution to strategic planning and team building.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Develop a personal leadership philosophy and style</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Learn effective communication strategies for diverse audiences</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Master conflict resolution and negotiation techniques</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Build and motivate high-performing teams</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Duration</p>
                      <p className="font-bold">8 Weeks</p>
                    </div>
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Format</p>
                      <p className="font-bold">Weekly 2-hour sessions</p>
                    </div>
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Investment</p>
                      <p className="font-bold">$1,200</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/coaching/leadership"
                      className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-6 py-3 rounded font-medium"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Justice Advocacy */}
            <div className="bg-white rounded-lg overflow-hidden mb-12 text-black">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&auto=format&fit=crop"
                    alt="Social Justice Advocacy"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Social Justice Advocacy</h3>
                  <div className="flex items-center text-[#B75F24] mb-6">
                    <BookOpen className="mr-2 h-5 w-5" />
                    <span className="text-sm">Comprehensive course with practical applications</span>
                  </div>
                  <p className="mb-6">
                    A comprehensive course to add effective advocacy skills to your activism toolkit. Learn how to
                    create meaningful change through strategic advocacy, community organizing, and policy influence.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Understand the historical context of social justice movements</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Develop strategies for effective community organizing</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Learn how to influence policy and create systemic change</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Build coalitions and partnerships for greater impact</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Duration</p>
                      <p className="font-bold">12 Weeks</p>
                    </div>
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Format</p>
                      <p className="font-bold">Weekly 3-hour sessions</p>
                    </div>
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Investment</p>
                      <p className="font-bold">$1,800</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/coaching/advocacy"
                      className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-6 py-3 rounded font-medium"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Organizing */}
            <div className="bg-white rounded-lg overflow-hidden mb-12 text-black">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop"
                    alt="Community Organizing"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Community Organizing</h3>
                  <div className="flex items-center text-[#B75F24] mb-6">
                    <Users className="mr-2 h-5 w-5" />
                    <span className="text-sm">Hands-on training with real-world applications</span>
                  </div>
                  <p className="mb-6">
                    Practical strategies for building and sustaining grassroots movements for change. This program
                    provides hands-on experience in community organizing, from identifying issues to mobilizing
                    resources and creating sustainable movements.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Identify and analyze community issues and needs</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Develop strategies for mobilizing community resources</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Build and maintain effective community coalitions</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Create sustainable movements for long-term change</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Duration</p>
                      <p className="font-bold">10 Weeks</p>
                    </div>
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Format</p>
                      <p className="font-bold">Weekly 2.5-hour sessions</p>
                    </div>
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Investment</p>
                      <p className="font-bold">$1,500</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/coaching/organizing"
                      className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-6 py-3 rounded font-medium"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Speaking */}
            <div className="bg-white rounded-lg overflow-hidden text-black">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop"
                    alt="Public Speaking"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Public Speaking</h3>
                  <div className="flex items-center text-[#B75F24] mb-6">
                    <Award className="mr-2 h-5 w-5" />
                    <span className="text-sm">Master class with personalized feedback</span>
                  </div>
                  <p className="mb-6">
                    Master the art of compelling communication to amplify your message and inspire action. This program
                    focuses on developing your unique voice and presentation style to effectively communicate your
                    message to diverse audiences.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Develop your unique voice and presentation style</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Master storytelling techniques for maximum impact</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Learn to adapt your message for different audiences</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                      <p>Overcome anxiety and build confidence on stage</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Duration</p>
                      <p className="font-bold">6 Weeks</p>
                    </div>
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Format</p>
                      <p className="font-bold">Weekly 2-hour sessions</p>
                    </div>
                    <div className="bg-[#F5F1E6] p-4 rounded-lg text-center">
                      <p className="text-sm text-[#B75F24]">Investment</p>
                      <p className="font-bold">$1,000</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/coaching/speaking"
                      className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-6 py-3 rounded font-medium"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* One-on-One Mentorship */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-[#F5F1E6] text-black p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/3">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                    alt="One-on-One Mentorship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">One-on-One Mentorship</h2>
                <p className="text-lg mb-6">
                  For dedicated activists looking for personalized guidance, Rubin offers limited one-on-one mentorship
                  opportunities. This exclusive program is tailored to your specific needs and goals, providing direct
                  access to Rubin's expertise and experience.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                    <p>Personalized guidance tailored to your specific goals</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                    <p>Direct access to Rubin's expertise and experience</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                    <p>Ongoing support and accountability</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#B75F24] mt-1 mr-3 flex-shrink-0" />
                    <p>Exclusive resources and networking opportunities</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="bg-[#FBFAF5] p-4 rounded-lg text-center shadow-sm">
                    <p className="text-sm text-[#B75F24]">Duration</p>
                    <p className="font-bold">3 or 6 Months</p>
                  </div>
                  <div className="bg-[#FBFAF5] p-4 rounded-lg text-center shadow-sm">
                    <p className="text-sm text-[#B75F24]">Format</p>
                    <p className="font-bold">Bi-weekly 1-hour sessions</p>
                  </div>
                  <div className="bg-[#FBFAF5] p-4 rounded-lg text-center shadow-sm">
                    <p className="text-sm text-[#B75F24]">Investment</p>
                    <p className="font-bold">Starting at $3,000</p>
                  </div>
                </div>
                <p className="text-sm mb-6 text-black">
                  <strong>Note:</strong> Due to high demand and limited availability, one-on-one mentorship requires an
                  application process. Spaces are extremely limited.
                </p>
                <Link
                  href="/coaching/mentorship"
                  className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-6 py-3 rounded font-medium"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-black py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Students Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F5F1E6] p-6 rounded-lg shadow-md text-black">
                <div className="flex items-start mb-4">
                  <span className="text-[#B75F24] text-5xl font-serif leading-none">"</span>
                </div>
                <p className="text-lg mb-6">
                  Rubin's Leadership Workshop transformed how I approach community organizing. His insights and
                  practical guidance helped me develop the skills I needed to lead effectively and create real change.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FBFAF5]">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                      alt="Testimonial"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-bold">Jamal Washington</p>
                    <p className="text-sm text-[#B75F24]">Community Organizer, Chicago</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1E6] p-6 rounded-lg shadow-md text-black">
                <div className="flex items-start mb-4">
                  <span className="text-[#B75F24] text-5xl font-serif leading-none">"</span>
                </div>
                <p className="text-lg mb-6">
                  The Social Justice Advocacy program gave me the tools and confidence to effectively advocate for
                  policy changes in my community. Rubin's teaching style is engaging, practical, and inspiring.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FBFAF5]">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
                      alt="Testimonial"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-bold">Sarah Rodriguez</p>
                    <p className="text-sm text-[#B75F24]">Policy Advocate, Los Angeles</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1E6] p-6 rounded-lg shadow-md text-black">
                <div className="flex items-start mb-4">
                  <span className="text-[#B75F24] text-5xl font-serif leading-none">"</span>
                </div>
                <p className="text-lg mb-6">
                  The one-on-one mentorship with Rubin was life-changing. His personalized guidance helped me navigate
                  complex challenges and develop a clear vision for my work as an activist and community leader.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FBFAF5]">
                    <Image src="/young-man-professional-headshot.png" alt="Testimonial" width={40} height={40} />
                  </div>
                  <div>
                    <p className="font-bold">Marcus Johnson</p>
                    <p className="text-sm text-[#B75F24]">Executive Director, Youth Empowerment Coalition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Workshops */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Workshops</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#F5F1E6] rounded-lg overflow-hidden shadow-md text-black">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                  alt="Leadership Workshop"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#B75F24] text-white px-4 py-2">
                  <p className="font-bold">June 15, 2024</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Leadership Workshop</h3>
                <p className="flex items-center mb-4 text-[#B75F24]">
                  <MapPin className="h-4 w-4 mr-2" /> Howard University, Washington DC
                </p>
                <p className="mb-6">
                  An intensive 1-day workshop covering the fundamentals of effective leadership for social change.
                </p>
                <Link
                  href="/coaching/register"
                  className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-4 py-2 rounded font-medium text-sm"
                >
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F5F1E6] rounded-lg overflow-hidden shadow-md text-black">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
                  alt="Social Justice Summit"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#B75F24] text-white px-4 py-2">
                  <p className="font-bold">July 8-10, 2024</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Social Justice Summit</h3>
                <p className="flex items-center mb-4 text-[#B75F24]">
                  <MapPin className="h-4 w-4 mr-2" /> Atlanta, GA
                </p>
                <p className="mb-6">
                  A 3-day immersive experience focused on developing comprehensive social justice advocacy skills.
                </p>
                <Link
                  href="/coaching/register"
                  className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-4 py-2 rounded font-medium text-sm"
                >
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F5F1E6] rounded-lg overflow-hidden shadow-md text-black">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600&auto=format&fit=crop"
                  alt="Youth Leadership Conference"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#B75F24] text-white px-4 py-2">
                  <p className="font-bold">August 22, 2024</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Youth Leadership Conference</h3>
                <p className="flex items-center mb-4 text-[#B75F24]">
                  <MapPin className="h-4 w-4 mr-2" /> Chicago, IL
                </p>
                <p className="mb-6">
                  A special conference designed for young activists looking to develop their leadership skills and make
                  an impact.
                </p>
                <Link
                  href="/coaching/register"
                  className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-4 py-2 rounded font-medium text-sm"
                >
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#B75F24] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Develop Your Leadership Skills?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
              Join one of our coaching programs and learn how to make a meaningful impact in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/coaching/register"
                className="bg-[#FBFAF5] text-[#B75F24] hover:bg-[#F5F1E6] transition-colors px-8 py-3 rounded-lg font-medium"
              >
                Register for a Program
              </Link>
              <Link
                href="/contact"
                className="bg-black text-white hover:bg-black/80 transition-colors px-8 py-3 rounded-lg font-medium"
              >
                Contact Us for More Information
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
