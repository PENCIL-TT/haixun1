import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

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

  // MATCHED TO OTHER SERVICE PAGES
  const servicesNav = [
    { label: "See All Services", path: "/services" },
    { label: "LCL Services", path: "/services/lcl" },
    { label: "FCL Services", path: "/services/fcl" },
    { label: "Warehousing", path: "/services/warehousing" },
    { label: "Project Cargo", path: "/services/project-cargo" },
    { label: "Air Freight", path: "/services/air-freight" },
    { label: "Customs Clearance", path: "/services/customs-clearance" },
    { label: "Import Services", path: "/services/import" },
    { label: "Consolidation", path: "/services/consolidation" },
    { label: "OOG Shipments", path: "/services/oog-shipments" },
  ];

  const pathname = location.pathname;

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      {/* WHITE SPACE LIKE OTHER PAGES */}
      <div className="h-[90px] w-full bg-white" />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-[260px] md:h-[320px] w-full overflow-hidden flex items-center">
          <img
            src="/warehouse hero.jpg"
            alt="Warehousing Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            {/* TITLE IN RED */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#BC0018]">
              Warehousing
            </h1>

            <p className="text-white text-lg mt-3 max-w-xl">
              End-to-end warehousing and distribution solutions designed to support your
              regional and global supply chain.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr] items-start">
              {/* LEFT SIDEBAR — SERVICES NAV */}
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

              {/* RIGHT COLUMN CONTENT */}
              <div className="space-y-12">
                {/* HERO IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-md overflow-hidden shadow-lg"
                >
                  <img
                    src="/warehousing.png"
                    alt="Warehousing Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* DESCRIPTION */}
                <section>
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                    Warehousing Solutions
                  </h2>
                  <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700 mt-5">
                    <p>
                      Haixun is fully equipped and can handle the warehousing of various
                      commodities, including cold storage.
                    </p>
                    <p>
                      Warehouse management is a crucial component of the supply chain. Its
                      primary purpose is to control the movement and storage of materials
                      within a region and process related transactions such as transportation,
                      receiving, storage, and picking.
                    </p>
                    <p>
                      Warehouse Management (WM) handles inventory receipts, supply movement,
                      container storage, and demand management as part of the overall supply
                      chain workflow.
                    </p>
                  </div>
                </section>

                {/* VALUE SECTION */}
                <section>
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                    Value We Deliver
                  </h2>
                  <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8 mt-5">
                    <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                      <p>
                        Efficient warehouse management provides a cutting-edge solution for
                        retail chain distribution.
                      </p>
                      <p>
                        We identify customer needs and assist in fulfilling them in the best
                        possible way.
                      </p>
                      <p>
                        Haixun has expertise in packing and unpacking, consolidating goods,
                        and arranging delivery to all respective parties.
                      </p>
                      <p>
                        With strong domestic and global networks, Haixun identifies the right
                        warehouse type based on cost, storage needs, product sensitivity, and
                        proximity.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Need Warehouse Management Support?
                  </h2>
                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Contact us today to discuss your warehousing and distribution requirements.
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

export default Warehousing;
