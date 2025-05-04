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
import { Calendar, ExternalLink } from "lucide-react"

export default function MediumPage() {
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
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop"
              alt="Medium Articles"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">MEDIUM ARTICLES</h1>
              <p className="text-xl md:text-2xl mt-4 max-w-2xl text-white drop-shadow-lg">
                Thoughts, insights, and stories from Rubin Williams
              </p>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden shadow-lg text-black">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <Image
                  src="https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=1200&auto=format&fit=crop"
                  alt="The Legacy of the Black Panthers"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center text-[#B75F24] mb-4">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span className="text-sm">May 1, 2024</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-black">
                  The Legacy of the Black Panthers: Misunderstood Revolutionaries
                </h2>
                <p className="text-lg mb-6 text-black">
                  The Black Panthers Party has been widely misrepresented in mainstream media and historical accounts.
                  In this article, I share my personal experiences as a former member and explore the true legacy of
                  this revolutionary organization.
                </p>
                <p className="mb-8 text-black">
                  Beyond the sensationalized images of armed militants, the Black Panthers created vital community
                  programs, from free breakfast initiatives for children to health clinics in underserved neighborhoods.
                  Their vision for community self-determination and economic justice remains relevant today.
                </p>
                <div className="space-y-6">
                  <Link
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-6 py-3 rounded font-medium"
                  >
                    Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>

                  <div className="bg-gradient-to-r from-[#B75F24] to-[#a54e13] p-4 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-bold text-white">Discover More Insights</p>
                        <p className="text-white/80 text-sm">
                          Explore Rubin's complete collection of articles on social justice and activism
                        </p>
                      </div>
                      <Link
                        href="/press#recent-articles"
                        className="bg-white text-[#B75F24] hover:bg-gray-100 transition-colors px-4 py-2 rounded font-medium text-sm whitespace-nowrap"
                      >
                        View All Articles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Articles */}
        <div className="bg-white py-16 text-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">Recent Articles</h2>
              <div className="w-24 h-1 bg-[#B75F24] mx-auto"></div>
              <p className="text-xl mt-6 max-w-2xl mx-auto">
                Explore Rubin's latest thoughts and insights on social justice, leadership, and activism.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-[#F5F1E6] shadow-md rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600&auto=format&fit=crop"
                    alt="Youth Activism Today"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#B75F24] mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-xs">April 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Youth Activism Today: Lessons from the Past</h3>
                  <p className="mb-6 text-black">
                    How today's young activists are building on the foundations laid by previous generations, and what
                    they can learn from our successes and failures.
                  </p>
                  <Link
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
                  >
                    Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-[#F5F1E6] shadow-md rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=600&auto=format&fit=crop"
                    alt="Education Behind Bars"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#B75F24] mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-xs">March 22, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Education Behind Bars: My Journey to Liberation</h3>
                  <p className="mb-6 text-black">
                    How I transformed my time in prison into an opportunity for intellectual growth, and why education
                    is a powerful tool for personal and collective liberation.
                  </p>
                  <Link
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
                  >
                    Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-[#F5F1E6] shadow-md rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop"
                    alt="Community Organizing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#B75F24] mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-xs">February 28, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">
                    The Art of Community Organizing: 5 Essential Strategies
                  </h3>
                  <p className="mb-6 text-black">
                    Practical strategies for effective community organizing, drawn from decades of experience in
                    grassroots movements for social change.
                  </p>
                  <Link
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
                  >
                    Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Article 4 */}
              <div className="bg-[#F5F1E6] shadow-md rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
                    alt="Leadership for Social Change"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#B75F24] mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-xs">January 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">Leadership for Social Change: Beyond Charisma</h3>
                  <p className="mb-6 text-black">
                    Why effective leadership for social change requires more than charisma, and how to develop the
                    skills and mindset needed for sustainable impact.
                  </p>
                  <Link
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
                  >
                    Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Article 5 */}
              <div className="bg-[#F5F1E6] shadow-md rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=600&auto=format&fit=crop"
                    alt="Civil Rights Movement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#B75F24] mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-xs">December 10, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">The Civil Rights Movement: Untold Stories</h3>
                  <p className="mb-6 text-black">
                    Beyond the iconic figures, there were countless unsung heroes who made significant contributions to
                    the Civil Rights Movement. Here are some of their stories.
                  </p>
                  <Link
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
                  >
                    Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Article 6 */}
              <div className="bg-[#F5F1E6] shadow-md rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop"
                    alt="Public Speaking"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#B75F24] mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="text-xs">November 5, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">
                    Finding Your Voice: Public Speaking for Activists
                  </h3>
                  <p className="mb-6 text-black">
                    How to develop your unique voice and presentation style to effectively communicate your message and
                    inspire action for social change.
                  </p>
                  <Link
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
                  >
                    Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 py-16 bg-black">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Social Justice"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B75F24]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Social Justice</h3>
                <p className="text-sm text-white/80">12 articles</p>
              </div>
            </Link>

            <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Leadership"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B75F24]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Leadership</h3>
                <p className="text-sm text-white/80">8 articles</p>
              </div>
            </Link>

            <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Black History"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Black History</h3>
                <p className="text-sm text-white/80">15 articles</p>
              </div>
            </Link>

            <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Activism"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B75F24]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Activism</h3>
                <p className="text-sm text-white/80">10 articles</p>
              </div>
            </Link>

            <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Education"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B75F24]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Education</h3>
                <p className="text-sm text-white/80">7 articles</p>
              </div>
            </Link>

            <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Community"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B75F24]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Community</h3>
                <p className="text-sm text-white/80">9 articles</p>
              </div>
            </Link>

            <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Personal Stories"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B75F24]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Personal Stories</h3>
                <p className="text-sm text-white/80">6 articles</p>
              </div>
            </Link>

            <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
              <Image
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Public Speaking"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B75F24]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Public Speaking</h3>
                <p className="text-sm text-white/80">5 articles</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#B75F24] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl mb-8">Subscribe to get notified when new articles are published on Medium.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-black"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-black/80 transition-colors px-6 py-3 rounded-lg font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
