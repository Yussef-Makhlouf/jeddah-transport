'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {  Calendar, Clock, User, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import FAQ from '../components/FAQ'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "أحدث التقنيات في تطوير المواقع الإلكترونية 2024",
      excerpt: "تعرف على أهم التقنيات والأدوات المستخدمة في تطوير المواقع الحديثة",
      image: "/logo (1).jpg",
      category: "تطوير المواقع",
      author: "محمد أحمد",
      date: "2024-01-15",
      readTime: "5 دقائق",
      slug: "web-development-trends-2024"
    },
    {
      id: 2,
      title: "كيف تختار أفضل حل تقني لمشروعك؟",
      excerpt: "دليل شامل لاختيار التقنيات المناسبة لمشروعك التجاري",
      image: "/logo (1).jpg",
      category: "استشارات تقنية",
      author: "سارة خالد",
      date: "2024-01-10",
      readTime: "7 دقائق",
      slug: "choosing-tech-solution"
    },
    {
      id: 3,
      title: "مستقبل التجارة الإلكترونية في المملكة",
      excerpt: "نظرة تحليلية على مستقبل التجارة الإلكترونية في السعودية",
      image: "/logo (1).jpg",
      category: "التجارة الإلكترونية",
      author: "عبدالله محمد",
      date: "2024-01-05",
      readTime: "6 دقائق",
      slug: "future-of-ecommerce"
    }
  ]

  return (
    <section className="relative min-h-screen pt-32">
      <Header />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-[#00B272]" fill="currentColor" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#003466] to-[#00B272] bg-clip-text text-transparent">
              المدونة
            </h1>
            <Star className="w-5 h-5 text-[#00B272]" fill="currentColor" />
          </div>
          <h2 className="text-4xl font-bold text-[#003466] mb-4">
            آخر المقالات والأخبار التقنية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف أحدث المقالات في عالم التقنية والتطوير والتصميم
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#00B272]">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003466] mb-3 group-hover:text-[#00B272] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#003466]/80 backdrop-blur-md rounded-2xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-[#fff] mb-4">
            اشترك في نشرتنا البريدية
          </h3>
          <p className="text-white mb-6">
            احصل على آخر المقالات والأخبار التقنية مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#00B272]"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#003466] to-[#00B272] text-white rounded-xl hover:shadow-lg transition-all duration-300">
              اشتراك
            </button>
          </div>
        </div>

      </div>
      <FAQ />
      <Footer />
    </section>
  )
}