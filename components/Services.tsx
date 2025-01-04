// import Image from 'next/image'

// import { Truck, Ship, Plane, Package, Globe, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react'
// const mainServices = [
//   {
//     icon: Truck,
//     title: 'النقل البري',
//     description: 'خدمات نقل بري شاملة داخل المملكة ودول الخليج',
//     image: '/Artboard 1.png',
//     features: [
//       'تغطية كاملة لجميع مدن المملكة',
//       'نقل البضائع والمعدات الثقيلة',
//       'أسطول حديث من الشاحنات المبردة',
//       'تتبع مباشر للشحنات',
//       'خدمة النقل من الباب إلى الباب'
//     ]
//   },
//   {
//     icon: Ship,
//     title: 'الشحن البحري',
//     description: 'حلول شحن بحري متكاملة عبر الموانئ العالمية',
//     image: '/Artboard 2.png',
//     features: [
//       'شحن الحاويات الكاملة والمجزأة',
//       'خدمات التخزين في الموانئ',
//       'شحن البضائع السائبة والمبردة',
//       'التخليص الجمركي الشامل',
//       'تأمين كامل على الشحنات'
//     ]
//   },
//   {
//     icon: Plane,
//     title: 'الشحن الجوي',
//     description: 'خدمات شحن جوي سريعة للشحنات العاجلة',
//     image: '/Artboard 3.png',  
//     features: [
//       'شحن سريع لجميع المطارات',
//       'خدمات الشحن من الباب للباب',
//       'شحن البضائع الحساسة والثمينة',
//       'خدمات التغليف المتخصص',
//       'إجراءات جمركية سريعة'
//     ]
//   }
// ]

// const additionalServices = [
//   {
//     icon: Package,
//     title: 'التغليف والتخزين',
//     description: 'خدمات تغليف احترافية ومستودعات آمنة'
//   },
//   {
//     icon: Globe,
//     title: 'التخليص الجمركي',
//     description: 'إنهاء جميع الإجراءات الجمركية بسهولة'
//   },
//   {
//     icon: Shield,
//     title: 'التأمين الشامل',
//     description: 'تأمين كامل على جميع أنواع الشحنات'
//   },
//   {
//     icon: Clock,
//     title: 'خدمة متواصلة',
//     description: 'دعم فني على مدار الساعة'
//   }
// ]

// export default function Services() {
//   // Previous service data remains the same

//   return (
//     <section className="relative py-32 overflow-hidden">
//       {/* Dynamic Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-50/90 via-orange-50/90 to-rose-50/90"></div>
//         <div className="absolute top-20 right-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse-slower"></div>
//       </div>

//       {/* Floating Geometric Shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-amber-300/30 rounded-xl transform rotate-45 animate-float"></div>
//         <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border-4 border-rose-300/30 rounded-full animate-float-delay"></div>
//         <div className="absolute top-1/2 right-1/2 w-24 h-24 border-4 border-orange-300/30 transform -rotate-12 animate-float-long"></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         {/* Enhanced Header Section */}
//         <div className="text-center mb-24">
//           <div className="inline-block relative">
//             <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/20 to-rose-500/20 blur-xl rounded-full"></div>
//             <h2 className="relative text-6xl font-bold mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500">
//                 خدماتنا المتكاملة
//               </span>
//             </h2>
//           </div>
//           <div className="w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto rounded-full mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             نقدم مجموعة متكاملة من خدمات النقل والشحن بأعلى معايير الجودة والكفاءة
//           </p>
//         </div>

//         {/* Main Services Grid - New Layout */}
//         <div className="grid lg:grid-cols-3 gap-12 mb-24">
//           {mainServices.map((service, index) => (
//             <div 
//               key={index}
//               className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-contain transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute bottom-4 right-4 left-4">
//                   <div className="flex items-center gap-3 text-white">
//                     <service.icon className="h-8 w-8" />
//                     <h3 className="text-2xl font-bold text-orange-700">{service.title}</h3>
//                   </div>
//                 </div>
//               </div>

//               <ul className="space-y-3">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center gap-3 text-gray-700">
//                     <div className="bg-gradient-to-r from-amber-500 to-rose-500 rounded-full p-1">
//                       <CheckCircle className="h-4 w-4 text-white" />
//                     </div>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-6 w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
//                 اطلب الخدمة
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           ))}
//         </div>
//         {/* Additional Services - Hexagonal Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {additionalServices.map((service, index) => (
//             <div 
//               key={index}
//               className="group bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
//               <div className="relative">
//                 <div className="bg-gradient-to-r from-amber-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
//                   <service.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Wave Decoration */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg className="fill-white" viewBox="0 0 1440 120">
//           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//         </svg>
//       </div>
//     </section>
//   )
// }
import Image from 'next/image'
import { Clock, User, ArrowRight, Bookmark, Share2 } from 'lucide-react'

