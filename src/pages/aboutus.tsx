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
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      <main className="flex-grow pt-20">
        {/* ======================= ABOUT SECTION ======================= */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* LEFT IMAGE – STYLED LIKE REFERENCE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full flex justify-center lg:justify-start"
              >
                <div className="relative w-full max-w-xl">
                  {/* Glow shadow behind card */}
                  <div
                    className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-rose-100/80 via-white to-transparent blur-2xl -z-10"
                    aria-hidden="true"
                  />

                  {/* Top icon badge */}
                  <div className="absolute -top-8 left-10 z-20">
                    <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center">
                        <span
                          className="text-2xl"
                          style={{ color: RUBY_RED }}
                        >
                          ⛴
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom years badge */}
                  <div className="absolute -bottom-6 left-10 z-20">
                    <div
                      className="px-6 py-3 rounded-2xl text-white shadow-xl flex flex-col justify-center"
                      style={{ backgroundColor: RUBY_RED }}
                    >
                      <span className="text-2xl font-bold leading-none">
                        9+
                      </span>
                      <span className="text-xs mt-1 opacity-90">
                        Years of Growth
                      </span>
                    </div>
                  </div>

                  {/* Main image card */}
                  <div className="rounded-[36px] overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.18)] bg-slate-100">
                    <img
                      src="/Dubai.jpg"
                      alt="Haixun Global operations"
                      className="w-full h-[360px] md:h-[420px] object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* RIGHT TEXT – STYLED LIKE REFERENCE */}
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
                  Haixun Global Logistics (Shenzhen) Co., Ltd., headquartered in Shenzhen,
                  China, provides global freight forwarding services for LCL, FCL, general
                  cargo, and bulk cargo via sea, land, and air. Our integrated solutions
                  cover inquiry, booking, customs clearance and inspection, warehousing
                  and distribution, door-to-door delivery, as well as logistics solution
                  planning and consulting.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Guided by the business philosophy of integrity, honesty, service, and
                  speed, we uphold the corporate spirit of pragmatism, hard work, and
                  responsibility. We create a positive business environment built on an
                  operating mindset of integrity, win-win cooperation, and innovation.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  With a modern management model, advanced technology, and attentive
                  customer service as our foundation, we consistently adhere to the
                  principle of putting customers first. Our team is committed to serving
                  clients wholeheartedly and striving to impress them with reliable,
                  efficient, and professional logistics solutions.
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
