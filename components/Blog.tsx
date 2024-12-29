import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft, Clock, User, ChevronLeft } from 'lucide-react'

export default function Blog() {
  const featuredPost = {
    title: 'مستقبل النقل اللوجستي في المملكة العربية السعودية',
    excerpt: 'استكشف التطورات التقنية والاستراتيجية في قطاع النقل السعودي ودوره في تحقيق رؤية 2030',
    date: '١٥ مايو ٢٠٢٣',
    readTime: '١٠ دقائق',
    author: 'م. عبدالله الغامدي',
    category: 'رؤية 2030',
    image: '/images/future-logistics.jpg'
  }

  const posts = [
    {
      title: 'التقنيات الحديثة في إدارة الأساطيل',
      excerpt: 'تعرف على أحدث التقنيات المستخدمة في إدارة وتتبع أساطيل النقل',
      date: '١٠ مايو ٢٠٢٣',
      readTime: '٥ دقائق',
      author: 'م. سارة القحطاني',
      category: 'تقنيات النقل',
      image: '/images/fleet-tech.jpg'
    },
    {
      title: 'أفضل ممارسات الشحن البحري',
      excerpt: 'دليل شامل لأفضل ممارسات الشحن البحري وتجنب التحديات الشائعة',
      date: '٥ مايو ٢٠٢٣',
      readTime: '٨ دقائق',
      author: 'م. فهد العتيبي',
      category: 'الشحن البحري',
      image: '/images/shipping-best-practices.jpg'
    },
    {
      title: 'مستقبل النقل المستدام',
      excerpt: 'نظرة على مستقبل النقل المستدام وتأثيره على البيئة',
      date: '١ مايو ٢٠٢٣',
      readTime: '٦ دقائق',
      author: 'د. نورة السعيد',
      category: 'الاستدامة',
      image: '/images/sustainable-transport.jpg'
    }
  ]

  return (
    <section id="blog" className="py-24 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500">
              آخر المستجدات
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف أحدث الأخبار والمقالات في عالم النقل والخدمات اللوجستية
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-[400px] lg:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/50 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-amber-600 px-4 py-2 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 hover:text-amber-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-1 rounded-full">
                      <div className="bg-white p-1 rounded-full">
                        <User className="h-5 w-5 text-amber-600" />
                      </div>
                    </div>
                    <span className="text-gray-700">{featuredPost.author}</span>
                  </div>
                  <Link 
                    href="#" 
                    className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors font-medium"
                  >
                    اقرأ المزيد
                    <ChevronLeft className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-amber-600 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">{post.author}</span>
                  </div>
                  
                  <Link 
                    href="#" 
                    className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    اقرأ المزيد
                    <ChevronLeft className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            جميع المقالات
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
