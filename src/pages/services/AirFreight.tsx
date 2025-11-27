import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";
import { Plane, Clock, Globe, Shield, Package } from "lucide-react";

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

  const features = [
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Time-critical shipments with guaranteed delivery schedules",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide coverage through our partner airlines",
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Professional cargo handling with full insurance coverage",
    },
    {
      icon: Package,
      title: "Flexible Solutions",
      description: "Customized air freight solutions for all cargo types",
    },
  ];

  const services = [
    "Express Air Freight",
    "Consolidated Air Cargo",
    "Charter Flight Services",
    "Door-to-Door Delivery",
    "Customs Clearance",
    "Temperature-Controlled Transport",
    "Hazardous Goods Handling",
    "Real-time Tracking",
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      <main className="flex-grow pt-20">
        {/* BREADCRUMB HERO (aligned with LCL / CFS / Sea Freight) */}
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
                    Air Freight
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
                    src="/airfreight.png"
                    alt="Air Freight Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* AIR FREIGHT DESCRIPTION */}
                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BC0018]/10">
                      <Plane className="w-5 h-5 text-[#BC0018]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                        Leading Air Freight Solutions
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>
                      As a leading air freight company, OECL excels in offering enhanced
                      flexibility and global choice by collaborating with a diverse range of
                      specialized carriers. These partners provide tailored schedules and
                      solutions, ensuring our clients have more options to meet their
                      specific needs.
                    </p>
                    <p>
                      Our Directors and Managers actively engage with our team members,
                      fostering a hands-on approach to deliver a seamlessly integrated and
                      highly professional service. Through our extensive worldwide
                      network, we have established a swift and efficient airfreight
                      solution that enables the expedited and cost-effective movement of
                      cargo to and from international markets.
                    </p>
                    <p>
                      OECL specializes in providing customized sea-air and air-sea options,
                      tailored to meet our customers&apos; deadlines while achieving significant
                      cost savings. Leveraging our efficient global network, we efficiently
                      handle air freight consolidation on numerous major routes.
                    </p>
                  </div>
                </section>

                {/* KEY FEATURES */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                      Key Benefits
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {features.map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                          <item.icon className="w-5 h-5 text-[#BC0018]" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs md:text-sm text-gray-700">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SERVICES LIST */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                      Service Portfolio
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
                    <ul className="grid gap-2 text-sm md:text-base text-gray-700 sm:grid-cols-2">
                      {services.map((srv) => (
                        <li key={srv}>• {srv}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* CTA */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Ready to Ship Your Cargo?
                  </h2>
                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Get a quick consultation – our experts are here to help you out.
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

export default AirFreight;
