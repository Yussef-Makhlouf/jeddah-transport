'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Globe, Smartphone, Database, Search, Palette, Play, Megaphone, Share2, Cloud, Server, Code2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ServiceShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      icon: ShoppingBag,
      title: "تطوير المتاجر الإلكترونية",
      description: "نُنشئ متاجر إلكترونية احترافية تُقدم تجربة تسوق مميزة",
      image: "/logo (1).jpg",
      technologies: ["Shopify", "WooCommerce", "Magento"],
      color: "from-[#00B272] to-[#003466]"
    },
    {
      icon: Globe,
      title: "تطوير المواقع المخصصة",
      description: "نُنشئ مواقع إلكترونية احترافية تُقدم تجربة مستخدم مميزة",
      image: "/logo (1).jpg",
      technologies: ["React", "Next.js", "Laravel"],
      color: "from-[#003466] to-[#00A4D6]"
    },
    {
      icon: Smartphone,
      title: "تطوير تطبيقات الجوال",
      description: "نُطور تطبيقات مُخصصة تلبي احتياجاتك وأهدافك",
      image: "/logo (1).jpg",
      technologies: ["React Native", "Flutter", "iOS/Android"],
      color: "from-[#00A4D6] to-[#00B272]"
    },
    {
      icon: Database,
      title: "تطوير نظامات البيانات",
      description: "نُنشئ نظامات بيانات مُخصصة تلبي احتياجاتك وأهدافك",
      image: "/logo (1).jpg",
      technologies: ["MySQL", "PostgreSQL", "MongoDB"],
        color: "from-[#003466] to-[#003466]"
    },
    {
      icon: Search,
      title: "تصميم الهوية التجارية",
      description: "نُصمم هوية تجارية مميزة لتميز منتجك وترسيخ علامتك التجارية",
      image: "/services/branding.jpg",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    },
    {
      icon: Play,
      title: "تصميم الموشن جرافيك",
      description: "نُصمم موشن جرافيك احترافي يُعزز تفاعل متابعيك مع محتواك", 
      image: "/logo (1).jpg",
      technologies: ["After Effects", "Premier Pro", "Cinema 4D", "Blender"],
    },
    {
      icon: Megaphone,
      title: "تصميم البريد الالكتروني",
      description: "نُنشئ تطبيقات البريد الالكتروني مميزة تلبي احتياجاتك وأهدافك",
        image: "/logo (1).jpg",
        technologies: ["Mailchimp", "SendGrid", "Constant Contact"],
    },
    {
      icon: Share2,
      title: "تصميم الموقع الالكتروني",
      description: "نُصمم موقع احترافي يُعزز تفاعل متابعيك مع محتواك",
      image: "/logo (1).jpg",
      technologies: ["WordPress", "Joomla", "Drupal"],
    },
    {
      icon: Palette,
      title: "تطوير المواقع الالكترونية",
      description: "نُنشئ مواقع احترافية تُقدم تجربة مستخدم مميزة",
      image: "/logo (1).jpg",
      technologies: ["WordPress", "Joomla", "Drupal"],
    },
    {
      icon: Cloud,
      title: "تطوير المواقع الالكترونية",
      description: "نُنشئ مواقع احترافية تُقدم تجربة مستخدم مميزة",
      image: "/logo (1).jpg",
      technologies: ["WordPress", "Joomla", "Drupal"],
    },
    {
      icon: Server,
      title: "تطوير المواقع الالكترونية",
      description: "نُنشئ مواقع احترافية تُقدم تجربة مستخدم مميزة",
      image: "/logo (1).jpg",
      technologies: ["WordPress", "Joomla", "Drupal"],
    },
  ]

  const serviceTabs = [
    {
      title: "تطوير البرمجيات",
      icon: Code2,
      services: [services[0], services[1], services[2], services[3]]
    },
    {
      title: "التصميم والهوية",
      icon: Palette,
      services: [services[4], services[5], services[6], services[7]]
    },
    {
      title: "الحلول السحابية",
      icon: Cloud,
      services: [services[8], services[9], services[10]]
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full text-[#00B272] dark:text-[#00ffaa] font-bold inline-block mb-8 shadow-lg"
          >
            🚀 اكتشف خدماتنا المتكاملة
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-[#003466] dark:text-[#4d9fff]">حلول</span>{' '}
            <span className="text-[#00B272] dark:text-[#00ffaa]">رقمية</span>{' '}
            <span className="text-[#003466] dark:text-[#4d9fff]">شاملة</span>
          </h2>
        </motion.div>

        {/* Enhanced Tabs Navigation */}
        <div className="flex justify-center mb-16">
          <div className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl">
            <div className="flex flex-wrap justify-center gap-4">
              {serviceTabs.map((tab, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`
                    flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300
                    ${activeTab === index 
                      ? 'bg-gradient-to-r from-[#00B272] to-[#003466] text-white shadow-lg scale-105'
                      : 'text-[#003466] dark:text-[#4d9fff] hover:bg-[#00B272]/10 dark:hover:bg-[#00ffaa]/10'
                    }
                  `}
                  whileHover={{ scale: activeTab === index ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="w-6 h-6" />
                  <span className="font-bold text-lg">{tab.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceTabs[activeTab].services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                </div>

                <div className="p-8">
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center -mt-16 mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#003466] dark:text-[#4d9fff] mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-[#003466]/5 dark:bg-[#4d9fff]/10 rounded-full text-sm font-medium text-[#003466] dark:text-[#4d9fff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button 
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#003466] to-[#00B272] text-white font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>احصل على الخدمة</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {hoveredCard === index && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg"
                  >
                    <span className="text-[#00B272] dark:text-[#00ffaa] font-bold">خدمة متميزة</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
