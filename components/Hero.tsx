// import Image from 'next/image'
// import { Truck, Phone, Calendar, Shield, MapPin, Clock } from 'lucide-react'

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Parallax Effect */}
//       <div className="absolute inset-0 transform scale-105">
//         <Image
//           src="/hero-bg.jpg"
//           alt="خدمات النقل والشحن"
//           fill
//           className="object-cover transform hover:scale-105 transition-transform duration-3000"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-orange-800/85 to-rose-900/90"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Hero Content */}
//           <div className="text-white space-y-8">
//             <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-rose-200">
//                 خدمات النقل المتكاملة
//               </span>
//             </h1>

//             <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
//               نقدم حلول نقل احترافية وآمنة في جميع أنحاء المملكة والخليج العربي
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-8 py-4 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
//                 احجز خدمة النقل
//               </button>
//               <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-300 border border-white/30">
//                 تواصل معنا
//               </button>
//             </div>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 gap-6">
//             {[
//               { icon: Truck, title: "أسطول كبير", value: "+500", suffix: "شاحنة" },
//               { icon: MapPin, title: "تغطية واسعة", value: "+50", suffix: "مدينة" },
//               { icon: Shield, title: "خبرة", value: "+15", suffix: "عام" },
//               { icon: Clock, title: "خدمة", value: "24/7", suffix: "متواصلة" },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
//               >
//                 <stat.icon className="h-10 w-10 text-amber-300 mb-4 group-hover:scale-110 transition-transform duration-300" />
//                 <div className="space-y-2">
//                   <h3 className="text-white text-lg font-medium">{stat.title}</h3>
//                   <p className="text-3xl font-bold text-amber-300">
//                     {stat.value}
//                     <span className="text-lg text-gray-300 mr-1">{stat.suffix}</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Features Bar */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { icon: Truck, text: "شحن سريع وآمن" },
//             { icon: Phone, text: "دعم فني متواصل" },
//             { icon: Calendar, text: "حجز مرن وسهل" },
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
//             >
//               <feature.icon className="h-8 w-8 text-amber-300" />
//               <span className="text-white text-lg font-medium">{feature.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import Image from 'next/image'
import { Truck, Phone, Calendar, Shield, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="خدمات النقل والشحن"
          fill
          className="object-cover transform scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 via-orange-800/90 to-rose-900/95"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border-4 border-amber-300/30 rounded-xl transform rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border-4 border-rose-300/30 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/2 right-1/2 w-20 h-20 border-4 border-orange-300/30 transform -rotate-12 animate-float-long"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-rose-200">
                خدمات النقل المتكاملة
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              نقدم حلول نقل احترافية وآمنة في جميع أنحاء المملكة والخليج العربي
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="group bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-8 py-4 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                احجز خدمة النقل
                <ArrowRight className="inline-block mr-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="relative overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-300 border border-white/30">
                <span className="relative z-10">تواصل معنا</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-rose-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </div>
          </div>

          {/* Stats Grid with Glass Effect */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Truck, title: "أسطول كبير", value: "+500", suffix: "شاحنة" },
              { icon: MapPin, title: "تغطية واسعة", value: "+50", suffix: "مدينة" },
              { icon: Shield, title: "خبرة", value: "+15", suffix: "عام" },
              { icon: Clock, title: "خدمة", value: "24/7", suffix: "متواصلة" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-amber-500 to-rose-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white text-lg font-medium mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300">
                  {stat.value}
                  <span className="text-lg text-gray-300 mr-1">{stat.suffix}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Bar with Glass Effect */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Truck, text: "شحن سريع وآمن" },
            { icon: Phone, text: "دعم فني متواصل" },
            { icon: Calendar, text: "حجز مرن وسهل" },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-4"
            >
              <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-white text-lg font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
