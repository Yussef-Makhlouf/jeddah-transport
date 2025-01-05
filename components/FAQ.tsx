'use client'
import { useState } from 'react'
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <div className="relative py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-white/80 via-[#f0f9ff]/60 to-[#e6fffa]/40 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/40"
        />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
        
        {/* Animated Decorative Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-[#00B272]/10 dark:bg-[#00ffaa]/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#003466]/10 dark:bg-[#4d9fff]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Header with Overlapping Elements */}
        <div className="relative text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-8 py-4 rounded-2xl shadow-xl mb-8"
          >
            <HelpCircle className="w-6 h-6 text-[#00B272] dark:text-[#00ffaa]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#003466] to-[#00B272] dark:from-[#4d9fff] dark:to-[#00ffaa] bg-clip-text text-transparent">
              الأسئلة الشائعة
            </span>
            <Sparkles className="w-6 h-6 text-[#00B272] dark:text-[#00ffaa]" />
          </motion.div>
          
          <h2 className="text-5xl font-bold text-[#003466] dark:text-[#4d9fff] mb-6">
            كل ما تحتاج معرفته
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            نجيب على جميع استفساراتكم بشفافية ووضوح
          </p>
        </div>

        {/* Enhanced FAQ Items with Visual Depth */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B272]/5 to-[#003466]/5 dark:from-[#00ffaa]/5 dark:to-[#4d9fff]/5 rounded-2xl transform rotate-1 transition-transform duration-300 group-hover:rotate-2" />
              
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center gap-6"
                >
                  <span className="text-3xl">{faq.icon}</span>
                  <span className="flex-1 text-xl font-bold text-[#003466] dark:text-[#4d9fff] text-right group-hover:text-[#00B272] dark:group-hover:text-[#00ffaa] transition-colors">
                    {faq.question}
                  </span>
                  <motion.span 
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="p-3 rounded-full bg-gradient-to-r from-[#003466] to-[#00B272] dark:from-[#4d9fff] dark:to-[#00ffaa] text-white"
                  >
                    {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </motion.span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 pr-24">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
