import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock, Send, ChevronLeft, Terminal } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#portfolio", label: "أعمالنا" },
    { href: "#blog", label: "المدونة" },
    { href: "#contact", label: "تواصل معنا" },
  ]

  const services = [
    "تطوير المتاجر الإلكترونية",
    "تطوير المواقع المخصصة",
    "تطوير تطبيقات الجوال",
    "تطوير أنظمة ال ERP",
    "تصميم الهوية التجارية",
    "التسويق الرقمي"
  ]

  const contactInfo = [
    { icon: Phone, text: "920000000", href: "tel:920000000" },
    { icon: Mail, text: "info@tarmezcode.sa", href: "mailto:info@tarmezcode.sa" },
    { icon: MapPin, text: "الرياض، المملكة العربية السعودية", href: "#" },
    { icon: Clock, text: "نعمل على مدار 24 ساعة", href: "#" }
  ]

  return (
    <footer className="relative pt-32 overflow-hidden">
      {/* Decorative Patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003466] to-[#00A4D6]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#003466] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A4D6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#89C100] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="fill-current text-white dark:text-gray-900" viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4">
          {/* Newsletter Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#003466]/90 to-[#00A4D6]/90 backdrop-blur-lg rounded-3xl p-8 -mt-20 mb-20 shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#003466] to-[#00A4D6] rounded-2xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Terminal className="w-full h-full text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">انضم إلى نشرتنا البريدية</h3>
              <p className="text-[#fff] mb-8">اشترك للحصول على آخر الأخبار والعروض الحصرية</p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="flex-1 bg-white/10 text-white rounded-xl px-6 py-4 placeholder:text-[#000] focus:outline-none focus:ring-2 focus:ring-[#00B272]"
                />
                <button
                  type="submit"
                  className="bg-[#00B272] hover:bg-[#89C100] text-white px-8 py-4 rounded-xl transition-colors duration-300 flex items-center gap-2 group"
                >
                  اشتراك
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#003466] to-[#00A4D6] rounded-2xl p-3 transform group-hover:rotate-12 transition-transform duration-300">
                  <Terminal className="w-full h-full text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">ترميز كود</h2>
                  <p className="text-[#fff]">حلول برمجية متكاملة</p>
                </div>
              </div>
              <p className="text-[#fff] leading-relaxed">
                نقدم حلول برمجية متكاملة وخدمات تطوير احترافية لتحويل أفكارك إلى واقع رقمي متميز.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gradient-to-br from-[#003466] to-[#00A4D6] p-3 rounded-xl hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">روابط سريعة</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-[#fff] hover:text-white transition-colors duration-300 group"
                    >
                      <ChevronLeft className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">خدماتنا</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center gap-3 text-[#fff] hover:text-white transition-colors duration-300 group"
                    >
                      <ChevronLeft className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">معلومات التواصل</h3>
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center gap-4 text-[#fff] hover:text-white transition-colors duration-300 group"
                    >
                      <div className="bg-gradient-to-br from-[#003466] to-[#00A4D6] p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#003466]/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#fff] text-center md:text-right">
                © {new Date().getFullYear()} ترميز كود. جميع الحقوق محفوظة
              </p>
              <div className="flex gap-8 text-[#fff]">
                <Link href="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
                <Link href="#" className="hover:text-white transition-colors">الشروط والأحكام</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}