import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Code, Globe, Rocket } from 'lucide-react'
import Contact from '@/components/Contact'
import Partners from '@/components/Partners'

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-32 bg-white dark:bg-gray-900">
      <Header />

      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 dark:bg-[#00B272]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 dark:bg-[#00A4D6]/5 rounded-full blur-3xl animate-pulse-slower"></div>
        
        {/* Additional Decorative Elements */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border-4 border-[#00B272]/20 dark:border-[#00B272]/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-[#00A4D6]/10 dark:bg-[#00A4D6]/5 rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-[#003466]/30 dark:border-[#003466]/20 rounded-lg animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 bg-white/80 dark:bg-gray-800 backdrop-blur-md rounded-full text-[#00B272] mb-6 shadow-lg">
            👋 نسعد بتواصلكم
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003466] via-[#00B272] to-[#003466]">
              تواصل معنا
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك. تواصل معنا لمناقشة مشروعك وتحويل أفكارك إلى واقع رقمي متميز
          </p>
        </div>

        {/* Contact Form Section */}
        <Contact />

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[{
              icon: Code,
              title: "خدمة متميزة",
              description: "نقدم خدمة عملاء متميزة على مدار الساعة",
              color: "from-[#00B272] to-[#003466]"
            },
            {
              icon: Globe,
              title: "تغطية شاملة",
              description: "نخدم عملائنا في جميع أنحاء المملكة",
              color: "from-[#003466] to-[#00A4D6]"
            },
            {
              icon: Rocket,
              title: "استجابة سريعة",
              description: "نرد على استفساراتكم في أسرع وقت ممكن",
              color: "from-[#00A4D6] to-[#00B272]"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 dark:bg-gray-800 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#003466] dark:text-gray-200 mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-700 to-transparent"></div>
        <Partners />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  )
}
