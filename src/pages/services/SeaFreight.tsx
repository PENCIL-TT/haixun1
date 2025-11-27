import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";
import { Container } from "lucide-react";

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

const SeaFreight = () => {
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
    { label: "CFS Services", path: "/services/cfs" },
    { label: "Sea Freight", path: "/services/sea-freight" },
    { label: "Air Freight", path: "/services/air-freight" },
    { label: "Warehousing", path: "/services/warehousing" },
    { label: "Project Cargo", path: "/services/project-cargo" },
    { label: "Customs Clearance", path: "/services/customs-clearance" },
    { label: "Consolidation", path: "/services/consolidation" },
    { label: "Liquid Cargo", path: "/services/liquid-cargo" },
    { label: "Third Party Logistics", path: "/services/third-party-logistics" },
    { label: "Liner Agency", path: "/services/liner-agency" },
  ];

  const pathname = location.pathname;

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      <main className="flex-grow pt-20">
        {/* BREADCRUMB HERO (same pattern as LCL / CFS) */}
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
                    Sea Freight
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
              {/* LEFT COLUMN – OUR SERVICES NAV */}
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

              {/* RIGHT COLUMN */}
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
                    src="/oceanfreight.png"
                    alt="Sea Freight Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* SEA FREIGHT DESCRIPTION */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                      Sea Freight Services
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>
                      At GC, we possess our own fleet of containers, which includes specialized
                      equipment designed to cater to the unique requirements of our customers.
                      With our extensive expertise in sea freight operations, we excel in
                      various trade lanes. Our professionals ensure frequent departures and
                      offer flexible service options. By partnering with multiple carriers on
                      all trade routes, we secure favorable rates and guarantee space,
                      allocation, timing, pricing, and shipment frequency.
                    </p>
                    <p>
                      When it comes to container shipping, FCL (Full Container Load) is the most
                      cost-effective and efficient option, considering the cargo&apos;s volume and
                      weight. Throughout the entire process, we take meticulous care at every
                      stage. This includes negotiating contract prices with carriers, reserving
                      space, making bookings, retrieving empty containers from the depot,
                      loading at the shipper&apos;s facility, transportation via truck or rail to
                      the port, vessel loading, and closely monitoring the vessel schedule until
                      the final delivery to the consignee.
                    </p>
                    <p>
                      In the case of import bookings, we collaborate with our overseas partners
                      in the absence of our own network. We diligently oversee each step of the
                      process, keeping our customers and consignees well-informed at every
                      stage.
                    </p>
                  </div>
                </section>

                {/* LCL SERVICES BLOCK INSIDE SEA FREIGHT PAGE */}
                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <Container className="w-7 h-7 text-[#BC0018]" />
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                        LCL Services
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
                    <p className="text-sm md:text-base leading-relaxed text-gray-700">
                      GC offers its own consolidation service on numerous trade routes,
                      leveraging an extensive network of consolidators. This enables the company
                      to deliver competitive pricing and a range of sailing options. By
                      regularly providing consolidation boxes to key trade lanes, GC can
                      effectively handle cargo that requires timely deliveries. In addition, GC
                      ensures complete transparency in pricing, including origin, destination,
                      and sea freight charges.
                    </p>
                  </div>
                </section>

                {/* CTA */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Need Reliable Sea Freight Solutions?
                  </h2>
                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Contact us today for optimized FCL and LCL sea freight services.
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

export default SeaFreight;
