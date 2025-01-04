import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import ServiceShowcase from "@/components/ServiceShowcase";
import { Code, Palette, Database, Globe, Rocket, Terminal, Users, Sparkles, Cloud } from 'lucide-react'
import Image from 'next/image'
export default function About() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-20 right-20 w-72 md:w-96 h-72 md:h-96 bg-[#00B272]/10 dark:bg-[#00B272]/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-72 md:w-96 h-72 md:h-96 bg-[#00A4D6]/10 dark:bg-[#00A4D6]/5 rounded-full blur-3xl animate-pulse-slower"></div>

          {/* Decorative Elements */}
          <div className="absolute top-1/3 left-1/4 w-24 md:w-32 h-24 md:h-32 border-4 border-[#00B272]/20 dark:border-[#00B272]/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-20 md:w-24 h-20 md:h-24 bg-[#00A4D6]/10 dark:bg-[#00A4D6]/5 rotate-45"></div>
          <div className="absolute top-1/2 right-1/4 w-12 md:w-16 h-12 md:h-16 border-2 border-[#89C100]/30 dark:border-[#89C100]/20 rounded-lg animate-bounce-slow"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Company Introduction */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003466] via-[#00B272] to-[#89C100]">
                ترميز تك - نقود مستقبل التقنية
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نحن شركة رائدة في مجال تطوير البرمجيات والحلول الرقمية في المملكة العربية السعودية، نبتكر حلولاً تقنية متكاملة تلبي طموحات عملائنا
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto">
                <Image
                  src="/logo (1).jpg"
                  alt="فريق التطوير"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003466]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-[#00B272]/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 md:w-32 h-24 md:h-32 bg-[#00A4D6]/10 rounded-full blur-xl"></div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003466] dark:text-white">خبرة تقنية متميزة</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                فريق مميز من المصممين والمطورين المبدعين يمتلكون خبرة تزيد عن 3 سنوات في التصميم والبرمجة الإبداعية، نقدم حلولاً شاملة ومبتكرة لمختلف الاحتياجات.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, text: "تطوير مواقع متقدم" },
                  { icon: Palette, text: "تصميم إبداعي" },
                  { icon: Database, text: "حلول متكاملة" },
                  { icon: Globe, text: "تغطية عربية شاملة" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-[#003466] dark:text-white">
                    <item.icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <button className="group bg-gradient-to-r from-[#003466] to-[#00B272] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center gap-3 hover:shadow-lg transition-all duration-300">
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                <span>ابدأ مشروعك معنا</span>
              </button>
            </div>
          </div>

          {/* Services Showcase */}
          <div className="py-16 md:py-24">
            <ServiceShowcase />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
            {[
              {
                icon: Terminal,
                title: "تطوير احترافي",
                description: "نستخدم أحدث التقنيات العالمية"
              },
              {
                icon: Users,
                title: "فريق متخصص",
                description: "مطورون ومصممون ذوو خبرة عالية"
              },
              {
                icon: Sparkles,
                title: "تصميم إبداعي",
                description: "تصاميم عصرية تناسب هويتك"
              },
              {
                icon: Cloud,
                title: "حلول سحابية",
                description: "خدمات متكاملة وحلول تقنية شاملة"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-gradient-to-r from-[#003466] to-[#00B272] p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003466] dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <OfficeLocations /> */}

        {/* FAQ Section */}
        <div className="relative bg-gradient-to-b from-amber-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 md:py-24">
          <FAQ/>
        </div>

        <Partners />
        <Footer />
      </section>
    </main>
  )
}