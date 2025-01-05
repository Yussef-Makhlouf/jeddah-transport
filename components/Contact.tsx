'use client'
import { useState } from 'react'
import { Mail, Phone, Send, Loader2, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون أكثر من حرفين'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().min(10, 'رقم الهاتف غير صحيح'),
  message: z.string().min(10, 'الرسالة يجب أن تكون أكثر من 10 أحرف')
})

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      // Add your email sending logic here using formData
      console.log('Sending email with data:', formData)
      await new Promise(resolve => setTimeout(resolve, 2000))
      reset()
      alert('تم إرسال رسالتك بنجاح')
    } catch (err: unknown) {
      console.error(err)
      alert('حدث خطأ أثناء إرسال الرسالة')
    }
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Building2,
      title: "عنواننا",
      details: ["الطابق 26 - برج الشاشة", "شارع الملك عبدالعزيز", "جدة، المملكة العربية السعودية"]
    },
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+966 577 080 109"]
    },
    {
      icon: Mail,
      title: "راسلنا",
      details: ["info@tarmeeztech.com"]
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00B272]/10 dark:bg-[#00B272]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00A4D6]/10 dark:bg-[#00A4D6]/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 bg-white/80 dark:bg-gray-800 backdrop-blur-md rounded-full text-[#00B272] mb-6 shadow-lg">
          👋 لا تترددوا في التواصل معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            <span className="text-[#003466] dark:text-white">نسعد</span>{' '}
            <span className="text-[#00B272]">بتواصلك</span>{' '}
            <span className="text-[#003466]">معنا</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            نحن نسعد باتصالك وتسرنا مساعدتك، حتى وإن لم تكن عميل لدينا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/80 dark:bg-gray-800 backdrop-blur-md p-8 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-[#003466] dark:text-gray-200 mb-2">الاسم</label>
                <input
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#00B272] outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                  placeholder="أدخل اسمك"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name.message as string}</span>
                )}
              </div>

              <div>
                <label className="block text-[#003466] dark:text-gray-200 mb-2">البريد الإلكتروني</label>
                <input
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#00B272] outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message as string}</span>
                )}
              </div>

              <div>
                <label className="block text-[#003466] dark:text-gray-200 mb-2">رقم الهاتف</label>
                <input
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#00B272] outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                  placeholder="أدخل رقم هاتفك"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone.message as string}</span>
                )}
              </div>

              <div>
                <label className="block text-[#003466] dark:text-gray-200 mb-2">الرسالة</label>
                <textarea
                  {...register('message')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#00B272] outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 h-32"
                  placeholder="اكتب رسالتك هنا"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message.message as string}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#003466] to-[#00B272] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>إرسال الرسالة</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-[#003466] to-[#00B272] p-3 rounded-xl">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003466] dark:text-gray-200">{info.title}</h3>
                </div>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-400 mr-14">{detail}</p>
                ))}
              </div>
            ))}

            {/* Map */}
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-md p-4 rounded-2xl shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                className="w-full h-full rounded-xl"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
