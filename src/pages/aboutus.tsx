import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";
import AdvantagesSection from "@/components/home/AdvantagesSection"; // ← ADDED

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
        {/* ABOUT SECTION */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* LEFT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.18)] bg-slate-100">
                  <img
                    src="/Dubai.jpg"
                    alt="Haixun Global operations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* RIGHT TEXT */}
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

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  About Haixun Global
                </h1>

                <p className="text-lg leading-relaxed text-gray-700">
                  Haixun Global stands on a powerful legacy of over three
                  decades in the logistics and supply chain industry. With deep
                  expertise in sea freight, land transportation, air cargo,
                  customs clearance, warehousing, and distribution, we deliver
                  end-to-end logistics solutions for businesses of all sizes.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Our growth across China, India, Malaysia, the UAE, and other
                  key regions reflects our commitment to operational excellence,
                  responsive service, and seamless cross-border movement. Every
                  shipment is handled with precision, transparency, and a strong
                  customer-first approach.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Haixun Global Shenzhen—established in 2019—represents the
                  Group’s strong and rapidly expanding presence in China.
                  Although young as a branch, it draws strength from the Group’s
                  30+ years of logistics expertise, global network, and trusted
                  partnerships.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Tailored Transport Plans
                    </h3>
                    <p>
                      Solutions built around cargo type, route complexity, and
                      delivery timelines to optimise cost and reliability.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Certified & Compliant
                    </h3>
                    <p>
                      Safe, compliant handling for Flat Rack, Open Top,
                      Breakbulk and traditional container shipping.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to="/contact">
                    <Button
                      className="text-white rounded-full px-8"
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

        {/* ADDED ADVANTAGES SECTION */}
        <AdvantagesSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
