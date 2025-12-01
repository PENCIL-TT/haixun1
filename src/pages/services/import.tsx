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

const ImportServices = () => {
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
          {/* Replace with your actual import hero image */}
          <img
            src="/import hero.jpg"
            alt="Import Services Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            {/* TITLE IN RED */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#BC0018]">
              Import Services
            </h1>

            <p className="text-white text-lg mt-3 max-w-xl">
              Comprehensive import logistics, documentation, and last-mile coordination to
              move your cargo smoothly across borders.
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
                  {/* Replace with your actual import service image */}
                  <img
                    src="/import.png"
                    alt="Import Logistics Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* DESCRIPTION */}
                <section>
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                    Import Logistics Solutions
                  </h2>
                  <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700 mt-5">
                    <p>
                      Haixun provides end-to-end import solutions, from overseas pickup to
                      customs clearance and final delivery at your door. Our experienced team
                      manages every step of the process so your shipments arrive on time,
                      fully compliant with local regulations.
                    </p>
                    <p>
                      We coordinate with shipping lines, airlines, customs brokers, and
                      transport partners to streamline documentation, duty assessment, and
                      cargo release. This ensures minimal delays at ports and airports,
                      reducing overall lead time and landed cost.
                    </p>
                    <p>
                      With strong regional and global networks, Haixun supports import
                      programs for retailers, manufacturers, and project customers, whether
                      it is containerized cargo, LCL shipments, or specialized equipment.
                    </p>

                    {/* Optional project-style paragraph with your provided text */}
                    <p>
                      总用地面积：5220㎡，总建筑面积：44525㎡，容积率：7.08。该项目位于深圳南头半岛东南部，
                      南临望海路，北靠蛇口老街，西为海韵路，东为规划道路，向南面向大海，向北近2号线地铁口。
                      规划建成为商业高级商务写字楼及大型购物中心，周围交通便利，各类配套设施完善，景观资源丰富，
                      发展前景广阔。
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
                        Single-window coordination for all import activities, covering freight,
                        customs clearance, documentation, and local delivery.
                      </p>
                      <p>
                        Expertise in handling statutory requirements, duty structures, HS code
                        classification, and trade compliance to avoid penalties and delays.
                      </p>
                      <p>
                        Integrated solutions with warehousing, consolidation, and last-mile
                        distribution for a complete end-to-end import supply chain.
                      </p>
                      <p>
                        Strong relationships with carriers and port stakeholders, enabling
                        priority handling and competitive rates for regular import programs.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Need Support for Your Import Shipments?
                  </h2>
                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Talk to our team to design a reliable, compliant, and cost-effective
                    import logistics solution for your business.
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

export default ImportServices;
