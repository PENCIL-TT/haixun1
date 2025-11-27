import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Ship,
  Truck,
  Boxes,
  Plane,
  FileText,
  Package,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

const BRAND_RED = "#BC0018";

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const Services: React.FC = () => {
  const location = useLocation();
  const detected = getCurrentCountryFromPath(location.pathname);
  const currentCountry = detected ?? { code: "SG", name: "Singapore" };

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${basePath}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow pt-20">
        {/* ===== HERO SECTION ===== */}
        <section className="bg-gradient-to-r from-gc-dark-blue via-gc-blue to-gc-dark-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/gp.jpg"
              alt="Services"
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gc-dark-blue/90 to-gc-blue/90" />
          </div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black mt-7">
                Our Logistics Services
              </h1>
              <div className="w-20 h-1 bg-gc-gold mx-auto mb-6"></div>
              <p className="text-xl text-black leading-relaxed">
                Comprehensive end-to-end global logistics solutions tailored to your business needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== ALL SERVICES SECTION ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {/* 1. LCL Services */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                    <Ship className="w-8 h-8 text-[#BC0018] group-hover:text-[#BC0018]" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    LCL Services
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    HAIXUN operate own consolidation service on many trade routes, providing complete LCL solutions.
                  </p>
                </div>

                <Link to={getNavLink("/services/lcl")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#BC0018]"
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#BC0018]" />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 2. FCL Services */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                    <Ship className="w-8 h-8 text-[#BC0018] group-hover:text-[#BC0018]" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    FCL Services
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Own fleet of containers including special equipment for flexible full-container load solutions.
                  </p>
                </div>

                <Link to={getNavLink("/services/fcl")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#BC0018]"
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#BC0018]" />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 3. Warehouse Management (→ warehousing route) */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                    <Boxes className="w-8 h-8 text-[#BC0018] group-hover:text-[#BC0018]" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    Warehouse Management
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Comprehensive facilities for warehousing cold storage and specialized commodities.
                  </p>
                </div>

                <Link to={getNavLink("/services/warehousing")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#BC0018]"
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#BC0018]" />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 4. Project Logistics (→ project-cargo route) */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                    <Truck className="w-8 h-8 text-[#BC0018] group-hover:text-[#BC0018]" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    Project Logistics
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Dedicated division to manage end-to-end project logistics across critical geographies.
                  </p>
                </div>

                <Link to={getNavLink("/services/project-cargo")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#BC0018]"
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#BC0018]" />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 5. Air Shipments (→ air-freight route) */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                    <Plane className="w-8 h-8 text-[#BC0018] group-hover:text-[#BC0018]" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    Air Shipments
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Customized sea–air and air–sea shipment options for time-critical deliveries.
                  </p>
                </div>

                <Link to={getNavLink("/services/air-freight")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#BC0018]"
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#BC0018]" />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 6. Customs Declaration (→ customs-clearance route) */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                    <FileText className="w-8 h-8 text-[#BC0018] group-hover:text-[#BC0018]" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    Customs Declaration & Insurance
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Complete compliance and documentation support for smooth shipment clearance.
                  </p>
                </div>

                <Link to={getNavLink("/services/customs-clearance")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#BC0018]"
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#BC0018]" />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 7. OOG Shipments (path unchanged – if you create a new slug, update here) */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm 
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                    <Package className="w-8 h-8 text-[#BC0018] group-hover:text-[#BC0018]" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    OOG Shipments
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Handling oversized and heavy-lift cargo including lashing and survey coordination.
                  </p>
                </div>

                <Link to={getNavLink("/services/oog-shipments")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#BC0018]"
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#BC0018]" />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 8. LCL Consolidation (→ consolidation route) */}
              <div
                className="group rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm
                transition-all duration-300 flex flex-col justify-between
                hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                    <ClipboardList className="w-8 h-8 text-[#BC0018] group-hover:text-[#BC0018]" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-white">
                    LCL Consolidation
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-white">
                    Combining smaller shipments efficiently into single containers for optimized movement.
                  </p>
                </div>

                <Link to={getNavLink("/services/consolidation")} className="mt-6 inline-flex items-center">
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white
                    inline-flex items-center gap-2 group-hover:bg-white group-hover:text-[#BC0018]"
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#BC0018]" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
