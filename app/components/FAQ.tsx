'use client'
import { useState } from 'react'
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqData = [
    {
      question: "ما هي الخدمات البرمجية التي تقدمونها؟",
      answer: "نقدم مجموعة متكاملة من الخدمات تشمل تطوير المتاجر الإلكترونية، المواقع المخصصة، تطبيقات الجوال، أنظمة ERP، وخدمات السيرفرات المحلية والعالمية.",
      icon: "💻"
    },
    {
      question: "كيف يمكنني البدء في تطوير متجري الإلكتروني؟",
      answer: "نقدم استشارة مجانية لتحديد احتياجاتك، ثم نقترح الحلول المناسبة ونبدأ في تطوير متجر إلكتروني احترافي يناسب نشاطك التجاري باستخدام أحدث التقنيات.",
      icon: "🛍️"
    },
    {
      question: "ما هي خدمات التسويق الرقمي التي تقدمونها؟",
      answer: "نقدم خدمات شاملة تتضمن تحسين محركات البحث SEO، إدارة حسابات التواصل الاجتماعي، تصميم الهوية التجارية، وتصميم الموشن جرافيك لتعزيز حضورك الرقمي.",
      icon: "📱"
    },
    {
      question: "كيف تساعدون في تحسين ظهور موقعي في محركات البحث؟",
      answer: "نستخدم استراتيجيات SEO متقدمة وأفضل الممارسات لتحسين ترتيب موقعك في نتائج البحث، مع التركيز على المحتوى الجيد والكلمات المفتاحية المستهدفة.",
      icon: "🔍"
    },
    {
      question: "ما هي مميزات تطبيقات الجوال التي تطورونها؟",
      answer: "نطور تطبيقات جوال احترافية تتميز بالأداء العالي، واجهة مستخدم سلسة، وتجربة مستخدم مميزة، مع دعم لجميع أنظمة التشغيل iOS وAndroid.",
      icon: "📱"
    },
    {
      question: "كيف تساعدون في تطوير الهوية التجارية؟",
      answer: "نقدم خدمات تصميم هوية تجارية متكاملة تشمل الشعار، الألوان، الخطوط، والعناصر البصرية التي تعكس قيم علامتك التجارية وتميزها عن المنافسين.",
      icon: "🎨"
    }
  ]

  return (
    <div className="relative py-32 overflow-hidden ">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00B272]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#003466]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float-slow">
          <div className="w-20 h-20 border-4 border-[#00B272]/20 rounded-2xl rotate-45"></div>
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float-slower">
          <div className="w-16 h-16 border-4 border-[#003466]/20 rounded-full"></div>
        </div>
        
        {/* Dot Patterns */}
        <div className="absolute top-1/3 right-1/4">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#00B272]/30 rounded-full animate-pulse-random"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-[#00B272]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#003466] to-[#00B272] bg-clip-text text-transparent">
              الأسئلة الشائعة
            </span>
            <Sparkles className="w-5 h-5 text-[#00B272]" />
          </div>
          <h2 className="text-4xl font-bold text-[#003466] mb-4">
            كل ما تحتاج معرفته
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نجيب على جميع استفساراتكم بشفافية ووضوح
          </p>
        </div>

        {/* Enhanced FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center gap-4 text-right"
              >
                <span className="text-2xl">{faq.icon}</span>
                <span className="flex-1 font-semibold text-lg text-[#003466] group-hover:text-[#00B272] transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 p-2 rounded-full bg-gradient-to-r from-[#003466] to-[#00B272] text-white transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 pr-20">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
