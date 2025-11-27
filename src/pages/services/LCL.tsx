import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
        {/* ========== WHITE BREADCRUMB HERO WITH SHAPE ========== */}
        <section className="relative bg-white h-40 md:h-48 flex items-center justify-center overflow-hidden border-b border-slate-200">
          {/* LEFT DECORATIVE SHAPE IMAGE */}
          <img
            src="/breadcrumn-shape.png"
            alt="Breadcrumb Shape"
            className="absolute left-0 bottom-0 h-full object-contain opacity-100 pointer-events-none"
          />

          {/* CENTERED BREADCRUMB */}
          <div className="relative text-center">
            <Breadcrumb className="scale-110 md:scale-125">
              <BreadcrumbList className="flex items-center justify-center gap-3">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-[#BC0018] text-lg md:text-xl font-medium hover:text-black"
                  >
                    <Link to={getNavLink("/")}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <span className="text-2xl md:text-3xl text-slate-600">›</span>
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-[#BC0018] text-lg md:text-xl font-medium hover:text-black"
                  >
                    <Link to={getNavLink("/services")}>Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <span className="text-2xl md:text-3xl text-slate-600">›</span>
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbPage className="text-black font-bold text-3xl md:text-5xl">
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
              {/* LEFT COLUMN */}
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

                {/* DESCRIPTION BLOCK – FULL WIDTH, NO IMAGE */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                      Description
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>
                      Amass Freight, Dubai provides Less-Than-Container Load (LCL) services
                      designed for customers who do not have enough cargo to fill a full
                      container but require reliable shipping.
                    </p>
                    <p>
                      Our extensive global consolidation network helps customers move
                      smaller shipments more economically by combining multiple consignments
                      into one container, reducing freight cost while maintaining service
                      reliability.
                    </p>
                    <p>
                      Our operations team manages receiving, stuffing, documentation, and
                      delivery at destination, ensuring safety, transparency, and efficiency
                      at every step of the supply chain.
                    </p>
                    <p>
                      With predictable transit schedules, frequent departures, and
                      transparent pricing, our LCL solutions provide unmatched flexibility
                      for businesses of all sizes.
                    </p>
                  </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Ready to Ship with LCL?
                  </h2>
                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Contact us today for competitive rates and dependable LCL shipping.
                  </p>

                  <Link
                    to={getNavLink("/contact")}
                    className="inline-block bg-[#BC0018] hover:bg-[#a30014] text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all"
                  >
                    Contact Us
                  </Link>
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
