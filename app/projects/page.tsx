'use client'
import { ArrowRight, Star, Globe, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Testimonials from '@/components/Testimonials'
const projects = [
  {
    id: 1,
    title: "منصة التجارة الإلكترونية",
    description: "تطوير متجر إلكتروني متكامل مع نظام إدارة مخزون متقدم",
    image: "/logo (1).jpg",
    category: "ecommerce",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
    client: "شركة المستقبل للتجارة"
  },
  {
    id: 2,
    title: "تطبيق إدارة المشاريع",
    description: "منصة متكاملة لإدارة المشاريع وتتبع المهام",
    image: "/logo (1).jpg",
    category: "custom",
    technologies: ["React", "Firebase", "Material UI"],
    link: "#",
    client: "مؤسسة التقنية الحديثة"
  },
  {
    id: 3,
    title: "نظام حجز المواعيد",
    description: "تطوير نظام حجز مواعيد ذكي للعيادات الطبية",
    image: "/logo (1).jpg",
    category: "custom",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    link: "#",
    client: "مجموعة المستشفيات الدولية"
  }
]

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'ecommerce', name: 'تطوير المتاجر الإلكترونية' },
  { id: 'custom', name: 'تطوير المواقع المخصصة' },
  { id: 'mobile', name: 'تطوير تطبيقات الجوال' },
  { id: 'erp', name: 'تطوير أنظمة ال ERP' },
  { id: 'branding', name: 'تصميم الهوية التجارية' },
  { id: 'motion', name: 'تصميم الموشن جرافيك' }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  )

  return (
    <section className="relative min-h-screen pt-24 bg-gradient-to-b from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      {/* Enhanced Hero Section */}
{/* Enhanced Hero Section */}
<div className="relative z-10 mb-32">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      {/* Text Content */}
      <div className="space-y-8 lg:pr-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg"
        >
          <Star className="w-6 h-6 text-[#00B272] dark:text-[#00ffaa]" fill="currentColor" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#003466] to-[#00B272] dark:from-[#4d9fff] dark:to-[#00ffaa] bg-clip-text text-transparent">
            معرض أعمالنا
          </h1>
          <Star className="w-6 h-6 text-[#00B272] dark:text-[#00ffaa]" fill="currentColor" />
        </motion.div>

        <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
          <span className="text-[#003466] dark:text-[#4d9fff]">نحول</span>{' '}
          <span className="text-[#00B272] dark:text-[#00ffaa]">أفكاركم</span>{' '}
          <span className="text-[#003466] dark:text-[#4d9fff]">إلى</span>
          <br />
          <span className="text-[#003466] dark:text-[#4d9fff]">واقع ملموس</span>
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300">
          نقدم حلولاً تقنية متكاملة تلبي احتياجات عملائنا وتتجاوز توقعاتهم
        </p>
      </div>

      {/* Overlapping Images */}
{/* Modern Split Images Design */}
<div className="relative h-[700px]">
  {/* Decorative Background */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="absolute inset-0 bg-gradient-to-r from-[#003466]/5 to-[#00B272]/5 dark:from-[#4d9fff]/5 dark:to-[#00ffaa]/5 rounded-[3rem] transform rotate-3"
  />

  {/* Left Image */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    className="absolute top-10 left-0 w-3/5 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transform -rotate-6"
  >
    <div className="relative w-full h-full">
      <Image
        src="/logo (1).jpg"
        alt="Project Showcase 1"
        fill
        className="object-cover scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#003466]/60 via-[#003466]/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />
    </div>
  </motion.div>

  {/* Right Image */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    className="absolute bottom-10 right-0 w-3/5 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-6"
  >
    <div className="relative w-full h-full">
      <Image
        src="/logo (1).jpg"
        alt="Project Showcase 2"
        fill
        className="object-cover scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-bl from-[#00B272]/60 via-[#00B272]/30 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />
    </div>
  </motion.div>

  {/* Connecting Elements */}
  <motion.div
    animate={{ 
      scale: [1, 1.2, 1],
      rotate: [0, 360]
    }}
    transition={{ 
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }}
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
  >
    <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#00B272]/20 dark:border-[#00ffaa]/20 animate-spin-slow" />
    <div className="absolute inset-2 rounded-full border-4 border-dashed border-[#003466]/20 dark:border-[#4d9fff]/20 animate-spin-reverse-slow" />
  </motion.div>
</div>

    </motion.div>
  </div>
</div>

        {/* Enhanced Categories Filter */}
        <div className="container mx-auto px-4 mb-16">
          {/* Desktop View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-8 py-4 rounded-xl transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#003466] to-[#00B272] dark:from-[#4d9fff] dark:to-[#00ffaa] text-white shadow-lg'
                    : 'bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:shadow-md'
                  }
                `}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Bar */}
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-4 left-4 right-4 z-50"
            >
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-4">
                <div className="flex overflow-x-auto hide-scrollbar gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
                        ${activeCategory === category.id
                          ? 'bg-gradient-to-r from-[#003466] to-[#00B272] dark:from-[#4d9fff] dark:to-[#00ffaa] text-white shadow-md'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                        }
                      `}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Add this CSS to your global styles */}
        <style jsx global>{`
          .hide-scrollbar {
            -ms-overflow-style: none
            scrollbar-width: none
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none
          }
        `}</style>
      {/* Enhanced Projects Grid */}
      <div className="container mx-auto px-4 pb-32">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Link
                        href={project.link}
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 text-[#00B272] dark:text-[#00ffaa] font-bold hover:scale-105 transition-transform"
                      >
                        عرض التفاصيل
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-4 py-2 bg-[#00B272]/10 dark:bg-[#00ffaa]/10 text-[#00B272] dark:text-[#00ffaa] rounded-full text-sm font-bold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#003466] dark:text-[#4d9fff] mb-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1.5 bg-[#003466]/5 dark:bg-[#4d9fff]/10 rounded-lg text-sm font-medium text-[#003466] dark:text-[#4d9fff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 mb-6">
                    <Globe className="w-5 h-5" />
                    <span className="font-medium">{project.client}</span>
                  </div>

                  {/* View Project Link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-[#00B272] dark:text-[#00ffaa] hover:text-[#003466] dark:hover:text-[#4d9fff] transition-colors font-bold"
                  >
                    عرض المشروع
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Testimonials />
      <Footer />
    </section>
  )
}