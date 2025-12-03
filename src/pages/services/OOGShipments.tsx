import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";
import { PackageSearch } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const OOGShipments: React.FC = () => {
  const { t } = useTranslation();

  const servicesOfferedKeys = [
    "services.oog.service1",
    "services.oog.service2",
    "services.oog.service3",
    "services.oog.service4",
    "services.oog.service5",
    "services.oog.service6",
    "services.oog.service7",
    "services.oog.service8",
    "services.oog.service9",
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
            src="/oggshipmentshero.jpg"
            alt="OOG Shipments Hero"
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
                {t("services.oog.title")}
              </h1>
              <div className="w-24 h-[3px] bg-[#BC0018] mx-auto mt-3" />
              <p className="text-base md:text-lg text-gray-200 mt-4 leading-relaxed">
                {t("services.oog.heroTagline")}
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
                    src="/oogbanner.jpg"
                    alt="OOG Shipments - Inter Island Movements"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BC0018]/10">
                      <PackageSearch className="w-5 h-5 text-[#BC0018]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                        {t("services.oog.sectionTitle")}
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>{t("services.oog.content1")}</p>
                  </div>
                </section>

                {/* SERVICES OFFERED */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                      {t("services.servicesOffered")}
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {servicesOfferedKeys.map((key, index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.08 * index }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 hover:border-[#BC0018] transition-colors"
                      >
                        <div className="mt-0.5">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#BC0018]/10 text-xs font-semibold text-[#BC0018]">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-gray-800">
                          {t(key)}
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

export default OOGShipments;
