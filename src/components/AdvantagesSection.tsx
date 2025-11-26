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
    },
    {
      icon: Ship,
      titleKey: "advantages.logistics.title",
      descriptionKey: "advantages.logistics.description",
    },
    {
      icon: Users,
      titleKey: "advantages.team.title",
      descriptionKey: "advantages.team.description",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        {/* SECTION TITLE */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003F48] mb-4">
            {t("advantages.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </ScrollAnimation>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <ScrollAnimation key={index} delay={index * 120}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full bg-white rounded-xl shadow-md 
                             hover:shadow-xl transition-all duration-300 p-8 
                             border-t-4 border-[#003F48]"
                >
                  {/* ICON */}
                  <div className="mb-6 w-16 h-16 bg-gradient-to-br from-[#003F48] to-[#005F6B] 
                                  rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* CONTENT */}
                  <h3 className="text-xl font-bold text-[#003F48] mb-4">
                    {t(advantage.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {t(advantage.descriptionKey)}
                  </p>
                  <button className="text-[#003F48] font-semibold text-sm flex items-center gap-2 
                                   hover:gap-3 transition-all duration-300">
                    Read More <span className="text-lg">→</span>
                  </button>
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
