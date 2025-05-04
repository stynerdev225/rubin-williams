// Developed by Stiner.dev
// Professional Web Developer
// Date: May 3, 2025
// Contact: https://stiner.dev

// Disclaimer: This code is provided "as is" without warranty of any kind, express or implied.
// The developer is not responsible for any content displayed on this website or any consequences
// arising from the use of this code. All content belongs to respective copyright holders.

import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Calendar, Users, BookOpen, Send } from "lucide-react"

export default function ContactPage() {
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
          <div className="relative h-[40vh] md:h-[50vh]">
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop"
              alt="Rubin Williams Speaking"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">CONTACT & BOOKING</h1>
              <p className="text-xl md:text-2xl mt-4 max-w-2xl text-white drop-shadow-lg">
                Bring Rubin Williams to your event, school, or organization to share powerful stories and insights on
                social justice and leadership.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Book Rubin for Your Event</h2>
              <p className="text-lg mb-8">
                Fill out the form below to inquire about booking Rubin Williams for speaking engagements, workshops, or
                educational events.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#FBFAF5] text-black rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#FBFAF5] text-black rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 bg-[#FBFAF5] text-black rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="w-full px-4 py-3 bg-[#FBFAF5] text-black rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium mb-2">
                    Event Type *
                  </label>
                  <select id="event-type" className="w-full px-4 py-3 bg-[#FBFAF5] text-black rounded-md" required>
                    <option value="">Select an option</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="workshop">Workshop/Seminar</option>
                    <option value="educational">Educational Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Preferred Date(s)
                  </label>
                  <input
                    type="text"
                    id="date"
                    className="w-full px-4 py-3 bg-[#FBFAF5] text-black rounded-md"
                    placeholder="MM/DD/YYYY or flexible"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Event Details *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#FBFAF5] text-black rounded-md"
                    placeholder="Please provide details about your event, audience, and what you're hoping Rubin can address."
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-8 py-3 rounded-md font-medium flex items-center"
                  >
                    Submit Inquiry <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="bg-[#F5F1E6] text-black p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Services Offered</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#B75F24] p-3 rounded-full text-white mr-4">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Speaking Engagements</h4>
                      <p className="mt-2">
                        Keynote addresses, panel discussions, and interactive presentations tailored to your audience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#B75F24] p-3 rounded-full text-white mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Workshops & Seminars</h4>
                      <p className="mt-2">
                        In-depth educational sessions on social justice, leadership, and community organizing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#B75F24] p-3 rounded-full text-white mr-4">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Educational Programs</h4>
                      <p className="mt-2">Curriculum-aligned presentations for schools, colleges, and universities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black p-8 rounded-lg border border-[#B75F24]">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#B75F24] mr-3" />
                    <a href="mailto:booking@rubinwilliams.org" className="hover:text-[#B75F24] transition-colors">
                      booking@rubinwilliams.org
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#B75F24] mr-3" />
                    <a href="tel:+15551234567" className="hover:text-[#B75F24] transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#B75F24] mr-3" />
                    <span>Oakland, California</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=600&auto=format&fit=crop"
                      alt="Map of Oakland, California"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-[#F5F1E6] py-16 text-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">What Event Organizers Say</h2>
              <div className="w-24 h-1 bg-[#B75F24] mx-auto"></div>
              <p className="text-xl mt-6 max-w-2xl mx-auto">
                Hear from those who have experienced Rubin's powerful presentations and workshops firsthand.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <span className="text-[#B75F24] text-5xl font-serif leading-none">"</span>
                </div>
                <p className="text-lg mb-6">
                  Rubin's keynote address at our university's Black History Month celebration was powerful and
                  transformative. Students and faculty alike were moved by his personal story and insights.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
                      alt="Dr. Alicia Johnson"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-bold">Dr. Alicia Johnson</p>
                    <p className="text-sm text-[#B75F24]">Howard University</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <span className="text-[#B75F24] text-5xl font-serif leading-none">"</span>
                </div>
                <p className="text-lg mb-6">
                  The leadership workshop Rubin conducted for our community organizers was exactly what we needed. His
                  practical approach and wealth of experience made for an incredibly valuable session.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image src="/latino-man-headshot.png" alt="Miguel Sanchez" width={40} height={40} />
                  </div>
                  <div>
                    <p className="font-bold">Miguel Sanchez</p>
                    <p className="text-sm text-[#B75F24]">Community Action Network, Chicago</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <span className="text-[#B75F24] text-5xl font-serif leading-none">"</span>
                </div>
                <p className="text-lg mb-6">
                  Booking Rubin for our annual conference was one of the best decisions we made. His presentation was
                  engaging, thought-provoking, and left our attendees inspired to take action.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                      alt="Jennifer Lee"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-bold">Jennifer Lee</p>
                    <p className="text-sm text-[#B75F24]">Social Justice Coalition, San Francisco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black p-6 rounded-lg border border-[#B75F24]">
              <h3 className="text-xl font-bold mb-3">What are Rubin's speaking fees?</h3>
              <p>
                Speaking fees vary depending on the type of event, location, duration, and specific requirements. Please
                contact us with your event details for a customized quote.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-[#B75F24]">
              <h3 className="text-xl font-bold mb-3">How far in advance should we book?</h3>
              <p>
                We recommend booking at least 2-3 months in advance to secure your preferred date, though we
                occasionally have last-minute availability. Popular dates like Black History Month fill up quickly.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-[#B75F24]">
              <h3 className="text-xl font-bold mb-3">Does Rubin travel internationally?</h3>
              <p>
                Yes, Rubin is available for international speaking engagements. Additional travel arrangements and
                considerations will apply for international bookings.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-[#B75F24]">
              <h3 className="text-xl font-bold mb-3">Can Rubin tailor his presentation to our audience?</h3>
              <p>
                Absolutely. Rubin customizes each presentation to meet the specific needs and interests of your
                audience, whether they are students, professionals, activists, or community members.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#B75F24] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Book Rubin for Your Event?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
              Contact us today to check availability and discuss how Rubin can bring his powerful message to your
              audience.
            </p>
            <a
              href="#top"
              className="bg-[#FBFAF5] text-[#B75F24] hover:bg-white transition-colors px-8 py-3 rounded-lg font-medium inline-block"
            >
              Submit an Inquiry
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
