import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";
import { Container, Anchor, Ship, PackageSearch } from "lucide-react";
import { useTranslation } from "react-i18next";

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

const OOGShipments = () => {
  const { t } = useTranslation();
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
    { label: "OOG Shipments", path: "/services/oog-shipments" },
  ];

  const pathname = location.pathname;

  const benefits = [
    {
      icon: Container,
      title: "Specialized OOG Handling",
      description:
        "Tailor-made solutions for out-of-gauge cargo that exceeds standard container dimensions.",
    },
    {
      icon: Ship,
      title: "Inter-Island Connectivity",
      description:
        "Reliable inter-island movements to and from major main ports with controlled transit times.",
    },
    {
      icon: Anchor,
      title: "End-to-End Coordination",
      description:
        "From loading and lashing to survey and stripping, we coordinate every stage of the movement.",
    },
  ];

  const servicesOffered = [
    "Cargo Loading",
    "Lashing",
    "Surveyor",
    "Inter Island Movement to Main Ports",
    "Export & Import Handling",
    "Ocean Freight",
    "Warehouse and Yard Facility",
    "Crane and Container Handling Equipment’s",
    "Import Stripping and Domestic Movements",
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      <main className="flex-grow pt-20">
        {/* BREADCRUMB HERO – SAME STYLE AS OTHER SERVICE PAGES */}
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
                    OOG Shipments
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
                    src="/oog-shipments.png"
                    alt="OOG Shipments - Inter Island Movements"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* OOG SHIPMENTS DESCRIPTION */}
                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BC0018]/10">
                      <PackageSearch className="w-5 h-5 text-[#BC0018]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                        OOG Shipments – Inter Island Movements
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>
                      {t(
                        "services.oogShipments.fullDescription",
                        "Our OOG (Out-of-Gauge) shipment service is designed for cargo that cannot fit into standard containers due to its size, weight, or shape. We provide carefully engineered transport solutions that ensure safe, compliant, and efficient movement of your over-dimensional cargo across islands and to major main ports."
                      )}
                    </p>
                    <p>
                      We offer end-to-end coordination covering loading, lashing, survey,
                      ocean freight, and domestic movements. With a combination of specialized
                      handling equipment, experienced operations teams, and strong carrier
                      relationships, we ensure that every piece of cargo is moved with precision
                      and care.
                    </p>
                    <p>
                      Whether it is project machinery, industrial equipment, or over-dimensional
                      structures, our OOG and inter-island services are built to deliver
                      reliability, safety, and schedule integrity for both import and export
                      requirements.
                    </p>
                  </div>
                </section>

                {/* BENEFITS SECTION */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                      Benefits of OOG & Inter Island Movements
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 * index }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="bg-[#BC0018]/10 p-3 rounded-lg mb-4 w-fit">
                          <benefit.icon className="w-6 h-6 text-[#BC0018]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* SERVICES OFFERED SECTION */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                      Services Offered
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {servicesOffered.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.08 * index }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 hover:border-[#BC0018] transition-colors"
                      >
                        <div className="mt-0.5">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#BC0018]/10 text-xs font-semibold text-[#BC0018]">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-gray-800">
                          {service}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* CTA – CONSISTENT WITH OTHER SERVICE PAGES */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Need Support for OOG & Inter Island Movements?
                  </h2>
                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Talk to our operations team for a tailored OOG solution with complete
                    loading, lashing, survey, and port-to-door coordination.
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

export default OOGShipments;
