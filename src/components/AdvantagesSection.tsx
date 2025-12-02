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
      image: "/advantage-transportation.jpg",
    },
    {
      icon: Ship,
      titleKey: "advantages.logistics.title",
      descriptionKey: "advantages.logistics.description",
      image: "/advantage-logistics.jpg",
    },
    {
      icon: Users,
      titleKey: "advantages.team.title",
      descriptionKey: "advantages.team.description",
      image: "/advantage-team.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">

      {/* LEFT-BOTTOM DECOR SHAPE — NO MOTION, 35% SIZE */}
      <img
        src="/shape-02.webp"
        alt=""
        className="
          absolute 
          left-0 
          bottom-0 
          w-[35%] 
          md:w-[32%] 
          lg:w-[28%]
          opacity-90 
          pointer-events-none 
          select-none
        "
      />

      {/* RIGHT FLOATING DECOR SHAPE */}
      <motion.img
        src="/about-shape-1.png"
        alt=""
        className="absolute right-24 top-0 w-20 md:w-28 opacity-90 pointer-events-none select-none"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4">

        {/* SECTION TITLE */}
        <ScrollAnimation className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#9B111E] mb-4">
            {t("advantages.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </ScrollAnimation>

        {/* ADVANTAGE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <ScrollAnimation key={index} delay={index * 120}>
                <div className="relative bg-white rounded-none shadow-lg overflow-hidden">

                  {/* IMAGE */}
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={advantage.image}
                      alt={t(advantage.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TEXT CONTENT */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      backgroundColor: "#FFF7F7",
                      boxShadow: "0 8px 20px rgba(155,17,30,0.25)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative border-l-4 border-[#9B111E] pl-8 pr-8 pt-8 pb-16"
                  >
                    <h3 className="text-2xl font-bold text-[#9B111E] mb-4">
                      {t(advantage.titleKey)}
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed mb-2">
                      {t(advantage.descriptionKey)}
                    </p>
                  </motion.div>

                  {/* ICON BOX */}
                  <div
                    className="absolute bottom-0 right-0 w-24 h-24 bg-[#9B111E] 
                    flex items-center justify-center"
                  >
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>

                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
