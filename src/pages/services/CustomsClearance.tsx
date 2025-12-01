import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getCurrentCountryFromPath } from "@/services/countryDetection";
import { UserCheck, FileText, Shield, Globe } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const CustomsClearance = () => {
  const location = useLocation();

  const detected = getCurrentCountryFromPath(location.pathname);
  const currentCountry = detected ?? { code: "SG", name: "Singapore" };

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${basePath}`;
  };

  // STANDARDISED SERVICE NAV – MATCHES OTHER UPDATED PAGES
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

      {/* WHITE SPACE BELOW NAV – SAME AS OTHER SERVICE PAGES */}
      <div className="h-[90px] w-full bg-white" />

      <main className="flex-grow">
        {/* HERO SECTION – MATCH LCL / FCL / WAREHOUSING / AIR / PROJECT CARGO */}
        <section className="relative h-[260px] md:h-[320px] w-full overflow-hidden flex items-center">
          <img
            src="/servicepagehero.jpg"
            alt="Customs Clearance Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK RIGHT-SIDE GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#BC0018]">
              Customs Clearance
            </h1>

            <p className="text-white text-lg mt-3 max-w-xl">
              Fast, compliant, and reliable customs brokerage for smooth import and
              export movements across global gateways.
            </p>
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
                  className="rounded-md overflow-hidden shadow-lg relative"
                >
                  <img
                    src="/customclearance.png"
                    alt="Customs Clearance Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>

                {/* CUSTOMS CLEARANCE DESCRIPTION */}
                <section>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BC0018]/10">
                      <UserCheck className="w-5 h-5 text-[#BC0018]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 uppercase">
                        Customs Clearance
                      </h2>
                      <div className="mt-1 w-16 h-[2px] bg-[#BC0018]" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
                    <p>
                      As one of the leading custom clearing agents, we ensure that all
                      clearance formalities are completed smoothly and efficiently so that
                      our customers receive their goods on time. Our customs brokers help
                      ease import and export regulations and all paperwork related to trade
                      compliance and procedures to ensure that your consignments via sea and
                      air move without delay.
                    </p>

                    <p>
                      With more than a decade of experience, we have cleared all types of
                      shipments of every size and a wide variety of cargo from across the
                      world, managing each movement with precision. Our highly experienced
                      team conducts detailed studies of local rules and regulations to help
                      clients overcome complex trade compliance challenges.
                    </p>

                    <p>
                      Our strength lies in identifying changing business demands and
                      challenges, enabling us to manage all documentation and compliance so
                      that your business operations remain smooth and uninterrupted. With all
                      required documents in place, our team provides end-to-end solutions for
                      both import and export customs clearance.
                    </p>
                  </div>
                </section>

                {/* WHY CHOOSE SECTION */}
                <section>
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                      Why Choose Our Customs Service
                    </h2>
                    <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: FileText,
                        title: "Expert Documentation",
                        description:
                          "Comprehensive handling of all import and export documentation requirements.",
                      },
                      {
                        icon: Shield,
                        title: "Compliance Assurance",
                        description:
                          "Ensuring full regulatory compliance across ports and jurisdictions.",
                      },
                      {
                        icon: Globe,
                        title: "Global Experience",
                        description:
                          "Extensive knowledge of international customs procedures and regulations.",
                      },
                    ].map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 * index }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
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

                {/* CTA – CONSISTENT WITH OTHER SERVICE PAGES */}
                <section className="py-12 bg-white text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#BC0018] mb-4">
                    Need Support With Customs Clearance?
                  </h2>
                  <p className="text-lg md:text-xl text-[#BC0018] mb-10">
                    Contact us today for fast, compliant, and reliable customs solutions.
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

export default CustomsClearance;
