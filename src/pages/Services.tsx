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
  ArrowDownToLine,
} from "lucide-react";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const BRAND_RED = "#BC0018";

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

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden">
          <img
            src="/lovable-uploads/gp.jpg"
            alt="Services"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />

          <div className="container mx-auto px-4 py-20 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-black"
            >
              Our Logistics Services
            </motion.h1>

            <div className="w-20 h-1 bg-[#BC0018] mx-auto mt-4"></div>

            <p className="text-lg md:text-xl text-black mt-6 max-w-3xl mx-auto">
              Comprehensive end-to-end global logistics solutions tailored to your business needs
            </p>
          </div>
        </section>

        {/* ================= SERVICES SECTION (ALL 9) ================= */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/service-bg02.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {/* ----------- SERVICE CARD COMPONENT ----------- */}
            {[
              {
                title: "LCL Services",
                desc: "HAIXUN operates own consolidation service on major trade routes.",
                icon: Ship,
                link: "/services/lcl",
              },
              {
                title: "FCL Services",
                desc: "Fleet of containers including special equipment for flexible FCL solutions.",
                icon: Ship,
                link: "/services/fcl",
              },
              {
                title: "Warehouse Management",
                desc: "Facilities for warehousing, cold storage, and special commodities.",
                icon: Boxes,
                link: "/services/warehousing",
              },
              {
                title: "Project Logistics",
                desc: "End-to-end handling of project cargo across critical geographies.",
                icon: Truck,
                link: "/services/project-cargo",
              },
              {
                title: "Air Shipments",
                desc: "Custom sea–air and air–sea solutions for time-critical shipments.",
                icon: Plane,
                link: "/services/air-freight",
              },
              {
                title: "Customs Declaration & Insurance",
                desc: "Complete compliance and documentation support.",
                icon: FileText,
                link: "/services/customs-clearance",
              },
              {
                title: "Import Services",
                desc: "End-to-end import solutions for smooth cargo movement.",
                icon: ArrowDownToLine,
                link: "/services/import",
              },
              {
                title: "OOG Shipments",
                desc: "Oversized cargo handling including lashing and survey coordination.",
                icon: Package,
                link: "/services/oog-shipments",
              },
              {
                title: "LCL Consolidation",
                desc: "Combining multiple small shipments efficiently into one container.",
                icon: ClipboardList,
                link: "/services/consolidation",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl bg-white border border-slate-200 px-8 py-10 shadow-sm 
                  transition-all duration-300 flex flex-col justify-between
                  hover:-translate-y-2 hover:shadow-xl hover:bg-[#BC0018] hover:border-[#BC0018]"
                >
                  <div>
                    <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-white transition">
                      <Icon className="w-8 h-8 text-[#BC0018]" />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 mt-3 group-hover:text-white">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    to={getNavLink(item.link)}
                    className="mt-6 inline-flex items-center"
                  >
                    <span className="text-xs font-semibold tracking-wide px-4 py-2 rounded-md bg-white group-hover:text-[#BC0018]">
                      READ MORE
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 text-[#BC0018] group-hover:text-white" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
