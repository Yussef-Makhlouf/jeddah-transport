import { Trophy, Users, Clock, Target, Truck, Globe, Shield, Award } from 'lucide-react'
import Image from 'next/image'

export default function AboutUs() {
  const achievements = [
    { icon: Trophy, title: "خبرة واسعة", value: "+15", suffix: "عام" },
    { icon: Users, title: "عملاء سعداء", value: "+1000", suffix: "عميل" },
    { icon: Clock, title: "خدمة متواصلة", value: "24/7", suffix: "دعم" },
    { icon: Target, title: "دقة في المواعيد", value: "100%", suffix: "التزام" },
  ]

  const features = [
    {
      icon: Truck,
      title: "أسطول حديث",
      description: "نمتلك أسطولاً من أحدث الشاحنات المجهزة بأنظمة تتبع متطورة"
    },
    {
      icon: Globe,
      title: "تغطية شاملة",
      description: "نصل إلى جميع مدن المملكة ودول مجلس التعاون الخليجي"
    },
    {
      icon: Shield,
      title: "أمان وموثوقية",
      description: "نضمن سلامة شحناتك مع تأمين شامل على جميع عمليات النقل"
    },
    {
      icon: Award,
      title: "جودة الخدمة",
      description: "حاصلون على شهادات الجودة العالمية في مجال النقل"
    }
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-orange-50/90 to-rose-50/90"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border-4 border-amber-300/30 rounded-xl transform rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border-4 border-rose-300/30 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/2 right-1/2 w-20 h-20 border-4 border-orange-300/30 transform -rotate-12 animate-float-long"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div className="inline-block relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/20 to-rose-500/20 blur-xl rounded-full"></div>
            <h2 className="relative text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500">
                من نحن
              </span>
            </h2>
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Section with Stats Overlay */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/about-transport.jpg"
                alt="خدمات النقل المتميزة"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/50 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 left-10 right-10">
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-8">
                  {achievements.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 mb-2">
                        {stat.value}
                      </h3>
                      <p className="text-gray-600">{stat.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section with Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              نقدم خدمات نقل متكاملة بمعايير عالمية
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              نحن شركة رائدة في مجال خدمات النقل، نسعى جاهدين لتقديم أفضل الحلول اللوجستية لعملائنا.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-amber-500 to-rose-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats with Glass Effect */}
        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300">
                <stat.icon className="h-12 w-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 mb-2">
                  {stat.value}
                  <span className="text-lg text-gray-500 mr-1">{stat.suffix}</span>
                </h3>
                <p className="text-gray-600">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
