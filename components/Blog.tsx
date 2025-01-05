import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Terminal, Database, Cloud } from 'lucide-react'
import Contact from './Contact';

export default function Blog() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'رقم الهاتف',
      detail: '+966-123-456-789',
      description: 'للاتصال بنا على مدار الساعة',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      detail: 'info@domain.com',
      description: 'لإرسال استفساراتكم عبر البريد الإلكتروني',
    },
    {
      icon: MapPin,
      title: 'العنوان',
      detail: '123 شارع الرياض، السعودية',
      description: 'زيارتنا في مكتبنا الرئيسي',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#00A4D6] dark:bg-[#00A4D6]/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00B272] dark:bg-[#00B272]/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 dark:bg-[#00B272]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 dark:bg-[#00A4D6]/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Terminal, Database, Cloud].map((Icon, index) => (
          <div key={index} 
               className={`absolute animate-float-${index + 1} opacity-30`}
               style={{
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`
               }}>
            <Icon size={40} className="text-[#003466]" />
          </div>
        ))}
      </div>
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#FFF7ED"
            fillOpacity="0.5"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="/logo (1).jpg"
            alt="Company Logo"
            width={150}
            height={150}
            className="animate-float rounded-full shadow-lg shadow-black/20"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003466] via-[#00B272] to-[#003466]">
              تواصل معنا
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#003466] via-[#00B272] to-[#003466] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-[#003466] dark:text-gray-200 max-w-3xl mx-auto">
            نسعد بالإجابة على استفساراتكم وتقديم المساعدة المطلوبة
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A4D6]/10 to-[#00B272]/10 dark:from-[#00A4D6]/5 dark:to-[#00B272]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-[#003466] to-[#00B272] p-4 rounded-full mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#003466] dark:text-white">{method.title}</h3>
                <p className="text-lg font-medium text-[#003466] dark:text-gray-200 mb-2">{method.detail}</p>
                <p className="text-[#003466]/80 dark:text-gray-400">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <Contact />
      </div>
    </section>
  );
}