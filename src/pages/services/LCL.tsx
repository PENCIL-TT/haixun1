import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, File } from "lucide-react";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const LCL = () => {
  const location = useLocation();

  const detected = getCurrentCountryFromPath(location.pathname);
  const currentCountry = detected ?? { code: "SG", name: "Singapore" };

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${basePath}`;
  };

  const servicesNav = [
    { label: "See All Services", path: "/services" },
    { label: "LCL Services", path: "/services/lcl" },
    { label: "FCL Services", path: "/services/fcl" },
    { label: "Warehouse Management", path: "/services/warehouse-management" },
    { label: "Project Logistics", path: "/services/project-logistics" },
    { label: "Air Shipments", path: "/services/air-shipments" },
    { label: "Customs Declaration & Insurance", path: "/services/customs-declaration" },
    { label: "OOG Shipments", path: "/services/oog-shipments" },
    { label: "LCL Consolidation", path: "/services/lcl-consolidation" },
  ];

  const pathname = location.pathname;

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      <main className="flex-grow pt-20">

        {/* ========== BIG BREADCRUMB HERO ========== */}
        <section className="relative bg-[#020817] h-60 md:h-72 flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/service-bg.jpg"
              alt="Services Header"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* BIG BREADCRUMB */}
          <div className="relative text-center">
            <Breadcrumb className="scale-125 md:scale-[1.40]">
              <BreadcrumbList className="flex items-center justify-center gap-3">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-gray-200 text-lg md:text-xl hover:text-white"
                  >
                    <Link to={getNavLink("/")}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <span className="text-2xl md:text-3xl text-gray-300">›</span>
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-gray-200 text-lg md:text-xl hover:text-white"
                  >
                    <Link to={getNavLink("/services")}>Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <span className="text-2xl md:text-3xl text-gray-300">›</span>
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white font-bold text-3xl md:text-5xl">
                    LCL Services
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* ========== MAIN CONTENT ========== */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr] items-start">

              {/* LEFT COLUMN: SERVICES LIST + BROCHURES */}
              <aside className="space-y-10">

                {/* OUR SERVICES */}
                <div>
                  <h2 className="text-sm font-semibold tracking-[0.15em] text-gray-900 mb-2 uppercase">
                    OUR SERVICES
                  </h2>
                  <div className="w-12 h-[2px] bg-[#BC0018] mb-5" />

                  <div className="border border-slate-200 rounded-md overflow-hidden bg-slate-50">
                    {servicesNav.map((item) => {
                      const to = getNavLink(item.path);
                      const isActive =
                        pathname === to ||
                        (item.path !== "/services" && pathname.startsWith(to));

                      return (
                        <Link
                          key={item.path}
                          to={to}
                          className={`block px-6 py-3 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-[#BC0018] text-white"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* OUR BROCHURES */}
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.15em] text-gray-900 mb-2 uppercase">
                    OUR BROCHURES
                  </h3>
                  <div className="w-12 h-[2px] bg-[#BC0018] mb-5" />

                  <div className="border border-slate-200 rounded-md overflow-hidden bg-slate-50 divide-y">
                    <a
                      href="/brochures/service-brochure.pdf"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      <FileText className="w-4 h-4 text-slate-500" />
                      <span>Service Brochure.pdf</span>
                    </a>
                    <a
                      href="/brochures/about-company.doc"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      <File className="w-4 h-4 text-slate-500" />
                      <span>About Company.doc</span>
                    </a>
                  </div>
                </div>
              </aside>

              {/* RIGHT COLUMN */}
              <div className="space-y-12">

                {/* TOP LARGE IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-md overflow-hidden shadow-lg"
                >
                  <img
                    src="/lcl1.JPG"
                    alt="LCL Road & Ocean Freight"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* DESCRIPTION BLOCK */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                      Description
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="grid gap-10 md:grid-cols-2 items-start">
                    {/* TEXT CONTENT */}
                    <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                      <p>
                        Amass Freight, Dubai provides Less-Than-Container Load (LCL)
                        services designed for customers who do not have enough cargo to
                        fill a full container but require reliable shipping.
                      </p>
                      <p>
                        Our extensive global consolidation network helps customers move
                        small shipments more economically, combining multiple consignments
                        into a single container to reduce freight cost.
                      </p>
                      <p>
                        Our operations team manages receiving, stuffing, documentation, and
                        end delivery, ensuring safety and reliability at every step.
                      </p>
                      <p>
                        Frequent departures, predictable transit schedules, and transparent
                        pricing give your business the flexibility it needs.
                      </p>
                    </div>

                    {/* SHIP IMAGE */}
                    <div className="flex justify-center md:justify-end">
                      <img
                        src="/lcl-ship.png"
                        alt="LCL Ocean Freight"
                        className="max-w-xs md:max-w-sm object-contain"
                        loading="lazy"
                      />
                    </div>
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

export default LCL;
