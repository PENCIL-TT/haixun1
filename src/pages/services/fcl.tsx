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

const FCL = () => {
  const location = useLocation();

  const detected = getCurrentCountryFromPath(location.pathname);
  const currentCountry = detected ?? { code: "SG", name: "Singapore" };

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${basePath}`;
  };

  // MATCHED TO LCL / AIR FREIGHT / SERVICES PAGE STYLE
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

      {/* WHITE BLANK SPACE BELOW NAV (MATCH SERVICES / LCL / AIR FREIGHT PAGES) */}
      <div className="h-[90px] w-full bg-white" />

      <main className="flex-grow">
        {/* HERO SECTION – SAME STYLE AS LCL / AIR FREIGHT */}
        <section className="relative h-[260px] md:h-[320px] w-full overflow-hidden flex items-center">
          <img
            src="/servicepagehero.jpg"
            alt="FCL Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* STRONG RIGHT-SIDE GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            {/* NO BREADCRUMB – MATCH AIR FREIGHT / UPDATED LCL STYLE */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#BC0018]">
              FCL Services
            </h1>

            <p className="text-white text-lg mt-3 max-w-xl">
              Reliable Full Container Load solutions for time-critical and high-volume
              cargo across global routes.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr] items-start">
              {/* LEFT SIDEBAR – SAME STYLE AS AIR FREIGHT / UPDATED LCL */}
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

              {/* RIGHT COLUMN – CONTENT */}
              <div className="space-y-12">
                {/* FCL IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-md overflow-hidden shadow-lg"
                >
                  <img
                    src="/container.jpg"
                    alt="FCL Shipping"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* DESCRIPTION */}
                <section>
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                    Description
                  </h2>
                  <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700 mt-5">
                    <p>
                      Full Container Load (FCL) shipping is ideal for customers who need an
                      entire container exclusively for their cargo. It offers maximum
                      security, dedicated space, and faster handling at ports.
                    </p>

                    <p>
                      With strong carrier relationships and optimized routing, we provide
                      FCL coverage across all major global trade lanes with competitive
                      transit times.
                    </p>

                    <p>
                      We handle a wide range of container types such as 20ft, 40ft, 40ft
                      High Cube, reefer units, flat racks, and open tops to match your
                      cargo profile.
                    </p>

                    <p>
                      Our experienced operations team manages stuffing, documentation,
                      customs processes, and final delivery to ensure seamless end-to-end
                      execution.
                    </p>
                  </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Ready to Ship with FCL?
                  </h2>

                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Contact us today for reliable FCL capacity and competitive global
                    rates.
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

export default FCL;
