import { motion } from "framer-motion";
import { Truck, Ship, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "./ScrollAnimation";

export default function AdvantagesSection() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: Truck,
      titleKey: "advantages.transportation.title",
      descriptionKey: "advantages.transportation.description",
      image: "/lovable-uploads/service1.webp",
    },
    {
      icon: Ship,
      titleKey: "advantages.logistics.title",
      descriptionKey: "advantages.logistics.description",
      image: "/lovable-uploads/service2.webp",
    },
    {
      icon: Users,
      titleKey: "advantages.team.title",
      descriptionKey: "advantages.team.description",
      image: "/lovable-uploads/service3.webp",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/shape-02.webp')",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* SECTION TITLE */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9B111E] mb-3">
            {t("advantages.title")}
          </h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </ScrollAnimation>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <ScrollAnimation key={index} delay={index * 120}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-[380px] w-full bg-white rounded-2xl shadow-lg 
                             hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="w-full h-48 overflow-hidden bg-gray-200">
                    <img
                      src={advantage.image}
                      alt="service"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <h3 className="text-lg font-bold text-[#003F48] mb-3">
                      {t(advantage.titleKey)}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      {t(advantage.descriptionKey)}
                    </p>

                    <button className="text-[#003F48] font-semibold text-sm flex items-center gap-2">
                      Read More <span className="text-lg">→</span>
                    </button>
                  </div>

                  {/* BOTTOM RIGHT ICON BOX */}
                  <div
                    className="absolute bottom-0 right-0 
                               w-20 h-20 bg-[#003F48] 
                               flex items-center justify-center 
                               rounded-tl-2xl shadow-lg"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
