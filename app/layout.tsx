import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marlor Export Private Limited",
  description: "Building trust, delivering opportunities",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <a
          href="https://wa.me/917096443117"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <img
            src="https://cdn-icons-png.freepik.com/256/2496/2496112.png?semt=ais_hybrid"
            alt="Chat on WhatsApp"
            className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </a>
      </body>
    </html>
  )
}
