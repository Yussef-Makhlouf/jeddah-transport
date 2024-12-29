import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock, Send, ChevronLeft } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#blog", label: "المدونة" },
    { href: "#contact", label: "اتصل بنا" },
  ]

  const services = [
    "النقل البري",
    "الشحن البحري",
    "الشحن الجوي",
    "التخليص الجمركي",
    "التخزين والمستودعات",
    "خدمات لوجستية متكاملة"
  ]

  const contactInfo = [
    { icon: Phone, text: "920000000", href: "tel:920000000" },
    { icon: Mail, text: "info@transport.sa", href: "mailto:info@transport.sa" },
    { icon: MapPin, text: "جدة، المملكة العربية السعودية", href: "#" },
    { icon: Clock, text: "نعمل على مدار 24 ساعة", href: "#" }
  ]

  return (
    <footer className="relative pt-32 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900 to-rose-900">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="fill-current text-amber-50" viewBox="0 0 1440 120">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4">
          {/* Newsletter Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-600/90 to-rose-600/90 backdrop-blur-lg rounded-3xl p-8 -mt-20 mb-20 shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">انضم إلى نشرتنا البريدية</h3>
              <p className="text-amber-100 mb-8">اشترك للحصول على آخر الأخبار والعروض الحصرية</p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="flex-1 bg-white/10 text-white rounded-xl px-6 py-4 placeholder:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <button
                  type="submit"
                  className="bg-white text-amber-600 px-8 py-4 rounded-xl hover:bg-amber-100 transition-colors duration-300 flex items-center gap-2"
                >
                  اشتراك
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="block">
                <Image
                  src="/logo-white.png"
                  alt="شركة النقل"
                  width={180}
                  height={60}
                  className="mb-6"
                />
              </Link>
              <p className="text-amber-100 leading-relaxed">
                نقدم خدمات نقل وشحن متكاملة داخل المملكة العربية السعودية وخارجها، مع التزامنا التام بأعلى معايير الجودة والأمان.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gradient-to-r from-amber-500 to-rose-500 p-3 rounded-full hover:scale-110 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">روابط سريعة</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-amber-100 hover:text-white transition-colors duration-300 group"
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
                      className="flex items-center gap-3 text-amber-100 hover:text-white transition-colors duration-300 group"
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
                      className="flex items-center gap-4 text-amber-100 hover:text-white transition-colors duration-300 group"
                    >
                      <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
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
          <div className="border-t border-amber-500/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-amber-200 text-center md:text-right">
                © {new Date().getFullYear()} شركة النقل. جميع الحقوق محفوظة
              </p>
              <div className="flex gap-8 text-amber-200">
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
