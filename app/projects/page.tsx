'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Testimonials from '@/components/Testimonials'
import { ArrowRight, Star, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' ? true : project.category === activeCategory
  )

  return (
    <section className="relative min-h-screen pt-32 ">
      <Header />
      
      {/* Enhanced Hero Section */}
      <div className="relative z-10 mb-40 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full">
                <Star className="w-5 h-5 text-[#00B272]" fill="currentColor" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#003466] to-[#00B272] bg-clip-text text-transparent">
                  معرض أعمالنا
                </h1>
                <Star className="w-5 h-5 text-[#00B272]" fill="currentColor" />
              </div>
              
              <h2 className="text-5xl font-bold text-[#003466] leading-tight">
                نحول <span className="text-[#00B272]">أفكاركم</span> إلى
                <br />واقع ملموس
              </h2>
              
              <p className="text-lg text-gray-600">
                نقدم حلولاً تقنية متكاملة تلبي احتياجات عملائنا وتتجاوز توقعاتهم
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/logo (1).jpg"
                alt="Our Projects"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003466]/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#003466] to-[#00B272] text-white shadow-lg'
                  : 'bg-white/80 hover:bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4  pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#00B272]/10 text-[#00B272] rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#003466] mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-[#003466]/5 rounded-lg text-sm text-[#003466]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Client */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Globe className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>

                  {/* View Project Button */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-[#00B272] hover:text-[#003466] transition-colors"
                  >
                    عرض المشروع
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials  />
      <Footer />
    </section>
  )
}