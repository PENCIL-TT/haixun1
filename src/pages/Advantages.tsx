import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdvantagesSection from "@/components/AdvantagesSection";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const Advantages = () => {
  return (
    <div className="bg-white min-h-screen">
      <ScrollToTop />
      <Navigation />

      {/* WHITE SPACE BELOW NAV */}
      <div className="h-[90px] w-full bg-white"></div>

      <main className="flex-grow">

        {/* ===== HERO SECTION (MATCHES LCL/SERVICES) ===== */}
        <section className="relative h-[260px] md:h-[320px] w-full overflow-hidden flex items-center">
          <img
            src="/advantages-hero.jpg"
            alt="Advantages Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* LEFT DARK GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#BC0018]">
              Advantages
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <AdvantagesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Advantages;
