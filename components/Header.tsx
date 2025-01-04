"use client";
import Link from "next/link";

import {
  Menu,
  Code,
  ChevronDown,
  Terminal,
  Sun,
  Moon,
  Languages,
  Phone,
  Package,
  Cloud,
  Database,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// import Image from 'next/image'
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";``
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState("ar");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = {
    "الخدمات البرمجية": [
      {
        name: "تطوير المتاجر الإلكترونية",
        icon: Package,
        color: "text-[#00B272]",
      },
      { name: "تطوير المواقع المخصصة", icon: Code, color: "text-[#89C100]" },
      { name: "تطوير تطبيقات الجوال", icon: Terminal, color: "text-[#00A4D6]" },
      { name: "تطوير أنظمة ال ERP", icon: Database, color: "text-[#003466]" },
    ],
    "خدمات التصميم": [
      { name: "تصميم الهوية التجارية", icon: Code, color: "text-[#00B272]" },
      { name: "تصميم الموشن جرافيك", icon: Code, color: "text-[#89C100]" },
    ],
    "خدمات التسويق": [
      { name: "التسويق الرقمي", icon: Cloud, color: "text-[#00A4D6]" },
      {
        name: "إدارة حسابات التواصل الإجتماعي",
        icon: Cloud,
        color: "text-[#003466]",
      },
    ],
  };

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
        <div
          key={category}
          className="p-4 hover:bg-[#003466]/5 dark:hover:bg-[#00A4D6]/5 transition-colors"
        >
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
  );

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-2"
          : "bg-gradient-to-r from-[#003466]/90 to-[#00A4D6]/90 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 overflow-hidden rounded-xl bg-gradient-to-br from-[#003466] to-[#00A4D6] p-3">
              <Terminal className="w-full h-full text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div
              className={cn(
                "flex flex-col",
                scrolled ? "text-[#003466] dark:text-white" : "text-white"
              )}
            >
              <span className="text-2xl font-bold tracking-wide">
                ترميز كود
              </span>
              <span className="text-sm font-medium opacity-90">
                حلول برمجية متكاملة
              </span>
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
              <button
                className={cn(
                  "flex items-center gap-2 font-medium",
                  scrolled ? "text-[#003466] dark:text-white" : "text-white",
                  "hover:text-[#00B272] dark:hover:text-[#00B272]"
                )}
              >
                خدماتنا
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    servicesOpen && "rotate-180"
                  )}
                />
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
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  "hover:bg-[#00B272]/10 dark:hover:bg-[#00B272]/20",
                  scrolled ? "text-[#003466] dark:text-white" : "text-white"
                )}
              >
                {mounted && theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  "hover:bg-[#00B272]/10 dark:hover:bg-[#00B272]/20",
                  scrolled ? "text-[#003466] dark:text-white" : "text-white"
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
              scrolled ? "text-[#003466] dark:text-white" : "text-white"
            )}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 h-[calc(100vh-72px)] overflow-y-auto">
            <nav className="container mx-auto p-4 space-y-6">
              {/* Main Navigation Links */}
              <div className="flex flex-col space-y-2">
                {/* Regular Links */}
                <Link href="/" className="p-3 rounded-xl text-[#003466] dark:text-white hover:bg-[#00B272]/10 transition-colors">
                  الرئيسية
                </Link>
                <Link href="/about" className="p-3 rounded-xl text-[#003466] dark:text-white hover:bg-[#00B272]/10 transition-colors">
                  من نحن
                </Link>

                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full p-3 rounded-xl text-[#003466] dark:text-white hover:bg-[#00B272]/10 transition-colors flex items-center justify-between"
                  >
                    <span>خدماتنا</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 rounded-xl bg-gray-50 dark:bg-gray-800/50"
                      >
                        {Object.entries(services).map(([category, items]) => (
                          <div key={category} className="p-4 border-b last:border-0 border-gray-100 dark:border-gray-700">
                            <h3 className="text-[#00B272] font-bold mb-3">{category}</h3>
                            <div className="space-y-2">
                              {items.map((item) => (
                                <Link
                                  key={item.name}
                                  href="#"
                                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 text-[#003466]/80 dark:text-gray-300"
                                  onClick={() => {
                                    setServicesOpen(false)
                                    setIsMenuOpen(false)
                                  }}
                                >
                                  <item.icon className={`w-5 h-5 ${item.color}`} />
                                  <span>{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/projects" className="p-3 rounded-xl text-[#003466] dark:text-white hover:bg-[#00B272]/10 transition-colors">
                  أعمالنا
                </Link>
                <Link href="/blog" className="p-3 rounded-xl text-[#003466] dark:text-white hover:bg-[#00B272]/10 transition-colors">
                  المدونة
                </Link>
                <Link href="/contact" className="p-3 rounded-xl text-[#003466] dark:text-white hover:bg-[#00B272]/10 transition-colors">
                  تواصل معنا
                </Link>
              </div>

              {/* Controls Section */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex gap-2">
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-3 rounded-xl hover:bg-[#00B272]/10 text-[#003466] dark:text-white"
                  >
                    {mounted && theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                  
                  <button
                    onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                    className="p-3 rounded-xl hover:bg-[#00B272]/10 text-[#003466] dark:text-white"
                  >
                    <Languages className="w-5 h-5" />
                  </button>
                </div>

                <Link
                  href="tel:+20123456789"
                  className="bg-[#00B272] hover:bg-[#89C100] text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل بنا</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
