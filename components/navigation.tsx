"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { useEffect } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()

  // Function to handle navigation and scroll to top
  const handleNavigation = (href: string) => {
    // If it's the same page, just scroll to top
    if (href === pathname) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  // Effect to scroll to top on route change
  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-4 shadow-md">
      <nav className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <Link
          href="/"
          className={`text-sm font-medium ${pathname === "/" ? "text-[#B75F24]" : "hover:text-gray-300"}`}
          onClick={() => handleNavigation("/")}
        >
          HOME
        </Link>
        <div className="relative group">
          <Link
            href="/about"
            className={`text-sm font-medium ${pathname === "/about" ? "text-[#B75F24]" : "hover:text-gray-300"}`}
            onClick={() => handleNavigation("/about")}
          >
            ABOUT
          </Link>
        </div>
        <div className="relative group">
          <Link
            href="/coaching"
            className={`text-sm font-medium ${pathname === "/coaching" ? "text-[#B75F24]" : "hover:text-gray-300"}`}
            onClick={() => handleNavigation("/coaching")}
          >
            COACHING
          </Link>
        </div>
        <Link
          href="/press"
          className={`text-sm font-medium ${pathname === "/press" ? "text-[#B75F24]" : "hover:text-gray-300"}`}
          onClick={() => handleNavigation("/press")}
        >
          MEDIUM
        </Link>

        {/* Logo in the middle for larger screens */}
        <Link href="/" className="hidden md:block text-center" onClick={() => handleNavigation("/")}>
          <h1 className="text-4xl font-serif italic tracking-wider mx-4">Rubin Williams</h1>
          <p className="text-sm text-gray-400 mt-1">Social Justice Speaker & Activist</p>
        </Link>

        <Link
          href="/store"
          className={`text-sm font-medium ${pathname === "/store" ? "text-[#B75F24]" : "hover:text-gray-300"}`}
          onClick={() => handleNavigation("/store")}
        >
          STORE
        </Link>

        <Link
          href="/contact"
          className={`text-sm font-medium ${pathname === "/contact" ? "text-[#B75F24]" : "hover:text-gray-300"}`}
          onClick={() => handleNavigation("/contact")}
        >
          CONTACT
        </Link>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          <Link href="#" className="bg-[#B75F24] rounded-full p-2 text-white hover:bg-[#a54e13] transition-colors">
            <Facebook size={18} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="bg-[#B75F24] rounded-full p-2 text-white hover:bg-[#a54e13] transition-colors">
            <Instagram size={18} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="bg-[#B75F24] rounded-full p-2 text-white hover:bg-[#a54e13] transition-colors">
            <Youtube size={18} />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
