import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Box } from "lucide-react";
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

const Warehousing = () => {
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
        {/* BREADCRUMB HERO (same structure as LCL/CFS) */}
        <section
          className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden border-b border-slate-200"
          style={{
            backgroundImage: "url('/counter-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0" />

          <div className="relative text-center scale-[1.1] md:scale-[1.25] z-10">
            <Breadcrumb>
              <BreadcrumbList className="flex items-center justify-center gap-2 md:gap-3">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-[#BC0018] text-lg md:text-xl font-semibold hover:text-black"
                  >
                    <Link to={getNavLink("/")}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <span className="text-xl md:text-2xl text-slate-600">›</span>
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-[#BC0018] text-lg md:text-xl font-semibold hover:text-black"
                  >
                    <Link to={getNavLink("/services")}>Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <span className="text-xl md:text-2xl text-slate-600">›</span>
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbPage className="text-black font-extrabold text-3xl md:text-4xl">
                    Warehousing
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr] items-start">
              {/* LEFT COLUMN: SERVICES NAV */}
              <aside className="space-y-10">
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

              {/* RIGHT COLUMN: CONTENT */}
              <div className="space-y-12">
                {/* TOP TAG + IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-100">
                    <Box className="w-6 h-6 text-blue-500" />
                    <span className="text-blue-500 font-semibold">
                      Warehousing Services
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/warehousing.png"
                      alt="Warehousing Services"
                      className="w-full h-[340px] md:h-[380px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* DESCRIPTION */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                      Warehousing Solutions
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>
                      GC possesses the necessary resources and expertise to effectively
                      manage the warehousing of diverse commodities, including cold
                      storage facilities.
                    </p>
                    <p>
                      Warehouse management plays a crucial role in the overall supply
                      chain, focusing on controlling the movement and storage of materials
                      within a warehouse. It encompasses tasks such as shipping, receiving,
                      put away, and picking, while also providing visibility into the
                      processes preceding and following the supply chain link.
                    </p>
                    <p>
                      By optimizing warehouse operations, your facility can become a
                      catalyst for enhanced profitability and customer satisfaction,
                      rather than an obstacle. The objective of warehouse management is to
                      efficiently handle stock receipts and manage supplies, encompassing
                      both supply chain management and demand management, including
                      container storage, loading, and unloading.
                    </p>
                  </div>
                </section>

                {/* ADDITIONAL CONTENT */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                      Value We Deliver
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                    <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                      <p>
                        An effective warehouse management system provides a competitive
                        advantage in retail chain distribution. GC strives to understand
                        customer needs and assists in handling their requirements in the
                        most optimal manner.
                      </p>
                      <p>
                        We specialize in handling the vanning and devanning of consolidated
                        cargo, ensuring timely distribution and delivery to the respective
                        parties, thereby ensuring complete customer satisfaction.
                      </p>
                      <p>
                        With our extensive network in domestic and global markets, GC can
                        identify the ideal warehouse solution based on specific customer
                        requirements, considering factors such as cost-effectiveness,
                        storage specifications, commodity requirements, and proximity.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Get a quick consultation
                  </h2>
                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Our experts are here to help you with the right warehousing solution.
                  </p>

                  <Link
                    to={getNavLink("/contact")}
                    className="inline-block bg-[#BC0018] hover:bg-[#a30014] text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all"
                  >
                    Reach Us
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

export default Warehousing;
