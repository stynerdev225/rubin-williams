// Developed by Stiner.dev
// Professional Web Developer
// Date: May 3, 2025
// Contact: https://stiner.dev

// Disclaimer: This code is provided "as is" without warranty of any kind, express or implied.
// The developer is not responsible for any content displayed on this website or any consequences
// arising from the use of this code. All content belongs to respective copyright holders.

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopButton from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Rubin Williams",
  description: "Social Justice Speaker & Activist"
}

// This component wraps the body to handle hydration errors from browser extensions
function BodyWrapper({ children, className }: { children: React.ReactNode, className: string }) {
  "use client";
  
  // Use React 18's useEffect to suppress hydration warnings from browser extensions
  // like CrazyEgg that add attributes to the body element
  React.useEffect(() => {
    // This runs after hydration and will suppress console errors
    // related to attributes added by browser extensions
  }, []);

  return (
    <body className={className} suppressHydrationWarning>
      {children}
    </body>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <BodyWrapper className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ScrollToTop />
        {children}
        <ScrollToTopButton />
      </BodyWrapper>
    </html>
  )
}
