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
    <div className="bg-white min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      {/* WHITE SPACE BELOW NAV (UNIFORM ACROSS ALL PAGES) */}
      <div className="h-[90px] w-full bg-white" />

      <main className="flex-grow">

        {/* ===== HERO SECTION — CENTERED LIKE UPDATED STYLE ===== */}
        <section className="relative h-[300px] md:h-[360px] w-full overflow-hidden flex items-center justify-center">
          <img
            src="/advantages-hero.jpg"
            alt="Advantages Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK CENTER GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Advantages
            </h1>

            {/* RED UNDERLINE */}
            <div className="w-24 h-[3px] bg-[#BC0018] mx-auto mt-3" />

            {/* SUBTEXT — YOU CAN CHANGE OR REMOVE */}
            <p className="mt-4 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
              Excellence through capacity, service, and expertise.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT — ADVANTAGES LIST */}
        <AdvantagesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Advantages;
