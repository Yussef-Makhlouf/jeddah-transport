import { MapPin, Truck, Clock } from 'lucide-react'

export default function SaudiCities() {
  const cities = [
    {
      name: "الرياض",
      description: "العاصمة الإدارية للمملكة",
      deliveryTime: "24 ساعة",
      routes: "جميع المناطق",
    },
    {
      name: "جدة",
      description: "عروس البحر الأحمر",
      deliveryTime: "24 ساعة",
      routes: "جميع الأحياء",
    },
    {
      name: "مكة المكرمة",
      description: "قبلة المسلمين",
      deliveryTime: "24 ساعة",
      routes: "المنطقة المركزية",
    },
    {
      name: "المدينة المنورة",
      description: "المدينة المنورة",
      deliveryTime: "48 ساعة",
      routes: "المنطقة المركزية",
    },
    {
      name: "الدمام",
      description: "عاصمة النفط",
      deliveryTime: "48 ساعة",
      routes: "المنطقة الشرقية",
    },
    {
      name: "تبوك",
      description: "بوابة الشمال",
      deliveryTime: "72 ساعة",
      routes: "المنطقة الشمالية",
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500">
              مدن ومحافظات المملكة
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نغطي جميع مدن ومحافظات المملكة العربية السعودية بخدمات نقل احترافية وسريعة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{city.name}</h3>
                <p className="text-amber-600 mb-4">{city.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 text-amber-500" />
                    <span>وقت التوصيل: {city.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Truck className="h-5 w-5 text-amber-500" />
                    <span>نطاق الخدمة: {city.routes}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-amber-500" />
                    <span>تغطية كاملة للمنطقة</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2 group">
                    اطلب خدمة النقل
                    <Truck className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}