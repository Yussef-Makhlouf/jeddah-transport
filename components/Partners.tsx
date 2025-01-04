'use client'
import Image from 'next/image'
import { Star, ArrowRight, ArrowLeft } from 'lucide-react'
import { useRef } from 'react'

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const partners = [
    { id: 1, name: "شركة أرامكو", logo: "/logo (1).jpg", description: "شريك استراتيجي في مجال الطاقة" },
    { id: 2, name: "شركة سابك", logo: "/logo (1).jpg", description: "شريك رئيسي في القطاع الصناعي" },
    { id: 3, name: "البنك الأهلي", logo: "/logo (1).jpg", description: "شريك مالي موثوق" },
    { id: 4, name: "شركة المراعي", logo: "/logo (1).jpg", description: "شريك في القطاع الغذائي" },
    { id: 5, name: "شركة الاتصالات", logo: "/logo (1).jpg", description: "شريك في قطاع الاتصالات" },
    { id: 6, name: "مجموعة صافولا", logo: "/logo (1).jpg", description: "شريك استراتيجي" },
    { id: 7, name: "شركة الراجحي", logo: "/logo (1).jpg", description: "شريك في قطاع البنوك" },
    { id: 8, name: "شركة الملك فهد للطيران", logo: "/logo (1).jpg", description: "شريك في قطاع النقل" },
    { id: 9, name: "شركة السويدي", logo: "/logo (1).jpg", description: "شريك في قطاع البناء" },
    { id: 10, name: "شركة الراجحي", logo: "/logo (1).jpg", description: "شريك في قطاع البنوك" }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-[#00B272]" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003466] via-[#00B272] to-[#89C100] py-4">
              شركاء النجاح
            </h2>
            <Star className="w-6 h-6 text-[#00B272]" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          نفتخر بالثقة الممنوحة لنا من قبل الشركات العالمية الرائدة عبر رحلة تاريخنا: شركاء موثوق بهم يقودوننا نحو مستقبل مشرق ومزدهر.          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-[#00B272] hover:text-white transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-[#00B272] hover:text-white transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto hide-scrollbar flex gap-8 px-4 py-8 snap-x snap-mandatory"
          >
            {partners.map((partner) => (
              <div 
                key={partner.id}
                className="min-w-[300px] snap-center"
              >
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="h-32 relative mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-[#003466] mb-2">{partner.name}</h3>
                    <p className="text-gray-600 text-sm">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none
        }
        .hide-scrollbar {
          -ms-overflow-style: none
          scrollbar-width: none
        }
      `}</style>
    </section>
  )
}