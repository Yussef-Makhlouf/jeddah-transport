import { Bitcoin, Building, Building2, Coffee, CreditCard, GraduationCap, Share2, ShoppingBag, Wifi } from 'lucide-react'
import Image from 'next/image'

export default function IndustriesWeServe() {
    const industries = [
        {
          icon: ShoppingBag,
          title: "التجارة الإلكترونية",
          description: "منصات تسوق متكاملة تدعم نمو تجارتك الإلكترونية",
          projects: ["منصات البيع بالتجزئة", "أنظمة إدارة المخزون", "بوابات الدفع الآمن"],
          image: "/logo (1).jpg",
          color: "bg-[#00B272]"
        },
        {
          icon: Coffee,
          title: "الأغذية والمشروبات",
          description: "حلول رقمية متخصصة لقطاع المطاعم والمقاهي",
          projects: ["أنظمة نقاط البيع", "إدارة المخزون", "تطبيقات توصيل الطعام"],
          image: "/logo (1).jpg",
          color: "bg-[#003466]"
        },
        {
          icon: CreditCard,
          title: "تطبيقات الدفع عند الطلب",
          description: "حلول دفع آمنة ومتكاملة لمختلف القطاعات",
          projects: ["بوابات دفع آمنة", "محافظ إلكترونية", "أنظمة الفوترة"],
          image: "/logo (1).jpg",
          color: "bg-[#00A4D6]"
        },
        {
          icon: Wifi,
          title: "إنترنت الأشياء",
          description: "حلول ذكية تربط الأجهزة والأنظمة بشكل متكامل",
          projects: ["المنازل الذكية", "إدارة الطاقة", "أنظمة المراقبة"],
          image: "/logo (1).jpg",
          color: "bg-[#003466]"
        },
        {
          icon: GraduationCap,
          title: "التعليم",
          description: "منصات تعليمية تفاعلية للمؤسسات التعليمية",
          projects: ["منصات التعلم عن بعد", "إدارة المحتوى التعليمي", "نظام إدارة الطلاب"],
          image: "/logo (1).jpg",
          color: "bg-[#00B272]"
        },
        {
          icon: Building2,
          title: "البنوك",
          description: "حلول مصرفية رقمية آمنة وموثوقة",
          projects: ["الخدمات المصرفية عبر الإنترنت", "تطبيقات الجوال", "أنظمة الأمان المصرفي"],
          image: "/logo (1).jpg",
          color: "bg-[#003466]"
        },
        {
          icon: Share2,
          title: "شبكات التواصل الاجتماعي",
          description: "منصات اجتماعية تفاعلية ومتطورة",
          projects: ["منصات التواصل", "إدارة المحتوى", "تحليلات المستخدمين"],
          image: "/logo (1).jpg",
          color: "bg-[#00A4D6]"
        },
        {
          icon: Bitcoin,
          title: "البلوكتشين",
          description: "حلول بلوكتشين متقدمة للأعمال الرقمية",
          projects: ["العقود الذكية", "العملات الرقمية", "أنظمة التتبع"],
          image: "/logo (1).jpg",
          color: "bg-[#003466]"
        },
        {
          icon: Building,
          title: "العقارات",
          description: "حلول رقمية متكاملة لقطاع العقارات",
          projects: ["منصات العقارات", "إدارة الممتلكات", "أنظمة الحجز"],
          image: "/logo (1).jpg",
          color: "bg-[#00B272]"
        }
      ]
      

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full text-[#00B272] dark:text-[#00ffaa] mb-6 shadow-lg border border-[#00A4D6]/20 dark:border-[#00A4D6]/10">
            ✨ الصناعات التي نخدمها
          </div>
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-[#003466] dark:text-[#4d9fff]">نبني</span>{' '}
            <span className="text-[#003466] dark:text-[#a3e600]">حلول</span>{' '}
            <span className="text-[#00B272] dark:text-[#00ffaa]">لكل صناعة</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00B272] via-[#003466] to-[#00A4D6] dark:from-[#00ffaa] dark:via-[#a3e600] dark:to-[#4dc4ff] mx-auto rounded-full mb-8"></div>
        </div>

        {/* Interactive Industry Showcase */}
        <div className="space-y-40">
          {industries.map((industry, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 -z-10">
                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-96 h-96 ${industry.color}/10 dark:${industry.color}/5 rounded-full blur-3xl`}></div>
              </div>

              <div className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`${industry.color} w-20 h-20 rounded-2xl flex items-center justify-center`}>
                      <industry.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-[#003466] dark:text-[#4d9fff]">{industry.title}</h3>
                  </div>

                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{industry.description}</p>

                  <div className="space-y-4">
                    {industry.projects.map((project, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-xl border border-[#00A4D6]/20 dark:border-[#00A4D6]/10 hover:shadow-lg transition-all duration-300"
                      >
                        <div className={`${industry.color} w-3 h-3 rounded-full`}></div>
                        <span className="text-gray-700 dark:text-gray-300">{project}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-8 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#003466] dark:text-[#4d9fff]">98%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">رضا العملاء</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#003466] dark:text-[#4d9fff]">+50</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">مشروع منجز</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#003466] dark:text-[#4d9fff]">24/7</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">دعم فني</div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003466]/80 to-transparent dark:from-[#003466]/90 dark:to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="grid grid-cols-2 gap-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="px-4 py-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-full text-white text-sm"
                          >
                            {['تقنيات حديثة', 'حلول مبتكرة', 'دعم متواصل', 'تطوير مستمر'][idx]}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}