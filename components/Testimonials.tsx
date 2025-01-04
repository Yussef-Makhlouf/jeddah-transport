'use client'
import { Star, Quote, ArrowRight, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const testimonials = [
    {
      id: 1,
      name: "محمد العمري",
      position: "المدير التنفيذي",
      company: "شركة التقنية المتقدمة",
      image: "/testimonials/client1.jpg",
      rating: 5,
      text: "تجربة رائعة مع فريق محترف. تم تنفيذ المشروع بدقة عالية وفي الوقت المحدد"
    },
    {
      id: 2,
      name: "سارة الأحمد",
      position: "مدير التسويق",
      company: "مجموعة الخليج",
      image: "/testimonials/client2.jpg",
      rating: 5,
      text: "خدمة ممتازة وتواصل مستمر. النتائج فاقت توقعاتنا"
    },
    {
      id: 3,
      name: "أحمد السعيد",
      position: "مؤسس",
      company: "منصة التعليم الذكي",
      image: "/testimonials/client3.jpg",
      rating: 5,
      text: "شريك موثوق به في رحلة نجاحنا. نتطلع للمزيد من التعاون"
    },
    {
      id: 4,
      name: "محمد العمري",
      position: "المدير التنفيذي",
      company: "شركة التقنية المتقدمة",
      image: "/testimonials/client1.jpg",   
    
      rating: 5,
      text: "تجربة رائعة مع فريق محترف. تم تنفيذ المشروع بدقة عالية وفي الوقت المحدد"
    },
    {
      id: 5,    
      name: "سارة الأحمد",
      position: "مدير التسويق",
      company: "مجموعة الخليج",
      image: "/testimonials/client2.jpg",
      rating: 5,
      text: "خدمة ممتازة وتواصل مستمر. النتائج فاقت توقعاتنا"
    },

 
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-[#1a1a1a] ">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003466]/90 to-[#00B272]/90"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-[#00B272]" />
            <h2 className="text-4xl font-bold text-white">
              آراء العملاء
            </h2>
            <Star className="w-6 h-6 text-[#00B272]" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            نفخر بثقة عملائنا وشهاداتهم التي تعكس جودة خدماتنا وتميز أعمالنا
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-[#00B272] text-white transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-[#00B272] text-white transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto hide-scrollbar flex gap-8 px-4 py-8 snap-x snap-mandatory"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-[400px] snap-center"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl relative group hover:bg-white/15 transition-all duration-300">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-[#00B272]/20" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#00B272]" fill="#00B272" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      <p className="text-[#00B272] text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
