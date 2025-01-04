
'use client'
import { Users, TrendingUp, Award, Globe, BarChart3, Target } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  {
    icon: Users,
    value: 3500,
    suffix: '+',
    title: ' مشاريع منفذة',
    description: 'نفخر بخدمة عملائنا',
    gradient: 'from-[#003466] to-[#00A4D6]'
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: '%',
    title: 'نسبة النمو',
    description: 'معدل نمو سنوي',
    gradient: 'from-[#00B272] to-[#89C100]'
  },
  {
    icon: Award,
    value: 3,
    suffix: '+',
    title: 'سنوات من العطاء',
    description: 'تقديراً لتميزنا',
    gradient: 'from-[#00A4D6] to-[#003466]'
  },
  {
    icon: Globe,
    value: 22500,
    suffix: '+',
    title: ' مواد برمجية و إعلانية منفذة',
    description: 'حول العالم',
    gradient: 'from-[#89C100] to-[#00B272]'
  },
  
];

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-[#f0f9ff] to-[#e6fffa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse-${i + 1}`}
            style={{
              background: `radial-gradient(circle, ${[
                '#00B272',
                '#89C100',
                '#00A4D6'
              ][i]}15, transparent 70%)`,
              top: `${[20, 60, 40][i]}%`,
              left: `${[70, 20, 50][i]}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-tr-2xl rounded-bl-full transform group-hover:scale-110 transition-transform duration-300`}
              />
              <div
                className={`relative w-16 h-16 mb-6 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  className="text-4xl font-bold text-gray-800 dark:text-gray-100"
                />
                <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">{stat.suffix}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{stat.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Stats Display */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl p-8 flex items-center gap-8">
            <BarChart3 className="w-16 h-16 text-[#00B272]" />
            <div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">معدل نمو سنوي</h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="h-full w-[85%] bg-gradient-to-r from-[#00B272] to-[#89C100] rounded-full" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl p-8 flex items-center gap-8">
            <Target className="w-16 h-16 text-[#00A4D6]" />
            <div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">رضا العملاء</h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div className="h-full w-[95%] bg-gradient-to-r from-[#003466] to-[#00A4D6] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
