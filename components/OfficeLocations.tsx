'use client'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

const locations = [
  {
    id: 1,
    city: "جدة",
    address: "برج الشاشة - شارع الملك عبدالعزيز",
    coordinates: { x: "60%", y: "40%" }
  },
  {
    id: 2,
    city: "الرياض",
    address: "حي الملقا - طريق الملك فهد",
    coordinates: { x: "70%", y: "45%" }
  }
]

export default function MapSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full text-[#00B272] mb-6 shadow-lg">
            🗺️ مواقع مكاتبنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#003466] dark:text-[#00A4D6]">تواجدنا</span>{' '}
            <span className="text-[#00B272]">في المملكة</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative aspect-square bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
          >
            <Image
              src="/saudi-map.png"
              alt="خريطة المملكة العربية السعودية"
              fill
              className="object-contain p-8"
            />
            {locations.map((location) => (
              <motion.div
                key={location.id}
                className="absolute"
                style={{ top: location.coordinates.y, left: location.coordinates.x }}
                whileHover={{ scale: 1.2 }}
              >
                <MapPin className="w-8 h-8 text-[#00B272] drop-shadow-lg" />
              </motion.div>
            ))}
          </motion.div>

          {/* Locations List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-gradient-to-r from-[#003466] to-[#00B272] p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003466] dark:text-[#00A4D6]">
                    {location.city}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mr-14">
                  {location.address}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
