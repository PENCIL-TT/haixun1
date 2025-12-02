import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe2, ShieldCheck, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const ACCENT = "#BC0018";

  return (
    <section
      className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* BOTTOM-RIGHT DECOR SHAPE */}
      <img
        src="/about-shape-2.png"
        alt="Decor Shape"
        className="
          absolute 
          bottom-0 
          right-4
          w-36 md:w-48 
          opacity-100 
          pointer-events-none 
          select-none 
          animate-float-slow
          z-0
        "
      />

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT — Image Composition */}
        <div className="relative flex justify-center lg:justify-start">
          <div
            className="absolute -top-8 -left-8 rounded-lg -z-10"
            style={{
              width: "82%",
              height: "82%",
              borderTopLeftRadius: "0.75rem",
              borderWidth: "20px",
              borderStyle: "solid",
              borderColor: ACCENT,
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
            }}
          />

          <div className="relative grid grid-cols-2 gap-3 items-center">
            <img
              src="/container.png"
              alt="Container stacks"
              className="rounded-xl shadow-xl object-cover w-full h-[320px] md:h-[380px] lg:h-[420px]"
            />

            <img
              src="/service.png"
              alt="Logistics truck"
              className="rounded-xl shadow-xl object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] mt-8 -ml-2"
            />

            <div
              className="
                absolute left-1/2 top-1/2 
                -translate-x-1/2 -translate-y-1/2
                flex items-center justify-center
                w-28 h-28 md:w-32 md:h-32 
                rounded-full bg-white shadow-2xl border-4
              "
              style={{ borderColor: ACCENT }}
            >
              <img
                src="/haixun-logo.svg"
                alt="Haixun Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — Text */}
        <div>
          <p
            className="uppercase tracking-wide font-extrabold text-3xl"
            style={{ color: ACCENT }}
          >
            {t("about.whoWeAre")}
          </p>

          <p className="mt-5 text-gray-700 max-w-xl">
            {t("about.paragraph1")}
          </p>

          <p className="mt-5 text-gray-700 max-w-xl">
            {t("about.paragraph2")}
          </p>

          <p className="mt-5 text-gray-700 max-w-xl">
            {t("about.paragraph3")}
          </p>

          <div className="mt-8 space-y-7">
            <div className="flex items-start gap-4">
              <Globe2 className="w-8 h-8" style={{ color: ACCENT }} />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Fast Worldwide Delivery
                </h4>
                <p className="text-gray-600 text-sm">
                  Our vast global network ensures your cargo reaches
                  destinations on schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8" style={{ color: ACCENT }} />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  Safe And Secure Delivery
                </h4>
                <p className="text-gray-600 text-sm">
                  From pickup to final drop-off, we maintain strict safety and
                  compliance standards.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <Link to="/contact">
              <Button
                className="text-white text-base font-semibold px-6 py-3 rounded-md shadow-lg transition"
                style={{ backgroundColor: ACCENT }}
              >
                Know More About Us
              </Button>
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Need Help?</p>
                  <p className="text-lg font-bold text-gray-900">
                    +86 75582222447
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
