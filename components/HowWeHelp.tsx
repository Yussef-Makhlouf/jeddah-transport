import { Lightbulb, Target, Rocket } from 'lucide-react'

export default function HowWeHelp() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#003466]/95"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Main Message */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[#00B272]">
              ✨ منهجنا في العمل
            </div>
            
            <h2 className="text-5xl font-bold leading-tight">
              <span className="text-white">نصنع</span>{' '}
              <span className="text-[#003466]">الفرق</span>{' '}
              <span className="text-[#00B272]">معاً</span>
            </h2>

            <p className="text-xl text-white/80 leading-relaxed">
              نتبنى معايير صارمة في جودة الأعمال وابتكار الحلول الرقمية، مما ينتج عنه تجارب استثنائية تلبي تطلعات عملائنا
            </p>
          </div>

          {/* Right Side - Process Steps */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Process Steps */}
              <div className="space-y-8">
                {[
                  { icon: Lightbulb, text: "نبتكر حلولاً رقمية متقدمة", color: "bg-[#00B272]" },
                  { icon: Target, text: "نحقق أهداف عملائنا باحترافية", color: "bg-[#003466]" },
                  { icon: Rocket, text: "نطور تجارب مستخدم استثنائية", color: "bg-[#00A4D6]" }
                ].map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-6 group"
                  >
                    <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-xl text-white/90 font-medium">{step.text}</p>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00B272] via-[#003466] to-[#00A4D6]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}