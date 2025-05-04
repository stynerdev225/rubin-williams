"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative">
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
  )
}
