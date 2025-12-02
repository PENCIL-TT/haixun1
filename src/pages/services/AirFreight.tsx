import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";
import { Plane } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const AirFreight = () => {
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

      <div className="h-[90px] w-full bg-white" />

      <main className="flex-grow">

        {/* HERO SECTION – CENTERED (MATCHING NEW DESIGN) */}
        <section className="relative h-[300px] md:h-[360px] w-full overflow-hidden flex items-center justify-center">
          <img
            src="/airflighthero.jpg"
            alt="Air Freight Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                Air Freight
              </h1>

              <div className="w-24 h-[3px] bg-[#BC0018] mx-auto mt-3" />

              <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
                Fast and reliable air freight solutions, balancing speed and cost with
                flexible routing across global hubs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr] items-start">
              
              {/* LEFT SIDEBAR */}
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
                            isActive ? "bg-[#BC0018] text-white" : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </aside>

              {/* RIGHT CONTENT */}
              <div className="space-y-12">

                {/* TOP IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-md overflow-hidden shadow-lg"
                >
                  <img
                    src="/loadingaircraft.jpg"
                    alt="Air Freight Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* DESCRIPTION CONTENT */}
                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BC0018]/10">
                      <Plane className="w-5 h-5 text-[#BC0018]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                        Leading Air Freight Solutions
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>
                      HAIXUN can provide customized sea-air and air-sea options to meet
                      customer deadlines while achieving significant cost savings. These
                      hybrid transport solutions balance speed and cost efficiency based on
                      each customer’s cargo profile and delivery requirements.
                    </p>
                    <p>
                      Through its efficient and globally connected network, HAIXUN handles
                      airfreight consolidation across major world routes—ensuring reliable
                      schedules, competitive pricing, and seamless cargo movement from origin
                      to final destination.
                    </p>
                  </div>
                </section>

                {/* CTA REMOVED TO MATCH NEW PAGE STYLE */}

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AirFreight;
