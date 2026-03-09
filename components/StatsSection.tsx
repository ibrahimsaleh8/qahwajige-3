import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    number: "500+",
    label: "مناسبة نجحنا فيها",
    description: "مناسبات راضية وذكريات خالدة",
    icon: Award,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    number: "10+",
    label: "سنوات الخبرة",
    description: "عقد من الاحترافية والتميز",
    icon: TrendingUp,
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    number: "1000+",
    label: "عميل راضي",
    description: "أفراد وعائلات اختاروا خدماتنا",
    icon: Users,
    color: "bg-green-500/10 text-green-400",
  },
  {
    number: "24/7",
    label: "دعم فني",
    description: "متاح دائماً لخدمتك وحل استفساراتك",
    icon: Zap,
    color: "bg-orange-500/10 text-orange-400",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-main-black to-main-black/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-main-color/10 border border-main-color/30 rounded-full px-6 py-2 mb-4">
            <span className="text-main-color font-semibold">إحصائياتنا</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            أرقام تليق بنا
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            تميز وخبرة تراكمت على مدى السنوات لتقديم أفضل خدمات الضيافة والتنظيم
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative bg-linear-to-br from-white/5 to-white/2 border border-white/10 hover:border-main-color/50 rounded-2xl p-8 transition-all duration-500 overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-linear-to-br from-main-color/0 to-main-color/5 group-hover:from-main-color/10 group-hover:to-main-color/5 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-main-color mb-3 group-hover:text-main-color/80 transition-colors">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <p className="text-white text-lg font-semibold mb-2">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Bottom Line */}
                  <div className="h-1 w-8 bg-main-color rounded-full mt-6 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Banner */}
        <div className="bg-linear-to-r from-main-color/20 to-amber-600/20 border border-main-color/30 rounded-2xl p-8 text-center">
          <p className="text-white/80 text-lg mb-2">
            <span className="text-main-color font-bold">كل هذا</span> بفضل ثقتكم
            واختياركم لنا!
          </p>
          <p className="text-white/60">
            نستمر في تحسين خدماتنا لتحقيق أحلامكم وجعل كل مناسبة أسطورية
          </p>
        </div>
      </div>
    </section>
  );
}
