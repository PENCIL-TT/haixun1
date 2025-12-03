import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";
import { Cuboid, Package, TrendingDown, Globe } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const Consolidation = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingDown,
      titleKey: "services.consolidation.costSavings",
      descKey: "services.consolidation.costSavingsDesc",
    },
    {
      icon: Package,
      titleKey: "services.consolidation.flexibleShipping",
      descKey: "services.consolidation.flexibleShippingDesc",
    },
    {
      icon: Globe,
      titleKey: "services.consolidation.globalReach",
      descKey: "services.consolidation.globalReachDesc",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      <div className="h-[90px] w-full bg-white" />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[300px] md:h-[360px] w-full overflow-hidden flex items-center justify-center">
          <img
            src="/counter-bg.webp"
            alt="Consolidation Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                {t("services.consolidation.title")}
              </h1>
              <div className="w-24 h-[3px] bg-[#BC0018] mx-auto mt-3" />
              <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
                {t("services.consolidation.heroTagline")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr] items-start">
              <ServiceSidebar />

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-md overflow-hidden shadow-lg"
                >
                  <img
                    src="/consolidationmini.jpg"
                    alt="Consolidation"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BC0018]/10">
                      <Cuboid className="w-5 h-5 text-[#BC0018]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                        {t("services.consolidation.sectionTitle")}
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {t("services.consolidation.lclConsolidation")}
                      </h3>
                      <p className="mb-1">{t("services.consolidation.exportDirect")}</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>ICD PPG</li>
                        <li>ICD Ludhiana</li>
                        <li>ICD Garhiharsru</li>
                        <li>ICD Ahmedabad</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {t("services.consolidation.exportDirectList")}
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Singapore</li>
                        <li>Colombo</li>
                        <li>Karachi</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {t("services.consolidation.exportViaHub")}
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>India, Middle East</li>
                        <li>Bangladesh, Maldives</li>
                        <li>Karachi, USA</li>
                        <li>Europe Ports, Australia</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {t("services.consolidation.importViaHub")}
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Asia, Middle East</li>
                        <li>USA, Europe</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {t("services.consolidation.facilities")}
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>LCL Consolidation / Deconsolidation Warehouse</li>
                        <li>Packing and Value Added Services</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* BENEFITS SECTION */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                      {t("services.consolidation.benefitsTitle")}
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.titleKey}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 * index }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="bg-[#BC0018]/10 p-3 rounded-lg mb-4 w-fit">
                          <benefit.icon className="w-6 h-6 text-[#BC0018]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {t(benefit.titleKey)}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {t(benefit.descKey)}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consolidation;
