import { Trophy, Users, Globe, Shield, Code, Rocket, Terminal, Database } from 'lucide-react'
import Image from 'next/image'

export default function AboutUs() {
  const achievements = [
    { icon: Trophy, title: "خبرة برمجية", value: "+3", suffix: "عام", color: "bg-[#00B272]" },
    { icon: Code, title: "مشروع ناجح", value: "+22500", suffix: "مشروع", color: "bg-[#89C100]" },
    { icon: Users, title: "عميل سعيد", value: "+3500", suffix: "عميل", color: "bg-[#00A4D6]" },
    { icon: Rocket, title: "تقنية حديثة", value: "+50", suffix: "تقنية", color: "bg-[#003466]" }
  ]

  const features = [
    {
      icon: Terminal,
      title: "تطوير متقدم",
      description: "نستخدم أحدث التقنيات والأدوات البرمجية لتطوير حلول مبتكرة",
      color: "bg-[#00B272]"
    },
    {
      icon: Globe,
      title: "حلول عالمية",
      description: "نقدم خدماتنا للشركات في جميع أنحاء العالم بمعايير دولية",
      color: "bg-[#89C100]"
    },
    {
      icon: Shield,
      title: "حماية وأمان",
      description: "نضمن أمان وحماية مشاريعك مع أحدث تقنيات الأمن السيبراني",
      color: "bg-[#00A4D6]"
    },
    {
      icon: Database,
      title: "حلول متكاملة",
      description: "نقدم حلول برمجية شاملة تلبي جميع احتياجات عملك",
      color: "bg-[#003466]"
    }
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Terminal, Database, Code].map((Icon, index) => (
          <div key={index} 
               className={`absolute animate-float-${index + 1} opacity-20`}
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`
               }}>
            <Icon size={40} className="text-[#89C100]" />
          </div>
        ))}
        
        {/* Code Snippets */}
        <div className="absolute top-20 right-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg animate-float">
          <pre className="text-sm font-mono text-[#003466]">
            <code>{'const future = await buildSolution();'}</code>
          </pre>
        </div>
        <div className="absolute bottom-40 left-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg animate-float-delay">
          <pre className="text-sm font-mono text-[#00B272]">
            <code>{'export class Innovation { }'}</code>
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <div className="inline-block">
            <span className="inline-block px-6 py-3 bg-white/80 backdrop-blur-md rounded-full text-[#00B272] mb-6 shadow-lg border border-[#00A4D6]/20">
              ✨ تعرف على ترميز كود
            </span>
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-[#003466]">نطور</span>{' '}
              <span className="text-[#89C100]">مستقبلك</span>{' '}
              <span className="text-[#00B272]">الرقمي</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00B272] via-[#89C100] to-[#00A4D6] mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#00A4D6]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#003466] mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image and Content Section */}
        <div className="flex flex-wrap lg:flex-nowrap gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B272]/80 to-[#00A4D6]/80 opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
              <Image
                src="/logo (1).jpg"
                alt="فريق ترميز كود"
                width={800}
                height={600}
                className="object-cover w-full h-[500px] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">فريق محترف</h3>
                  <p className="text-lg">نمتلك أفضل المطورين والمبرمجين</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#00A4D6]/20 shadow-xl">
              <h3 className="text-4xl font-bold text-[#003466] mb-6">
                نحن نقدم <span className="text-[#00B272]">حلول برمجية</span> متكاملة
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                نسعى دائماً لتقديم أفضل الحلول التقنية المبتكرة التي تساعد عملائنا على النمو والتطور في العصر الرقمي.
              </p>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#00A4D6]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${stat.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#003466] mb-2">
                {stat.value}
                <span className="text-lg text-gray-500 mr-1">{stat.suffix}</span>
              </h3>
              <p className="text-gray-600 text-lg">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}