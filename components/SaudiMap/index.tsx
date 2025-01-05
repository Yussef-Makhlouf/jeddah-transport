"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Brain,Database, Cloud } from 'lucide-react';

const locations = [
  {
    id: 1,
    city: "الرياض",
    position: "top-1/4 left-1/2",
    delay: 0,
    services: "المقر الرئيسي"
  },
  {
    id: 2,
    city: "جدة",
    position: "top-1/2 right-1/3",
    delay: 0.2,
    services: "مركز التطوير"
  },
  {
    id: 3,
    city: "الدمام",
    position: "bottom-1/3 left-1/3",
    delay: 0.4,
    services: "خدمات العملاء"
  }
];

const features = [
  {
    icon: Code2,
    title: "تطوير برمجي",
    description: "نطور حلول برمجية مبتكرة تناسب متطلبات السوق السعودي",
    color: "#003466"
  },
  {
    icon: Brain,
    title: "حلول ذكية",
    description: "نستخدم أحدث تقنيات الذكاء الاصطناعي في حلولنا البرمجية",
    color: "#00b272"
  },
  {
    icon: Database,
    title: "قواعد البيانات",
    description: "تصميم وإدارة قواعد البيانات المتقدمة وحلول التخزين السحابي",
    color: "#003466"
  },
  {
    icon: Cloud,
    title: "خدمات سحابية",
    description: "حلول سحابية متكاملة تضمن أداء عالي وموثوقية تامة",
    color: "#00b272"
  }
];

const SaudiMap = () => {
  return (
    <section className="relative min-h-screen" style={{ background: 'linear-gradient(180deg, #fff 0%, rgba(0, 52, 102, 0.05) 100%)' }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#003466 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.1 }} />
      
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 rounded-full inline-block mb-4"
            style={{ background: 'rgba(0, 178, 114, 0.1)', color: '#00b272' }}
          >
            ترميز كود للبرمجيات
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#003466' }}>
            نطور حلول تقنية متكاملة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم خدماتنا في جميع أنحاء المملكة العربية السعودية بأحدث التقنيات العالمية
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 rounded-xl shadow-lg border transition-all duration-300"
                  style={{ 
                    background: 'white',
                    borderColor: feature.color,
                    borderWidth: '2px'
                  }}
                >
                  <feature.icon style={{ color: feature.color }} className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#003466' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8"
            style={{ border: '2px solid rgba(0, 52, 102, 0.1)' }}
          >
            <div className="relative aspect-square">
              <Image
                src="/country.svg"
                alt="خريطة المملكة العربية السعودية"
                fill
                className="object-contain"
              />
              
              {locations.map((location) => (
                <motion.div
                  key={location.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: location.delay }}
                  whileHover={{ scale: 1.2 }}
                  className={`absolute ${location.position} flex flex-col items-center`}
                >
                  <div className="w-4 h-4 rounded-full shadow-lg" style={{ background: '#00b272', boxShadow: '0 0 20px rgba(0, 178, 114, 0.3)' }} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: location.delay + 0.3 }}
                    className="mt-2 px-4 py-2 rounded-lg shadow-lg bg-white"
                  >
                    <span className="text-sm font-bold block" style={{ color: '#003466' }}>
                      {location.city}
                    </span>
                    <span className="text-xs" style={{ color: '#00b272' }}>
                      {location.services}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 px-4 py-2 rounded-lg shadow-lg"
              style={{ background: '#003466', color: 'white' }}
            >
              <span className="font-bold">رؤية 2030</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-1/4 left-1/4 px-4 py-2 rounded-lg shadow-lg"
              style={{ background: '#00b272', color: 'white' }}
            >
              <span className="font-bold">تقنيات متطورة</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaudiMap;
