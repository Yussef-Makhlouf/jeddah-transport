'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-3xl font-bold text-white hover:scale-105 transition-transform duration-300 drop-shadow-lg"
          >
            شركة النقل
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {[
              { href: "/", label: "الرئيسية" },
              { href: "#about", label: "من نحن" },
              { href: "#services", label: "خدماتنا" },
              { href: "#blog", label: "المدونة" },
              { href: "#contact", label: "اتصل بنا" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-amber-200 transition-all duration-300 font-medium relative group text-lg"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-white text-amber-600 px-6 py-2 rounded-full font-medium hover:bg-amber-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              تواصل معنا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-gradient-to-b from-amber-600/95 to-rose-500/95 backdrop-blur-lg shadow-xl">
            <nav className="flex flex-col space-y-4 p-6">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "#about", label: "من نحن" },
                { href: "#services", label: "خدماتنا" },
                { href: "#blog", label: "المدونة" },
                { href: "#contact", label: "اتصل بنا" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-amber-200 transition-all duration-300 text-right text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-white text-amber-600 px-6 py-2 rounded-full font-medium hover:bg-amber-100 transition-colors duration-300 text-center shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
