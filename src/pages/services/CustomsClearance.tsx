import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";
import { UserCheck, FileText, Shield, Globe } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const CustomsClearance = () => {
  const { t } = useTranslation();

  const whyChooseItems = [
    {
      icon: FileText,
      titleKey: "services.customs.expertDoc",
      descKey: "services.customs.expertDocDesc",
    },
    {
      icon: Shield,
      titleKey: "services.customs.compliance",
      descKey: "services.customs.complianceDesc",
    },
    {
      icon: Globe,
      titleKey: "services.customs.globalExpertise",
      descKey: "services.customs.globalExpertiseDesc",
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
            src="/servicepagehero.jpg"
            alt="Customs Clearance Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                {t("services.customs.title")}
              </h1>
              <div className="w-24 h-[3px] bg-[#BC0018] mx-auto mt-3" />
              <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
                {t("services.customs.heroTagline")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr]">
              <ServiceSidebar />

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-md overflow-hidden shadow-lg relative"
                >
                  <img
                    src="/customclearance.png"
                    alt="Customs Clearance Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>

                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BC0018]/10">
                      <UserCheck className="w-5 h-5 text-[#BC0018]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                        {t("services.customs.title")}
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>{t("services.customs.content1")}</p>
                    <p>{t("services.customs.content2")}</p>
                    <p>{t("services.customs.content3")}</p>
                  </div>
                </section>

                {/* WHY CHOOSE SECTION */}
                <section>
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900 mb-2">
                    {t("services.customs.whyChooseTitle")}
                  </h2>
                  <div className="w-16 h-[2px] bg-[#BC0018] mb-6" />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {whyChooseItems.map((item, index) => (
                      <motion.div
                        key={item.titleKey}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                      >
                        <div className="bg-[#BC0018]/10 p-3 rounded-lg mb-4 w-fit">
                          <item.icon className="w-6 h-6 text-[#BC0018]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {t(item.titleKey)}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {t(item.descKey)}
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

export default CustomsClearance;
