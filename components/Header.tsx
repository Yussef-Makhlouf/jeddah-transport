'use client'
import Link from 'next/link'

import { Menu, Code, ChevronDown, Terminal, Sun, Moon, Languages, Phone, Package, Cloud, Database } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
// import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [lang, setLang] = useState('ar')

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = {
    'الخدمات البرمجية': [
      { name: 'تطوير المتاجر الإلكترونية', icon: Package, color: 'text-[#00B272]' },
      { name: 'تطوير المواقع المخصصة', icon: Code, color: 'text-[#89C100]' },
      { name: 'تطوير تطبيقات الجوال', icon: Terminal, color: 'text-[#00A4D6]' },
      { name: 'تطوير أنظمة ال ERP', icon: Database, color: 'text-[#003466]' },
    ],
    'خدمات التصميم': [
      { name: 'تصميم الهوية التجارية', icon: Code, color: 'text-[#00B272]' },
      { name: 'تصميم الموشن جرافيك', icon: Code, color: 'text-[#89C100]' },
    ],
    'خدمات التسويق': [
      { name: 'التسويق الرقمي', icon: Cloud, color: 'text-[#00A4D6]' },
      { name: 'إدارة حسابات التواصل الإجتماعي', icon: Cloud, color: 'text-[#003466]' },
    ],
  }

  const ServicesDropdown = () => (
    <div 
      className={cn(
        "absolute top-full right-0 mt-2 w-80 rounded-2xl shadow-2xl border overflow-hidden dropdown-fade-in",
        "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl",
        "border-[#00A4D6]/10 dark:border-[#00A4D6]/20"
      )}
      onMouseEnter={() => setServicesOpen(true)}
      onMouseLeave={() => setServicesOpen(false)}
    >
      {Object.entries(services).map(([category, items]) => (
        <div key={category} className="p-4 hover:bg-[#003466]/5 dark:hover:bg-[#00A4D6]/5 transition-colors">
          <h3 className="text-[#003466] dark:text-[#00A4D6] font-bold mb-3 flex items-center gap-2">
            <Code className="w-4 h-4" />
            {category}
          </h3>
          <div className="space-y-2">
            {items.map((item) => (
              <Link
                key={item.name}
                href="#"
                className={cn(
                  "flex items-center gap-2 text-[#003466]/80 dark:text-gray-300",
                  "hover:text-[#00B272] dark:hover:text-[#00B272]",
                  "text-sm p-2 rounded-lg transition-all duration-300",
                  "hover:bg-[#00B272]/5 dark:hover:bg-[#00B272]/10"
                )}
              >
                <item.icon className={cn("w-4 h-4", item.color)} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-500",
      scrolled 
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-2" 
        : "bg-gradient-to-r from-[#003466]/90 to-[#00A4D6]/90 backdrop-blur-sm py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 overflow-hidden rounded-xl bg-gradient-to-br from-[#003466] to-[#00A4D6] p-3">
              <Terminal className="w-full h-full text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className={cn(
              "flex flex-col",
              scrolled ? "text-[#003466] dark:text-white" : "text-white"
            )}>
              <span className="text-2xl font-bold tracking-wide">ترميز كود</span>
              <span className="text-sm font-medium opacity-90">حلول برمجية متكاملة</span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Main Navigation Links */}
            <Link
              href="/"
              className={cn(
                "relative group",
                scrolled ? "text-[#003466] dark:text-white" : "text-white",
                "hover:text-[#00B272] transition-colors duration-300"
              )}
            >
              <span>الرئيسية</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B272] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>

            <Link
              href="/about"
              className={cn(
                "relative group",
                scrolled ? "text-[#003466] dark:text-white" : "text-white",
                "hover:text-[#00B272] transition-colors duration-300"
              )}
            >
              <span>من نحن</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B272] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>

            {/* Services Dropdown (existing code) */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={cn(
                "flex items-center gap-2 font-medium",
                scrolled 
                  ? "text-[#003466] dark:text-white" 
                  : "text-white",
                "hover:text-[#00B272] dark:hover:text-[#00B272]"
              )}>
                خدماتنا
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  servicesOpen && "rotate-180"
                )} />
              </button>
              {servicesOpen && <ServicesDropdown />}
            </div>

            <Link
              href="/projects"
              className={cn(
                "relative group",
                scrolled ? "text-[#003466] dark:text-white" : "text-white",
                "hover:text-[#00B272] transition-colors duration-300"
              )}
            >
              <span>أعمالنا</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B272] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>

            <Link
              href="/blog"
              className={cn(
                "relative group",
                scrolled ? "text-[#003466] dark:text-white" : "text-white",
                "hover:text-[#00B272] transition-colors duration-300"
              )}
            >
              <span>المدونة</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B272] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>

            <Link
              href="/contact"
              className={cn(
                "relative group",
                scrolled ? "text-[#003466] dark:text-white" : "text-white",
                "hover:text-[#00B272] transition-colors duration-300"
              )}
            >
              <span>تواصل معنا</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B272] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>

            {/* Theme & Language Toggles */}
            <div className="flex items-center gap-4">
            <button
  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  className={cn(
    "p-2 rounded-lg transition-all duration-300",
    "hover:bg-[#00B272]/10 dark:hover:bg-[#00B272]/20",
    scrolled 
      ? "text-[#003466] dark:text-white" 
      : "text-white"
  )}
>
  {mounted && theme === 'dark' ? 
    <Sun className="w-5 h-5" /> : 
    <Moon className="w-5 h-5" />
  }
</button>
              
              <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  "hover:bg-[#00B272]/10 dark:hover:bg-[#00B272]/20",
                  scrolled 
                    ? "text-[#003466] dark:text-white" 
                    : "text-white"
                )}
              >
                <Languages className="w-5 h-5" />
              </button>
            </div>

            {/* Contact Button */}
            <Link
              href="tel:+20123456789"
              className={cn(
                "bg-[#00B272] hover:bg-[#89C100] text-white",
                "px-6 py-2.5 rounded-xl font-medium",
                "transition-all duration-300 shadow-lg hover:shadow-xl",
                "flex items-center gap-2 group"
              )}
            >
              <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>اتصل بنا</span>
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2.5 rounded-xl",
              "hover:bg-[#00B272]/10 dark:hover:bg-[#00B272]/20",
              scrolled 
                ? "text-[#003466] dark:text-white" 
                : "text-white"
            )}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full mt-2 mx-4">
            <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-[#00A4D6]/10">
              {Object.entries(services).map(([category, items]) => (
                <div key={category} className="mb-6 last:mb-0">
                  <h3 className="text-[#003466] dark:text-[#00A4D6] font-bold mb-2">{category}</h3>
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href="#"
                      className="flex items-center gap-2 text-[#003466]/80 dark:text-gray-300 hover:text-[#00B272] py-2 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className={item.color} />
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