const blogPosts = [
  {
    title: "مستقبل التقنية في المملكة",
    description: "استكشف أحدث التطورات التقنية وتأثيرها على المستقبل الرقمي في المملكة العربية السعودية",
    image: "/logo (1).jpg",
    category: "التقنية",
    readTime: "5 دقائق",
    date: "2024-01-15",
    author: {
      name: "أحمد محمد",
      avatar: "/logo (1).jpg"
    }
  },
  {
    title: "الابتكار في عصر الذكاء الاصطناعي",
    description: "كيف يمكن للشركات الاستفادة من الذكاء الاصطناعي لتحسين أعمالها وخدماتها",
    image: "/logo (1).jpg",
    category: "الذكاء الاصطناعي",
    readTime: "7 دقائق",
    date: "2024-01-10",
    author: {
      name: "سارة خالد",
      avatar: "/logo (1).jpg"
    }
  },
  {
    title: "تطوير المواقع الحديثة",
    description: "أحدث التقنيات والممارسات في تطوير المواقع الإلكترونية العصرية",
    image: "/logo (1).jpg",
    category: "تطوير الويب",
    readTime: "6 دقائق",
    date: "2024-01-05",
    author: {
      name: "محمد علي",
      avatar: "/logo (1).jpg"
    }
  }
]

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa]"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border-4 border-[#89C100]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border-4 border-[#00B272]/20 transform rotate-45 animate-float"></div>
        <div className="absolute top-1/2 right-1/2 w-20 h-20 border-4 border-[#00A4D6]/20 rounded-xl animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#003466]/10 rounded-full text-[#003466] font-bold mb-4">
            مدونتنا
          </span>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-[#003466]">أحدث</span>{' '}
            <span className="text-[#00B272]">المقالات</span>{' '}
            <span className="text-[#89C100]">والأخبار</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#003466] via-[#00B272] to-[#89C100] mx-auto rounded-full mb-8"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-[#00B272] text-sm font-bold">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003466] mb-3 group-hover:text-[#00B272] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#89C100]" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#00A4D6]" />
                    <span>{post.author.name}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="text-[#003466] hover:text-[#00B272] transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="flex items-center gap-2 text-[#00B272] font-bold group-hover:gap-3 transition-all">
                    اقرأ المزيد
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="text-[#003466] hover:text-[#00B272] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="fill-white" viewBox="0 0 1440 120">
          <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}




// import Image from 'next/image';
// import {
//   PenTool,
//   BookOpen,
//   Bookmark,
//   Edit3,
//   ArrowRight,
//   CheckCircle,
// } from 'lucide-react';

// const blogs = [
//   {
//     icon: PenTool,
//     title: 'كيفية إنشاء موقع ويب احترافي',
//     description: 'دليل شامل لتصميم وتطوير المواقع باستخدام أحدث التقنيات.',
//     image: '/blog-1.png',
//     features: [
//       'تصميم واجهات متجاوبة',
//       'أفضل الممارسات لتحسين الأداء',
//       'دعم متعدد اللغات',
//       'التحسين لمحركات البحث',
//       'التكامل مع الأنظمة الحديثة',
//     ],
//   },
//   {
//     icon: BookOpen,
//     title: 'أهم استراتيجيات البرمجة',
//     description: 'تعرف على التقنيات والأساليب الفعالة في كتابة الكود.',
//     image: '/blog-2.png',
//     features: [
//       'إدارة المشاريع البرمجية',
//       'كتابة كود نظيف وقابل للتوسع',
//       'استخدام أدوات تطوير فعالة',
//       'اختبار البرامج بكفاءة',
//       'أتمتة العمليات البرمجية',
//     ],
//   },
//   {
//     icon: Bookmark,
//     title: 'أدلة متقدمة لإدارة قواعد البيانات',
//     description: 'كيفية تحسين وإدارة قواعد البيانات باستخدام أفضل الأدوات.',
//     image: '/blog-3.png',
//     features: [
//       'إدارة قواعد البيانات الكبيرة',
//       'تحسين الأداء باستخدام الفهارس',
//       'تأمين قواعد البيانات',
//       'تحليل البيانات الاحترافية',
//       'إجراءات النسخ الاحتياطي المتقدمة',
//     ],
//   },
// ];

// export default function Services() {
//   return (
//     <section className="relative py-32 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#003466]/10 via-[#00A4D6]/10 to-[#89C100]/10"></div>
//         <div className="absolute top-24 left-12 w-96 h-96 bg-[#003466]/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-12 right-12 w-96 h-96 bg-[#00B272]/20 rounded-full blur-3xl animate-pulse-slower"></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#89C100]/20 rounded-full blur-3xl animate-pulse"></div>
//       </div>

//       {/* Header Section */}
//       <div className="container mx-auto px-4 relative">
//         <div className="text-center mb-24">
//           <h2 className="relative text-6xl font-bold mb-6">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003466] via-[#00B272] to-[#89C100]">
//               مدونتنا
//             </span>
//           </h2>
//           <div className="w-32 h-2 bg-gradient-to-r from-[#003466] via-[#00A4D6] to-[#89C100] mx-auto rounded-full mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             استكشف أحدث المقالات والنصائح في عالم التقنية والبرمجة.
//           </p>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid lg:grid-cols-3 gap-12 mb-24">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
//             >
//               <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden">
//                 <Image
//                   src={blog.image}
//                   alt={blog.title}
//                   fill
//                   className="object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute bottom-4 right-4 left-4">
//                   <div className="flex items-center gap-3 text-white">
//                     <blog.icon className="h-8 w-8" />
//                     <h3 className="text-2xl font-bold text-[#003466]">{blog.title}</h3>
//                   </div>
//                 </div>
//               </div>

//               <ul className="space-y-3">
//                 {blog.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center gap-3 text-gray-700">
//                     <div className="bg-gradient-to-r from-[#003466] to-[#89C100] rounded-full p-1">
//                       <CheckCircle className="h-4 w-4 text-white" />
//                     </div>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-6 w-full bg-gradient-to-r from-[#003466] to-[#89C100] text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
//                 اقرأ المزيد
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Wave Decoration */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg className="fill-[#003466]" viewBox="0 0 1440 120">
//           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//         </svg>
//       </div>
//     </section>
//   );
// }
