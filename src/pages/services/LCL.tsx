import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Ship, CheckCircle, DollarSign, Globe } from "lucide-react";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

// shadcn breadcrumb
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

  const features = [
    {
      icon: CheckCircle,
      title: "Extremely Reliable & Prompt",
      description:
        "All your LCL cargo is reliably transported through our seamlessly connected network across the globe, and you are assured that your cargo will arrive on time.",
    },
    {
      icon: DollarSign,
      title: "Flexible and Economical",
      description:
        "LCL services enable customers to ship small orders at a lower cost and in lower volumes compared to air freight.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Our LCL network offers unmatched connectivity and cadence across major shipping routes.",
    },
  ];

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
        {/* ===== BREADCRUMB HERO (like About Us screenshot) ===== */}
        <section className="relative bg-[#020817]">
          <div className="absolute inset-0">
            {/* replace with your header image */}
            <img
              src="/service-bg.jpg"
              alt="LCL Header"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={getNavLink("/")}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={getNavLink("/services")}>Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>LCL Services</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* ===== MAIN CONTENT WITH LEFT SERVICES MENU ===== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr] items-start">
              {/* LEFT: SERVICES LIST */}
              <aside>
                <h2 className="text-sm font-semibold tracking-[0.15em] text-gray-800 mb-2">
                  OUR SERVICES
                </h2>
                <div className="w-10 h-[2px] bg-[#BC0018] mb-5" />

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
                        className={[
                          "block px-6 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-[#BC0018] text-white"
                            : "text-slate-600 hover:bg-slate-100",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </aside>

              {/* RIGHT: LCL CONTENT */}
              <div className="space-y-12">
                {/* Intro text (title is already in breadcrumb hero) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#BC0018] mb-4">
                    Efficient LCL Solutions
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Amass Freight, Dubai is one of the leading logistics providers in the
                    region providing Less-Than Container load (LCL) for the ultimate
                    convenience of our customers to help in transporting their products to
                    any location required.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mt-4">
                    LCL is an ocean freight transportation service that is often preferred by
                    businesses that don't have enough cargo to fill an entire shipping
                    container. Instead of paying for an entire container with unused space,
                    shippers can consolidate goods with other consignees to fully utilize the
                    available space and thereby reduce overall costs.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mt-4">
                    It is our assurance to our customers that there is no need to worry about
                    deadlines when using our ocean freight services, as we are committed to
                    getting your cargo to its desired destination on time, safely.
                  </p>
                </motion.div>

                {/* Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="order-2 md:order-1" />
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative order-1 md:order-2"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        alt="LCL Shipping"
                        loading="lazy"
                        className="w-full h-80 md:h-96 object-cover"
                        src="/lcl1.JPG"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-lg bg-[#BC0018]">
                      <Ship className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Features */}
                <section className="pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-left mb-8"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-[#BC0018] mb-3">
                      Why Choose Our LCL Services
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl">
                      Our LCL network offers unmatched connectivity and cadence across major
                      shipping routes.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl p-6 text-center bg-slate-100"
                      >
                        <div className="w-16 h-16 bg-[#BC0018]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <feature.icon className="w-8 h-8 text-[#BC0018]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#BC0018] mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                <section className="mt-6">
                  <div className="rounded-2xl bg-[#BC0018] text-white px-8 py-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Ready to Ship with LCL?
                      </h2>
                      <p className="text-base md:text-lg text-white/90 max-w-xl">
                        Contact us today for competitive rates and reliable LCL shipping
                        solutions.
                      </p>
                    </div>
                    <Link
                      to={getNavLink("/contact")}
                      className="inline-flex items-center bg-white text-[#BC0018] px-8 py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      Get Quote Now
                    </Link>
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
