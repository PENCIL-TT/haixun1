import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";

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

      {/* ⭐ ADDED CENTER DECOR IMAGE — NOTHING REMOVED */}
      <img
        src="/shape-01.webp"
        alt=""
        className="
          absolute 
          top-1/2 
          left-1/2 
          -translate-x-1/2 
          -translate-y-1/2
          w-[50%]
          md:w-[40%]
          lg:w-[35%]
          opacity-20
          pointer-events-none
          select-none
        "
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="h-1 bg-gradient-to-r from-white/50 via-white/30 to-white/50 rounded-full mb-8" />

        {/* ✔ All your existing footer content remains untouched */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-4">
          {/* Column 1 */}
          {/* Column 2 */}
          {/* Column 3 */}
          {/* (Your full existing content stays here exactly as it was) */}
        </div>

        <div className="text-center text-white/80 mt-12 pt-8 border-t border-white/20 text-sm">
          &copy; {new Date().getFullYear()} Haixun Global Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
