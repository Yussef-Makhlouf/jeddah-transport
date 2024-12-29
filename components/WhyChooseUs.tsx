import { Ship, Plane, Truck, Globe, Clock, Users, Award, CheckCircle } from 'lucide-react'

export default function WhyChooseUs() {
  const mainFeatures = [
    {
      icon: Ship,
      title: 'خبرة في الشحن البحري',
      description: 'نمتلك شبكة واسعة من الشركاء في أهم الموانئ العالمية',
      benefits: [
        'تغطية جميع الموانئ الرئيسية',
        'حلول متكاملة للشحن البحري',
        'خدمات تخزين في الموانئ'
      ]
    },
    {
      icon: Plane,
      title: 'خدمات الشحن الجوي',
      description: 'نقدم أسرع خدمات الشحن الجوي مع أكبر شركات الطيران',
      benefits: [
        'شحن سريع للبضائع العاجلة',
        'تغطية المطارات العالمية',
        'خدمات التغليف المتخصص'
      ]
    },
    {
      icon: Truck,
      title: 'النقل البري المتكامل',
      description: 'أسطول حديث من الشاحنات يغطي جميع مناطق المملكة',
      benefits: [
        'تغطية شاملة داخل المملكة',
        'أسطول شاحنات حديث ومتطور',
        'أنظمة تتبع متقدمة'
      ]
    }
  ]

  const stats = [
    { value: '15+', label: 'سنوات خبرة', icon: Award },
    { value: '1000+', label: 'عميل سعيد', icon: Users },
    { value: '50+', label: 'مدينة', icon: Globe },
    { value: '24/7', label: 'دعم متواصل', icon: Clock }
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500">
              لماذا تختارنا؟
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم خدمات نقل متميزة تجمع بين الخبرة والكفاءة والتقنيات الحديثة
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="p-8">
                <div className="bg-gradient-to-r from-amber-500 to-rose-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 transform -skew-y-3"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-12 transform skew-y-3">
            <div className="transform -skew-y-3">
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center"
                  >
                    <stat.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
