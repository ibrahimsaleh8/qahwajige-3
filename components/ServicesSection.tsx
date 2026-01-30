import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};

export default function ServicesSection({
  description,
  items,
  label,
  title,
  phone,
  whatsApp,
}: ServicesSectionData & {
  whatsApp?: string;
  phone?: string;
}) {
  return (
    <section className="py-20 px-4" id="services">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-main-color/10 border border-main-color/30 rounded-full px-6 py-2 mb-4">
            <span className="text-main-color font-semibold">{label} </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}{" "}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items &&
            items.map((card) => {
              const IconComponent = iconMap[card.icon as keyof typeof iconMap];

              return (
                <div
                  key={card.title}
                  className="group bg-[#1F1B0E] border border-main-color/30 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 w-full">
                  <div className="size-16 bg-main-color/10 rounded-xl flex items-center justify-center text-main-color mb-8 group-hover:bg-main-color/80 group-hover:text-white transition-colors">
                    {IconComponent && <IconComponent className="w-8 h-8" />}
                  </div>

                  <p className="text-xl text-white font-bold mb-4">
                    {card.title}
                  </p>

                  <p className="text-white/60 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="h-1 w-12 bg-main-color rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-linear-to-r from-main-color to-amber-600 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-main-black mb-4">
            جاهزون لجعل مناسبتكم
            <br />
            القادمة استثنائية؟
          </h3>
          <p className="text-main-black/80 text-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على استشارة مجانية حول باقات الضيافة المناسبة
            لمناسباتكم الخاصة أو الرسمية.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              target="_blank"
              href={`https://wa.me/${whatsApp?.includes("+") ? whatsApp.split("+").join("") : whatsApp}?text=`}
              className="bg-main-black hover:bg-main-black/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              احجز الآن
            </a>
            <a
              target="_blank"
              href={`tel:${phone}`}
              className="bg-transparent border-2 border-main-black hover:bg-main-black/10 text-main-black px-8 py-4 rounded-full font-bold text-lg transition-all">
              اتصل بنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
