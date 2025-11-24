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
        {/* ===== HERO (KEPT SAME STYLE) ===== */}
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

        {/* ===== ALL SERVICES (8 CARDS, HAIXUN STYLE) ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-center text-4xl font-bold mb-14"
              style={{ color: BRAND_RED }}
            >
              Our Core Services
            </h2>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {/* 1. LCL Services */}
              <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <Ship className="w-8 h-8" style={{ color: BRAND_RED }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    LCL Services
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    HAIXUN operate own consolidation service on many trade routes.
                    HAIXUN provide complete LCL solutions for your cargo, ensuring
                    reliable and cost-effective movement of smaller shipments across
                    global destinations.
                  </p>
                </div>
                <Link
                  to={getNavLink("/services/lcl")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-slate-100 inline-flex items-center gap-2"
                    style={{ color: BRAND_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" style={{ color: BRAND_RED }} />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 2. FCL Services */}
              <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <Ship className="w-8 h-8" style={{ color: BRAND_RED }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    FCL Services
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    HAIXUN has own fleet of containers including special equipment to
                    accommodate special cargo requirements, giving customers flexible
                    Full Container Load (FCL) options on key routes.
                  </p>
                </div>
                <Link
                  to={getNavLink("/services/fcl")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-slate-100 inline-flex items-center gap-2"
                    style={{ color: BRAND_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" style={{ color: BRAND_RED }} />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 3. Warehouse Management */}
              <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <Boxes className="w-8 h-8" style={{ color: BRAND_RED }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Warehouse Management
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    HAIXUN is well equipped to handle warehousing of various
                    commodities including cold and specialized storage. Our
                    infrastructure is designed for safe and efficient inventory
                    management.
                  </p>
                </div>
                <Link
                  to={getNavLink("/services/warehouse-management")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-slate-100 inline-flex items-center gap-2"
                    style={{ color: BRAND_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" style={{ color: BRAND_RED }} />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 4. Project Logistics */}
              <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <Truck className="w-8 h-8" style={{ color: BRAND_RED }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Project Logistics
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    With a dedicated project division and experts in the field, HAIXUN
                    manages complex project logistics end-to-end, from planning to
                    execution, across challenging geographies.
                  </p>
                </div>
                <Link
                  to={getNavLink("/services/project-logistics")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-slate-100 inline-flex items-center gap-2"
                    style={{ color: BRAND_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" style={{ color: BRAND_RED }} />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 5. Air Shipments */}
              <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <Plane className="w-8 h-8" style={{ color: BRAND_RED }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Air Shipments
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    HAIXUN can provide customized sea–air and air–sea options to meet
                    customer deadlines and manage time-critical shipments with
                    competitive transit times and routing.
                  </p>
                </div>
                <Link
                  to={getNavLink("/services/air-shipments")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-slate-100 inline-flex items-center gap-2"
                    style={{ color: BRAND_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" style={{ color: BRAND_RED }} />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 6. Customs Declaration & Ins. */}
              <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8" style={{ color: BRAND_RED }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Customs Declaration & Ins.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We ensure that all clearance formalities and documentation are
                    completed in a smooth and compliant manner so your cargo moves
                    without unnecessary delay.
                  </p>
                </div>
                <Link
                  to={getNavLink("/services/customs-declaration")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-slate-100 inline-flex items-center gap-2"
                    style={{ color: BRAND_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" style={{ color: BRAND_RED }} />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 7. OOG Shipments */}
              <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <Package className="w-8 h-8" style={{ color: BRAND_RED }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    OOG Shipments
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Services offered include cargo loading, lashing, surveyor
                    coordination, and inter-island movement to main ports for
                    Out-Of-Gauge (OOG) and heavy-lift cargo.
                  </p>
                </div>
                <Link
                  to={getNavLink("/services/oog-shipments")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-slate-100 inline-flex items-center gap-2"
                    style={{ color: BRAND_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" style={{ color: BRAND_RED }} />
                    </span>
                  </span>
                </Link>
              </div>

              {/* 8. LCL Consolidation */}
              <div className="rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6">
                    <ClipboardList className="w-8 h-8" style={{ color: BRAND_RED }} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    LCL Consolidation
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We manage LCL consolidation efficiently so that smaller shipments
                    from multiple shippers are combined and moved as a single
                    container, optimizing cost and transit times.
                  </p>
                </div>
                <Link
                  to={getNavLink("/services/lcl-consolidation")}
                  className="mt-6 inline-flex items-center"
                >
                  <span
                    className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-slate-100 inline-flex items-center gap-2"
                    style={{ color: BRAND_RED }}
                  >
                    READ MORE
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" style={{ color: BRAND_RED }} />
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
