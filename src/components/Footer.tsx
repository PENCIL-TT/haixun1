import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type Office = {
  name: string;
  address: string;
  phone?: string;
  fax?: string;
  email?: string;
  map?: string;
  country?: string;
};

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const keyAddresses: { country: string; offices: Office[] }[] = [
    {
      country: "China",
      offices: [
        {
          name: "Shenzhen Office",
          address:
            "13C02, Block A,\nZhaoxin Huijin Plaza 3085 Shennan East Road,\nLuohu, Shenzhen.",
          phone: "+86 75582222447",
          fax: "+86 75582192854",
          email: "helen@haixun.co",
          map: "",
        },
      ],
    },
  ];

  const getCurrentCountry = () => "China";

  const offices = useMemo(() => {
    const all = keyAddresses.flatMap((c) =>
      c.offices.map((o) => ({ ...o, country: c.country }))
    );
    const current = getCurrentCountry();
    return [
      ...all.filter((o) => o.country === current),
      ...all.filter((o) => o.country !== current),
    ];
  }, [location.pathname]);

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalMs = 4000;
  const slideMs = 450;

  useEffect(() => {
    setIdx(0);
  }, [location.pathname]);

  useEffect(() => {
    if (paused || offices.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % offices.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [paused, offices.length]);

  const current = offices[idx];

  const footerAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="pt-16 pb-8 text-white relative overflow-hidden bg-[#9B111E]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#6E0C13] via-[#9B111E] to-[#B92D35] opacity-90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="h-1 bg-gradient-to-r from-white/50 via-white/30 to-white/50 rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-4">
          {/* Column 1: Logo & About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnim}
            className="flex flex-col items-start"
          >
            {/* Logo block with white tile background */}
            <div className="mb-4 p-2 rounded-xl border-2 border-white/80 bg-white/10 backdrop-blur-sm inline-block shadow-lg">
              <div className="rounded-lg bg-white p-3 shadow-md flex items-center justify-center">
                <img
                  src="/haixun-logo.svg"
                  alt="Haixun Global"
                  className="h-16 w-auto object-contain md:h-20"
                  loading="lazy"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-white">
              {t("footer.company")}
            </h3>
            <p className="text-sm md:text-base max-w-xs text-left leading-relaxed mb-4 text-white/90">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Column 2: Useful Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnim}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start md:items-end lg:items-start lg:pl-10"
          >
            <h3 className="font-bold text-xl text-white mb-4">{t("footer.usefulLinks")}</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: t("nav.home"), path: "/" },
                { name: t("nav.services"), path: "/services" },
                { name: t("nav.about"), path: "/about-us" },
                { name: t("nav.news"), path: "/blog" },
                { name: t("nav.advantage"), path: "/advantages" },
                { name: t("nav.contact"), path: "/contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-white/90 hover:text-[#FFDCDC] transition-colors duration-300 flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-white/70" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Contact Info (slider) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnim}
            transition={{ delay: 0.4 }}
            className="lg:pl-10"
          >
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="font-bold text-xl text-white">{t("footer.contactUs")}</h3>
              <button
                onClick={() => setIdx((i) => (i + 1) % offices.length)}
                onMouseDown={() => setPaused(true)}
                onMouseUp={() => setPaused(false)}
                className="bg-white/20 text-white p-1.5 rounded-full hover:bg-white/30 transition-colors"
                title="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div
              className="relative h-[168px] overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={idx}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: slideMs / 1000, ease: "easeOut" }}
                  className="space-y-3"
                >
                  <p className="font-semibold text-white">
                    {current.name} • {current.country}
                  </p>

                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-white/80 mt-1" />
                    <p className="whitespace-pre-line text-sm leading-relaxed text-white/90">
                      {current.address}
                    </p>
                  </div>

                  {current.phone && (
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Phone size={16} className="text-white/80" />
                      <span>{current.phone}</span>
                    </div>
                  )}
                  {current.fax && (
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Phone size={16} className="text-white/80" />
                      <span>Fax: {current.fax}</span>
                    </div>
                  )}
                  {current.email && (
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Mail size={16} className="text-white/80" />
                      <span>{current.email}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-start mt-4 space-x-2">
              {offices.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === idx
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to office ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-white/80 mt-12 pt-8 border-t border-white/20 text-sm">
          &copy; {new Date().getFullYear()} {t("footer.company")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
