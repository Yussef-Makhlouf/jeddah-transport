'use client'
import {  ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Enhanced Animated Blobs */}
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-[#00A4D6]/20 shadow-lg">
              <span className="text-[#00B272] font-bold">✨ نبتكر المستقبل الرقمي</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="block text-[#003466] mb-4"
              >
                نطور
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-[#89C100] mb-4"
              >
                مستقبلك
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative text-[#00B272]"
              >
                الرقمي
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#00A4D6] opacity-20 blur-sm"></span>
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl text-gray-600 leading-relaxed"
            >
              نقدم <span className="text-[#00A4D6] font-bold">حلول برمجية</span> مبتكرة تساعد شركتك على 
              <span className="text-[#89C100] font-bold"> النمو</span> في العصر الرقمي
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6"
            >
              <button className="group bg-gradient-to-r from-[#00B272] to-[#89C100] text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00B272]/30">
                ابدأ مشروعك
                <ArrowRight className="inline-block mr-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group relative overflow-hidden bg-white/80 backdrop-blur-md text-[#003466] px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 border border-[#00A4D6]/20 shadow-lg">
                تعرف علينا
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00A4D6]/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
              </button>
            </motion.div>
          </motion.div>

          {/* Enhanced Interactive Code Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-[#00A4D6]/20 shadow-xl">
              <div className="flex items-center gap-2 mb-6 border-b border-[#00A4D6]/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-[#00B272]"></div>
                <div className="w-3 h-3 rounded-full bg-[#89C100]"></div>
                <div className="w-3 h-3 rounded-full bg-[#00A4D6]"></div>
                <span className="ml-4 text-[#00B272] font-mono">innovation.tsx</span>
              </div>
              
              <div className="space-y-6 font-mono " >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  dir='rtl'
                >
                  <span className="text-[#00B272]">import</span>{' '}
                  <span className="text-[#00A4D6]">{'{ Innovation }'}</span>{' '}
                  <span className="text-[#00B272]">from</span>{' '}
                  <span className="text-[#89C100]">&apos;@future/tech&apos;</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="space-y-2"
                >
                  <div>
                    <span className="text-[#00A4D6]">async function</span>{' '}
                    <span className="text-[#89C100]">buildFuture</span>() {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00B272]">const solution = new Innovation()</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#00A4D6]">await</span>{' '}
                    <span className="text-[#89C100]">solution.transform()</span>
                  </div>
                  <div>{'}'}</div>
                </motion.div>
              </div>
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