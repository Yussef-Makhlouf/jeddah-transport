  'use client'
  import {  Database, Globe, ArrowRight, Smartphone, ShoppingBag } from 'lucide-react'
  import { motion } from 'framer-motion'
  import Image from 'next/image'

  export default function TechServices() {
    const services = [
      {
        icon: ShoppingBag,
        title: "تطوير المتاجر الإلكترونية",
        description: "نبني متاجر إلكترونية متكاملة تدعم نمو تجارتك",
        features: [
          "منصات متعددة القنوات",
          "أنظمة دفع متكاملة",
          "إدارة المخزون الذكية",
          "تحليلات متقدمة للمبيعات",
          "تكامل مع شركات الشحن",
          "نظام ولاء العملاء"
        ],
        projects: [
          { name: "متجر الأزياء الفاخرة", image: "/logo (1).jpg" },
          { name: "سوق الإلكترونيات", image: "/logo (1).jpg" },
          { name: "متجر المنتجات الصحية", image: "/logo (1).jpg" }
        ],
        techStack: ["React", "Node.js", "MongoDB", "AWS"],
        color: "from-[#00B272] to-[#003466]"
      },
      {
        icon: Smartphone,
        title: "تطوير تطبيقات الجوال",
        description: "نطور تطبيقات متكاملة للأجهزة الذكية",
        features: [
          "تطبيقات iOS و Android",
          "واجهات مستخدم مميزة",
          "أداء عالي وسريع",
          "تكامل مع الخدمات السحابية",
          "خدمات الموقع والخرائط",
          "إشعارات فورية"
        ],
        projects: [
          { name: "تطبيق توصيل الطلبات", image: "/logo (1).jpg" },
          { name: "تطبيق الخدمات المنزلية", image: "/logo (1).jpg" },
          { name: "تطبيق الحجوزات", image: "/logo (1).jpg"  }
        ],
        techStack: ["React Native", "Flutter", "Firebase", "Node.js"],
        color: "from-[#003466] to-[#00A4D6]"
      },
      {
        icon: Globe,
        title: "تطوير المواقع المتقدمة",
        description: "نصمم ونطور مواقع عصرية بأحدث التقنيات",
        features: [
          "تصميم عصري وجذاب",
          "أداء عالي ومتوافق",
          "تحسين محركات البحث",
          "لوحة تحكم متكاملة",
          "حماية وأمان متقدم",
          "دعم فني مستمر"
        ],
        projects: [
          { name: "موقع شركة عقارية", image: "/logo (1).jpg"  },
          { name: "منصة تعليمية", image: "/logo (1).jpg"  },
          { name: "بوابة خدمات حكومية", image: "/logo (1).jpg"}
        ],
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Azure"],
        color: "from-[#00A4D6] to-[#00B272]"
      },
      {
        icon: Database,
        title: "تطوير قاعدة البيانات",
        description: "نصمم ونطور قاعدة بيانات متكاملة للموقع الذكي",
        features: [
          "تصميم قاعدة بيانات متقدم",
          "تحليلات متقدمة للمبيعات",
          "تكامل مع شركات الشحن",
          "نظام ولاء العملاء",
          "دعم فني مستمر",
          "حماية وأمان متقدم"
        ],
        projects: [
          { name: "موقع الأطباء", image: "/logo (1).jpg"  },
          { name: "موقع الأطفال", image: "/logo (1).jpg"  },
          { name: "موقع الأطعمة", image: "/logo (1).jpg"  }
        ],
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Azure"],
        color: "from-[#00A4D6] to-[#00B272]"
      },
        ]
        

    

    return (
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#003466]/95"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/20 rounded-full blur-3xl animate-pulse-slower"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-[#00B272] mb-6">
              ✨ مشاريعنا وخدماتنا
            </span>
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-white">نبتكر</span>{' '}
              <span className="text-[#ffff]">حلول</span>{' '}
              <span className="text-[#00B272]">رقمية</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00B272] via-[#003466] to-[#00A4D6] mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 ${service.color}/5 rounded-3xl transform rotate-1 transition-transform duration-300 group-hover:rotate-2`}></div>
              
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Content Side */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-6">
                        <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-4xl font-bold text-white">{service.title}</h3>
                      </div>

                      <p className="text-xl text-white/80">{service.description}</p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-white/90">
                            <div className={`bg-gradient-to-r ${service.color} w-2 h-2 rounded-full`}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3">
                        {service.techStack.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects Showcase */}
{/* Projects Showcase */}
<div className="space-y-6">
  <h4 className="text-2xl font-bold text-white mb-8">مشاريع مميزة</h4>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    {service.projects.map((project, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.2 }}
        className="group/project relative aspect-square overflow-hidden rounded-2xl"
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transform group-hover/project:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003466]/90 to-transparent opacity-0 group-hover/project:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h5 className="text-lg md:text-xl font-bold text-white mb-2">{project.name}</h5>
          <button className="flex items-center gap-2 text-[#00B272] font-medium group-hover/project:text-white transition-colors">
            <span>عرض التفاصيل</span>
            <ArrowRight className="w-5 h-5 group-hover/project:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#00B272] to-[#003466] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              تواصل معنا لبدء مشروعك
            </motion.button>
          </div>
        </div>
      </section>
    )
  }
