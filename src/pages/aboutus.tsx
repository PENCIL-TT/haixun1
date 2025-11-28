import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

// IMPORT ADVANTAGES SECTION
import AdvantagesSection from "@/components/AdvantagesSection";

const RUBY_RED = "#BC0018";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const detected = getCurrentCountryFromPath(location.pathname);
  const currentCountry = detected ?? { code: "SG", name: "Singapore" };

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${basePath}`;
  };

  return (
    <div className="text-gray-900 min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navigation />

      <main className="flex-grow pt-20">
        {/* ======================= ABOUT SECTION ======================= */}
        <section className="py-24 relative overflow-hidden">
          {/* FULL BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/map-pattern.png')" }}
          />

          {/* WHITE SOFT OVERLAY */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

          {/* MAIN CONTENT */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* LEFT IMAGE – BIGGER & CENTERED */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full flex justify-center"
              >
                <div className="relative w-[380px] sm:w-[480px] md:w-[560px] mx-auto">
                  {/* Glow behind card */}
                  <div
                    className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-rose-100/80 via-white to-transparent blur-3xl -z-10"
                    aria-hidden="true"
                  />

                  {/* Top icon badge - centered */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center">
                        <span className="text-2xl" style={{ color: RUBY_RED }}>
                          ⛴
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom years badge - centered */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className="px-7 py-3 rounded-2xl text-white shadow-2xl text-center"
                      style={{ backgroundColor: RUBY_RED }}
                    >
                      <span className="text-2xl font-bold leading-none block">9+</span>
                      <span className="text-sm opacity-90 block mt-1">
                        Years of Growth
                      </span>
                    </div>
                  </div>

                  {/* Main image */}
                  <div className="rounded-[36px] overflow-hidden shadow-[0_30px_70px_rgba(15,23,42,0.22)] bg-slate-100">
                    <img
                      src="/Dubai.jpg"
                      alt="Haixun Global operations"
                      className="w-full h-[360px] sm:h-[420px] md:h-[480px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* RIGHT TEXT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p
                  className="text-sm font-semibold tracking-[0.22em] uppercase"
                  style={{ color: RUBY_RED }}
                >
                  Who We Are
                </p>

                <h1
                  className="text-4xl md:text-5xl font-extrabold tracking-tight"
                  style={{ color: RUBY_RED }}
                >
                  About Haixun Global
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  30+ Years of Logistics Excellence
                </h2>

                <p className="text-lg leading-relaxed text-gray-700">
                  Haixun Global Logistics (Shenzhen) Co., Ltd., headquartered in Shenzhen, China,
                  provides global freight forwarding services for LCL, FCL, general cargo, and bulk
                  cargo via sea, land, and air. Our solutions include booking, customs clearance,
                  inspection, warehousing, distribution, door-to-door delivery, and logistics
                  planning.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Guided by integrity, honesty, service, and speed, we follow a corporate spirit of
                  pragmatism, hard work, and responsibility. Our business model is built on
                  innovation, win-win cooperation, and a strong commitment to customer satisfaction.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  With a modern management approach, advanced technology, and attentive customer
                  care, we consistently adhere to the principle of putting customers first. We aim
                  to impress clients with reliable, efficient, and seamless logistics solutions.
                </p>

                <div className="pt-4">
                  <Link to={getNavLink("/contact")}>
                    <Button
                      className="text-white rounded-full px-10 py-5 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                      style={{ backgroundColor: RUBY_RED }}
                    >
                      {t("nav.contact")}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================= ADVANTAGES SECTION ======================= */}
        <AdvantagesSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
