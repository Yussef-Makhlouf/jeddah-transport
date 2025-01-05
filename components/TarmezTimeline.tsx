"use client";

import React, { useState } from "react";
import { Code2, Rocket, Brain, Target, Award } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    year: "2018",
    icon: Code2,
    title: "تأسيس ترميز تك",
    description: "تأسيس شركة ترميز تك لتكون الشركة البرمجية الأولى في المملكة العربية السعودية، هدفنا تقديم حلول تقنية مبتكرة.",
    achievement: "إطلاق أول منصة برمجية"
  },
  {
    year: "2019",
    icon: Rocket,
    title: "التوسع والنمو",
    description: "إطلاق أول حلولنا التقنية المتميزة لتطوير المواقع الإلكترونية وتطبيقات الهواتف المحمولة.",
    achievement: "50+ مشروع ناجح"
  },
  {
    year: "2020",
    icon: Brain,
    title: "حلول متكاملة",
    description: "التوسع في تقديم خدمات نظم الأعمال المتكاملة والحلول البرمجية للشركات الكبرى.",
    achievement: "شراكات استراتيجية"
  },
  {
    year: "2021",
    icon: Target,
    title: "الذكاء الاصطناعي",
    description: "دخولنا مجال الذكاء الاصطناعي وإنجاز مشروعات ناجحة للقطاعين الحكومي والخاص.",
    achievement: "تطوير حلول ذكية"
  },
  {
    year: "2022",
    icon: Award,
    title: "قيادة التحول الرقمي",
    description: "قيادة التحول الرقمي بالمملكة وتقديم حلول تقنية متوافقة مع رؤية 2030.",
    achievement: "ريادة السوق المحلي"
  }
];

export default function TarmezTimeline() {
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'radial-gradient(#003466 0.5px, transparent 0.5px)', 
        backgroundSize: '24px 24px', 
        opacity: 0.05 
      }} />

      <div className="container mx-auto px-4 py-16 relative">
        <motion.div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 rounded-full inline-block bg-[#00B272]/10 dark:bg-[#00B272]/5 text-[#00B272] dark:text-[#00ffaa]"
          >
            رحلة النجاح والابتكار
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#003466] dark:text-[#4d9fff]"
          >
            مسيرة شركة ترميز تك
          </motion.h2>
        </motion.div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start space-x-4 rtl:space-x-reverse"
              onClick={() => setHoveredYear(item.year === hoveredYear ? null : item.year)}
            >
              <div className="relative">
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2",
                    hoveredYear === item.year
                      ? "border-[#00B272] bg-[#00B272] dark:bg-[#00ffaa] text-white"
                      : "border-[#00A4D6] dark:border-[#00A4D6]/50 bg-white dark:bg-gray-800 text-[#003466] dark:text-[#4d9fff]"
                  )}
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
                {index !== timelineData.length - 1 && (
                  <div className="absolute top-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#00B272] to-[#00B272]/20 dark:from-[#00ffaa] dark:to-[#00ffaa]/20" />
                )}
              </div>

              <div className="flex-1">
                <span className="block font-bold text-xl mb-2 text-[#003466] dark:text-[#4d9fff]">
                  {item.year}
                </span>
                {hoveredYear === item.year && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 border-2 border-[#00A4D6]/20 dark:border-[#00A4D6]/10"
                  >
                    <h3 className="text-xl font-bold mb-3 text-[#00B272] dark:text-[#00ffaa]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="rounded-lg p-4 bg-[#003466]/5 dark:bg-[#4d9fff]/10">
                      <p className="font-semibold text-[#00A4D6] dark:text-[#4dc4ff]">
                        ✨ {item.achievement}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-[50%] left-0 right-0 h-1" 
              style={{ 
                background: 'linear-gradient(to right, rgba(0, 178, 114, 0.2), #00B272, rgba(0, 178, 114, 0.2))'
              }} 
            />

            <div className="flex justify-between items-center relative mb-32">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                  onMouseEnter={() => setHoveredYear(item.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={cn(
                      "w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300",
                      "shadow-xl border-2",
                      hoveredYear === item.year
                        ? "border-[#00B272] bg-[#00B272] dark:bg-[#00ffaa] text-white"
                        : "border-[#00A4D6] dark:border-[#00A4D6]/50 bg-white dark:bg-gray-800 text-[#003466] dark:text-[#4d9fff] hover:border-[#00B272] dark:hover:border-[#00ffaa]"
                    )}
                  >
                    <item.icon className="w-10 h-10" />
                  </motion.div>

                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="font-bold text-2xl text-[#003466] dark:text-[#4d9fff]">
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative min-h-[300px]">
              {timelineData.map((item) => (
                <motion.div
                  key={item.year}
                  initial={false}
                  animate={hoveredYear === item.year ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  className="absolute w-full"
                >
                  {hoveredYear === item.year && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-3xl mx-auto border-2 border-[#00A4D6]/20 dark:border-[#00A4D6]/10"
                    >
                      <div className="flex items-center gap-6 mb-6">
                        <div className="p-4 rounded-full bg-[#00B272]/10 dark:bg-[#00ffaa]/10">
                          <item.icon className="w-8 h-8 text-[#00B272] dark:text-[#00ffaa]" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#003466] dark:text-[#4d9fff]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="rounded-lg p-6 bg-[#003466]/5 dark:bg-[#4d9fff]/10">
                        <p className="text-lg font-semibold text-[#00A4D6] dark:text-[#4dc4ff]">
                          ✨ إنجاز العام: {item.achievement}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
