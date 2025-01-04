'use client'
import React from 'react'
import AboutUs from "@/components/AboutUs"
import Blog from "@/components/Blog"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HowWeHelp from "@/components/HowWeHelp"
import IndustriesWeServe from "@/components/IndustriesWeServe"
import Partners from "@/components/Partners"
// import SaudiCities from "@/components/SaudiCities"
import SaudiEgyptLogistics from "@/components/SaudiEgyptLogistics"
import Services from "@/components/Services"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"
import ServiceShowcase from "@/components/ServiceShowcase"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section with Full Height */}
      <section className="relative">
        <Hero />
      </section>

      {/* Main Content with Gradient Background */}
      <div className="relative bg-gradient-to-b from-amber-50 via-white to-rose-50">
        {/* About Us Section with Shapes */}
        <div className="relative z-10">
          <AboutUs />
        </div>

        {/* Why Choose Us Section with Overlap */}
        <div className="relative z-20 -mt-20">
          <WhyChooseUs />
        </div>
        <HowWeHelp />
        <IndustriesWeServe />
        <SaudiEgyptLogistics />
        {/* Services Section with Background Pattern */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-rose-100/20"></div>
          <Services />
        </div>
        <Stats  />
        <Testimonials />
        <ServiceShowcase />

        {/* Blog Section with Floating Effect */}
        <div className="relative z-20 -mt-16">
          <Blog />
        </div>
      </div>
      <Partners />

      {/* Footer with Wave Pattern */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Global Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>
    </main>
  )
}