import Image from 'next/image'

import { Truck, Ship, Plane, Package, Globe, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react'
const mainServices = [
  {
    icon: Truck,
    title: 'النقل البري',
    description: 'خدمات نقل بري شاملة داخل المملكة ودول الخليج',
    image: '/images/land-transport.jpg',
    features: [
      'تغطية كاملة لجميع مدن المملكة',
      'نقل البضائع والمعدات الثقيلة',
      'أسطول حديث من الشاحنات المبردة',
      'تتبع مباشر للشحنات',
      'خدمة النقل من الباب إلى الباب'
    ]
  },
  {
    icon: Ship,
    title: 'الشحن البحري',
    description: 'حلول شحن بحري متكاملة عبر الموانئ العالمية',
    image: '/images/sea-freight.jpg',
    features: [
      'شحن الحاويات الكاملة والمجزأة',
      'خدمات التخزين في الموانئ',
      'شحن البضائع السائبة والمبردة',
      'التخليص الجمركي الشامل',
      'تأمين كامل على الشحنات'
    ]
  },
  {
    icon: Plane,
    title: 'الشحن الجوي',
    description: 'خدمات شحن جوي سريعة للشحنات العاجلة',
    image: '/images/air-freight.jpg',
    features: [
      'شحن سريع لجميع المطارات',
      'خدمات الشحن من الباب للباب',
      'شحن البضائع الحساسة والثمينة',
      'خدمات التغليف المتخصص',
      'إجراءات جمركية سريعة'
    ]
  }
]

const additionalServices = [
  {
    icon: Package,
    title: 'التغليف والتخزين',
    description: 'خدمات تغليف احترافية ومستودعات آمنة'
  },
  {
    icon: Globe,
    title: 'التخليص الجمركي',
    description: 'إنهاء جميع الإجراءات الجمركية بسهولة'
  },
  {
    icon: Shield,
    title: 'التأمين الشامل',
    description: 'تأمين كامل على جميع أنواع الشحنات'
  },
  {
    icon: Clock,
    title: 'خدمة متواصلة',
    description: 'دعم فني على مدار الساعة'
  }
]

export default function Services() {
  // Previous service data remains the same

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-50/90 via-orange-50/90 to-rose-50/90"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-amber-300/30 rounded-xl transform rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border-4 border-rose-300/30 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/2 right-1/2 w-24 h-24 border-4 border-orange-300/30 transform -rotate-12 animate-float-long"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div className="inline-block relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/20 to-rose-500/20 blur-xl rounded-full"></div>
            <h2 className="relative text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500">
                خدماتنا المتكاملة
              </span>
            </h2>
          </div>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات النقل والشحن بأعلى معايير الجودة والكفاءة
          </p>
        </div>

        {/* Main Services Grid - New Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300">
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 left-4">
                    <div className="flex items-center gap-3 text-white">
                      <service.icon className="h-8 w-8" />
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="bg-gradient-to-r from-amber-500 to-rose-500 rounded-full p-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                  اطلب الخدمة
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services - Hexagonal Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="bg-gradient-to-r from-amber-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="fill-white" viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
