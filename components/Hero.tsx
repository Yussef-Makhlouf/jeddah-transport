'use client'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
        
        {/* Enhanced Animated Blobs */}
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 dark:bg-[#00B272]/5 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 dark:bg-[#00A4D6]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full border border-[#00A4D6]/20 dark:border-[#00A4D6]/10 shadow-lg">
              <span className="text-[#00B272] dark:text-[#00ffaa] font-bold">✨ نبتكر المستقبل الرقمي</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="block text-[#003466] dark:text-[#4d9fff] mb-4"
              >
                نطور
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-[#89C100] dark:text-[#a3e600] mb-4"
              >
                مستقبلك
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative text-[#00B272] dark:text-[#00ffaa]"
              >
                الرقمي
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#00A4D6] dark:bg-[#00A4D6]/40 opacity-20 blur-sm"></span>
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              نقدم <span className="text-[#00A4D6] dark:text-[#4dc4ff] font-bold">حلول برمجية</span> مبتكرة تساعد شركتك على 
              <span className="text-[#89C100] dark:text-[#a3e600] font-bold"> النمو</span> في العصر الرقمي
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6"
            >
              <button className="group bg-gradient-to-r from-[#00B272] to-[#89C100] dark:from-[#00ffaa] dark:to-[#a3e600] text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00B272]/30">
                ابدأ مشروعك
                <ArrowRight className="inline-block mr-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-[#003466] dark:text-[#4d9fff] px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 border border-[#00A4D6]/20 dark:border-[#00A4D6]/10 shadow-lg">
                تعرف علينا
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00A4D6]/10 dark:via-[#00A4D6]/5 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:block"
          >
            <div className="relative z-10 bg-[#1E1E1E] backdrop-blur-md rounded-2xl p-6 border border-[#00A4D6]/20 shadow-xl overflow-hidden" style={{ backdropFilter: 'blur(20px)'}}>
              {/* IDE Header */}
              <div className="flex items-center justify-between mb-4 border-b border-[#333] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <span className="text-[#00B272] font-mono text-sm">innovation.tsx</span>
                <div className="flex items-center gap-2">
                  <button className="text-[#666] hover:text-[#888] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M18 12H6M6 12L12 6M6 12L12 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="text-[#666] hover:text-[#888] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6 12H18M18 12L12 6M18 12L12 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="space-y-4 font-mono text-sm leading-relaxed" dir="ltr">
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }}
    className="flex items-center gap-4"
  >
    <span className="text-[#4D4D4D] select-none">01</span>
    <span className="text-[#00B272]">import</span>
    <span className="text-[#00A4D6]">{'{ Innovation }'}</span>
    <span className="text-[#00B272]">from</span>
    <span className="text-[#89C100]">&lsquo;@tarmez/tech&lsquo;</span>
    <span className="text-white">;</span>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 }}
    className="flex items-center gap-4"
  >
    <span className="text-[#4D4D4D] select-none">02</span>
    <span className="text-[#00A4D6]">const</span>
    <span className="text-[#89C100]">TarmezCode</span>
    <span className="text-white">=</span>
    <span className="text-[#00B272]">async</span>
    <span className="text-[#00A4D6]">()</span>
    <span className="text-white">{' => '}</span>
    <span className="text-white">{'{'}</span>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6 }}
    className="flex items-center gap-4 ml-8"
  >
    <span className="text-[#4D4D4D] select-none">03</span>
    <span className="text-[#00A4D6]">const</span>
    <span className="text-[#89C100]">solution</span>
    <span className="text-white">=</span>
    <span className="text-[#00B272]">new</span>
    <span className="text-[#00A4D6]">Innovation()</span>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8 }}
    className="flex items-center gap-4 ml-8"
  >
    <span className="text-[#4D4D4D] select-none">04</span>
    <span className="text-[#00B272]">await</span>
    <span className="text-[#89C100]">solution</span>
    <span className="text-white">.</span>
    <span className="text-[#00A4D6]">transform()</span>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1 }}
    className="flex items-center gap-4"
  >
    <span className="text-[#4D4D4D] select-none">05</span>
    <span className="text-white">{'}'}</span>
  </motion.div>
</div>


              {/* Mini Map */}
              <div className="absolute right-2 top-20 w-20 h-32 bg-[#2D2D2D] rounded opacity-30 pointer-events-none"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 right-10 w-20 h-20 border-4 border-[#00B272]/20 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-5 left-5 w-32 h-32 bg-gradient-to-r from-[#00A4D6]/10 to-[#89C100]/10 rounded-xl transform rotate-12 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}