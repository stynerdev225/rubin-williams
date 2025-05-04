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
import { ShoppingCart, Star, ChevronDown, Filter, ArrowRight } from "lucide-react"

export default function StorePage() {
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
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2070&auto=format&fit=crop"
              alt="Rubin Williams Store"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">STORE</h1>
              <p className="text-xl md:text-2xl mt-4 max-w-2xl text-white drop-shadow-lg">
                Books, merchandise, and resources to support your journey
              </p>
            </div>
          </div>
        </div>

        {/* Featured Product */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden shadow-lg text-black">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <div className="relative aspect-[3/4] md:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
                    alt="Revolutionary Reflections: My Journey with the Black Panthers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#B75F24] text-white px-3 py-1 rounded">
                    <p className="text-sm font-bold">NEW RELEASE</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2 text-black">
                  Revolutionary Reflections: My Journey with the Black Panthers
                </h2>
                <div className="flex items-center mb-4">
                  <div className="flex text-[#B75F24]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-[#B75F24] ml-2">24 reviews</span>
                </div>
                <p className="text-2xl font-bold mb-6">$24.99</p>
                <p className="text-lg mb-6 text-black">
                  In this powerful memoir, Rubin Williams shares his personal journey as a member of the Black Panthers
                  Party, offering an insider's perspective on one of the most misunderstood revolutionary organizations
                  in American history.
                </p>
                <p className="mb-8 text-black">
                  From community programs to political education, Williams reveals the true mission of the Panthers and
                  reflects on the lessons that remain relevant for today's activists and change-makers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors text-white px-6 py-3 rounded font-medium flex items-center justify-center">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </button>
                  <button className="border border-black hover:bg-black hover:text-white transition-colors px-6 py-3 rounded font-medium">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="bg-white py-16 text-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold mb-12 md:mb-0">Shop by Category</h2>
              <div className="flex items-center mt-4 md:mt-0">
                <button className="flex items-center text-sm bg-[#FBFAF5] text-black px-4 py-2 rounded mr-4">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </button>
                <button className="flex items-center text-sm bg-[#FBFAF5] text-black px-4 py-2 rounded">
                  Sort by: Featured <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <Link href="#books" className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
                    alt="Books"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">Books</h3>
              </Link>

              <Link href="#apparel" className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop"
                    alt="Apparel"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">Apparel</h3>
              </Link>

              <Link href="#digital" className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
                    alt="Digital Resources"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">Digital Resources</h3>
              </Link>

              <Link href="#accessories" className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=600&auto=format&fit=crop"
                    alt="Accessories"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">Accessories</h3>
              </Link>
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div id="books" className="container mx-auto px-4 py-16 bg-black">
          <h2 className="text-3xl font-bold mb-12">Books</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Book 1 */}
            <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md text-black">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
                  alt="Revolutionary Reflections"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Revolutionary Reflections</h3>
                <p className="text-[#B75F24] mb-4">Hardcover</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">$24.99</p>
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md text-black">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
                  alt="Leadership for Social Change"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Leadership for Social Change</h3>
                <p className="text-[#B75F24] mb-4">Paperback</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">$18.99</p>
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md text-black">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop"
                  alt="Community Organizing: A Practical Guide"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Organizing: A Practical Guide</h3>
                <p className="text-[#B75F24] mb-4">Paperback</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">$19.99</p>
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Book 4 */}
            <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md text-black">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600&auto=format&fit=crop"
                  alt="Finding Your Voice: Public Speaking for Activists"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Finding Your Voice: Public Speaking for Activists</h3>
                <p className="text-[#B75F24] mb-4">Paperback</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">$16.99</p>
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/store/books"
              className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
            >
              View All Books <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Apparel Section */}
        <div id="apparel" className="bg-white py-16 border-t border-[#FBFAF5] text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Apparel</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Apparel 1 */}
              <div className="bg-[#FBFAF5] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=x2geh"
                    alt="Solidarity T-Shirt"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Solidarity T-Shirt</h3>
                  <p className="text-[#B75F24] mb-4">100% Organic Cotton</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">$29.99</p>
                    <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Apparel 2 */}
              <div className="bg-[#FBFAF5] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=krw7q"
                    alt="Revolution Hoodie"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Revolution Hoodie</h3>
                  <p className="text-[#B75F24] mb-4">80% Cotton, 20% Polyester</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">$49.99</p>
                    <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Apparel 3 */}
              <div className="bg-[#FBFAF5] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=pxpfl"
                    alt="Black Power Cap"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Black Power Cap</h3>
                  <p className="text-[#B75F24] mb-4">Adjustable Size</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">$24.99</p>
                    <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Apparel 4 */}
              <div className="bg-[#FBFAF5] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=ly8s1"
                    alt="Activist Tote Bag"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Activist Tote Bag</h3>
                  <p className="text-[#B75F24] mb-4">100% Recycled Materials</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">$19.99</p>
                    <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                      <ShoppingCart className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/store/apparel"
                className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
              >
                View All Apparel <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Digital Resources Section */}
        <div id="digital" className="container mx-auto px-4 py-16 bg-black border-t border-[#F5F1E6]">
          <h2 className="text-3xl font-bold mb-12">Digital Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital 1 */}
            <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md text-black">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?key=jzh94"
                  alt="Leadership Masterclass"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#B75F24]/80 backdrop-blur-sm p-4 rounded-full">
                    <p className="font-bold text-white">COURSE</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Leadership Masterclass</h3>
                <p className="text-[#B75F24] mb-4">10 Video Lessons + Workbook</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">$99.99</p>
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Digital 2 */}
            <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md text-black">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?key=i7h7n"
                  alt="Community Organizing Toolkit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#B75F24]/80 backdrop-blur-sm p-4 rounded-full">
                    <p className="font-bold text-white">E-BOOK</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Organizing Toolkit</h3>
                <p className="text-[#B75F24] mb-4">PDF + Templates</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">$29.99</p>
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Digital 3 */}
            <div className="bg-[#F5F1E6] border border-[#F5F1E6] rounded-lg overflow-hidden group shadow-md text-black">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?key=206c4"
                  alt="Social Justice Lecture Series"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#B75F24]/80 backdrop-blur-sm p-4 rounded-full">
                    <p className="font-bold text-white">AUDIO</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Social Justice Lecture Series</h3>
                <p className="text-[#B75F24] mb-4">12 Audio Lectures</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">$49.99</p>
                  <button className="bg-[#B75F24] hover:bg-[#a54e13] transition-colors p-2 rounded">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/store/digital"
              className="inline-flex items-center text-[#B75F24] hover:text-[#a54e13] transition-colors"
            >
              View All Digital Resources <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#B75F24] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Join Our Community</h2>
              <p className="text-xl mb-8 text-white">
                Subscribe to our newsletter for exclusive discounts, new product announcements, and social justice
                resources.
              </p>
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
