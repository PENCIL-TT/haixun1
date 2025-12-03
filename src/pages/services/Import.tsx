import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceSidebar from "@/components/ServiceSidebar";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const ImportServices = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />

      <div className="h-[90px] w-full bg-white" />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[300px] md:h-[360px] w-full overflow-hidden flex items-center justify-center">
          <img
            src="/importhero.jpg"
            alt="Import Services Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              {t("services.import.title")}
            </h1>
            <div className="w-24 h-[3px] bg-[#BC0018] mx-auto mt-3" />
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-[260px,1fr] items-start">
              <ServiceSidebar />

              <div className="space-y-12">
                <div className="rounded-md overflow-hidden shadow-lg">
                  <img
                    src="/importhero1.jpg"
                    alt="Import Logistics Services"
                    className="w-full h-[340px] md:h-[380px] object-cover"
                  />
                </div>

                <section>
                  <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-900">
                    {t("services.import.title")}
                  </h2>
                  <div className="mt-2 w-16 h-[2px] bg-[#BC0018]" />

                  <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700 mt-5">
                    <p>{t("services.import.content1")}</p>
                    <p>{t("services.import.content2")}</p>
                    <p>{t("services.import.content3")}</p>
                    <p>{t("services.import.content4")}</p>
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

export default ImportServices;
