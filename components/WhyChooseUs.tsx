
import { Code, Terminal, Database,  CheckCircle, Cpu, Rocket } from 'lucide-react'

export default function WhyChooseUs() {
  const mainFeatures = [
    {
      icon: Terminal,
      title: 'تطوير متقدم',
      description: 'نقدم أحدث التقنيات والحلول البرمجية المبتكرة',
      benefits: [
        'تطوير تطبيقات ويب متقدمة',
        'حلول برمجية مخصصة',
        'تقنيات الذكاء الاصطناعي'
      ],
      color: 'bg-[#00B272]'
    },
    {
      icon: Database,
      title: 'بنية تحتية قوية',
      description: 'نعتمد على أحدث التقنيات في البنية التحتية للمشاريع',
      benefits: [
        'قواعد بيانات متطورة',
        'خوادم عالية الأداء',
        'حماية وأمان متكامل'
      ],
      color: 'bg-[#89C100]'
    },
    {
      icon: Rocket,
      title: 'حلول مستقبلية',
      description: 'نطور حلول تواكب متطلبات المستقبل الرقمي',
      benefits: [
        'تقنيات الجيل القادم',
        'حلول قابلة للتطوير',
        'مواكبة التطور التقني'
      ],
      color: 'bg-[#00A4D6]'
    }
  ]
const companyGoals = [
  {
    title: "نبني",
    description: "نبني حلول برمجية متكاملة تلبي احتياجات عملائنا",
    icon: Code,
    color: "bg-[#00B272]",
    bgPattern: "bg-circuit-pattern"
  },
  {
    title: "نطور",
    description: "نطور تقنيات مبتكرة تواكب التطور التكنولوجي",
    icon: Cpu,
    color: "bg-[#89C100]",
    bgPattern: "bg-dots-pattern"
  },
  {
    title: "ننطلق",
    description: "ننطلق نحو المستقبل بخطى ثابتة ورؤية واضحة",
    icon: Rocket,
    color: "bg-[#00A4D6]",
    bgPattern: "bg-wave-pattern"
  }
]
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Code, Terminal, Database].map((Icon, index) => (
          <div key={index} 
               className={`absolute animate-float-${index + 1} opacity-20`}
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`
               }}>
            <Icon size={40} className="text-[#89C100]" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-white/80 backdrop-blur-md rounded-full text-[#00B272] mb-6 shadow-lg border border-[#00A4D6]/20">
            ✨ لماذا تختارنا؟
          </div>
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-[#003466]">نطور</span>{' '}
            <span className="text-[#89C100]">حلول</span>{' '}
            <span className="text-[#00B272]">المستقبل</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#00B272] via-[#89C100] to-[#00A4D6] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم حلول برمجية متكاملة تجمع بين الخبرة والكفاءة والتقنيات الحديثة
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-[#00A4D6]/20"
            >
              <div className="p-8">
                <div className={`${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#003466] mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className={`h-5 w-5 ${feature.color} text-white flex-shrink-0`} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Company Goals - New Dynamic Design */}
        <div className="relative mt-32 overflow-hidden py-20 rounded-3xl "> 
          <div className="absolute inset-0 bg-gradient-to-br from-[#003466]/5 via-transparent to-[#00A4D6]/5"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#00B272]/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#89C100]/10 rounded-full blur-3xl animate-pulse-slower"></div>
            
            {/* Code Lines */}
            <div className="absolute inset-0">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute font-mono text-xs opacity-10"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`
                  }}
                >
                  {`<${['div', 'span', 'code', 'app'][i % 4]} />`}
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-16">
              <h3 className="text-5xl font-bold text-[#003466] mb-6">رحلتنا نحو النجاح</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00B272] via-[#89C100] to-[#00A4D6] rounded-full"></div>
            </div>

            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00B272] via-[#89C100] to-[#00A4D6] transform -translate-x-1/2"></div>

              {companyGoals.map((goal, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 mb-20 last:mb-0 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Icon Section */}
                  <div className="hidden lg:flex w-1/3 justify-center">
                    <div className={`${goal.color} w-32 h-32 rounded-3xl p-6 transform hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <goal.icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-2/3">
                    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#00A4D6]/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      <div className="lg:hidden mb-6">
                        <div className={`${goal.color} w-20 h-20 rounded-2xl p-4 mx-auto`}>
                          <goal.icon className="w-full h-full text-white" />
                        </div>
                      </div>
                      
                      <h4 className="text-4xl font-bold text-[#003466] mb-4">{goal.title}</h4>
                      <p className="text-xl text-gray-600 leading-relaxed">{goal.description}</p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-6 flex justify-end">
                        <div className="flex gap-2">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div
                              key={i}
                              className={`${goal.color} w-2 h-2 rounded-full opacity-${100 - (i * 30)}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
