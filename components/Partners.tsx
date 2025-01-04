'use client'
import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Partners() {
  const partners = [
    { id: 1, name: "شركة أرامكو", logo: "/logo (1).jpg" },
    { id: 2, name: "شركة سابك", logo: "/logo (1).jpg" },
    { id: 3, name: "البنك الأهلي", logo: "/logo (1).jpg" },
    { id: 4, name: "شركة المراعي", logo: "/logo (1).jpg" },
    { id: 5, name: "شركة الاتصالات", logo: "/logo (1).jpg" },
    { id: 6, name: "مجموعة صافولا", logo: "/logo (1).jpg" },
    { id: 7, name: "شركة الراجحي", logo: "/logo (1).jpg" },
    { id: 8, name: "شركة الملك فهد للطيران", logo: "/logo (1).jpg" },
    { id: 9, name: "شركة السويدي", logo: "/logo (1).jpg" },
    { id: 10, name: "شركة الراجحي", logo: "/logo (1).jpg" }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-[#00B272]" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003466] via-[#00B272] to-[#89C100] dark:from-white dark:via-[#00B272] dark:to-[#89C100] pb-10">
              شركاء النجاح
            </h2>
            <Star className="w-6 h-6 text-[#00B272]" />
          </div>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-rtl">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-32 h-32 mx-8 relative group"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0)
          }
          100% {
            transform: translateX(-50%)
          }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 30s linear infinite
        }
      `}</style>
    </section>
  )
}