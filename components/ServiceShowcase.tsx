'use client'
import { motion } from 'framer-motion'
import { ShoppingBag, Globe, Smartphone, Database, Search, Palette, Play, Megaphone, Share2, Cloud, Server } from 'lucide-react'
import Image from 'next/image'

export default function ServiceShowcase() {
  const services = [
    {
      icon: ShoppingBag,
      title: "تطوير المتاجر الإلكترونية",
      description: "نُنشئ متاجر إلكترونية احترافية تُقدم تجربة تسوق مميزة",
      image: "/logo (1).jpg",
      technologies: ["Shopify", "WooCommerce", "Magento"],
      color: "from-[#00B272] to-[#89C100]"
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
        color: "from-[#89C100] to-[#003466]"
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

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 bg-white/80 backdrop-blur-md rounded-full text-[#00B272] mb-6 shadow-lg">
            🚀 خدماتنا المتكاملة
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#003466]">حلول</span>{' '}
            <span className="text-[#00B272]">رقمية</span>{' '}
            <span className="text-[#89C100]">شاملة</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-6 pb-8 min-w-max">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[300px] bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-40 rounded-t-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                  </div>

                  <div className="p-6">
                    <div className={`bg-gradient-to-r ${service.color} w-14 h-14 rounded-xl flex items-center justify-center -mt-12 mb-4 shadow-lg`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-[#003466] mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-2 rounded-xl bg-gradient-to-r from-[#003466] to-[#00B272] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                      احصل على الخدمة
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
