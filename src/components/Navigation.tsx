import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CountrySelector from "@/components/CountrySelector";
import { getCurrentCountryFromPath, detectCountryByIP } from "@/services/countryDetection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

/** Small flag component that never shows raw text like '/lk.svg' */
function FlagIcon({
  code,
  className = "h-5 w-7 object-contain rounded-[2px]",
}: {
  code: string;
  className?: string;
}) {
  const iso = (code || "").toLowerCase();
  const src = `/${iso}.svg`;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={className}
      draggable={false}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

const Navigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [ipCountry, setIpCountry] = useState<{ code: string; name: string } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  // We use the URL to decide the current country flag
  const currentCountry = getCurrentCountryFromPath(location.pathname);

  // Detect country by IP for flag display
  useEffect(() => {
    const detect = async () => {
      try {
        const saved = localStorage.getItem("preferredCountry");
        if (saved) {
          setIpCountry(JSON.parse(saved));
          return;
        }
        const country = await detectCountryByIP();
        setIpCountry({ code: country.code, name: country.name });
      } catch {
        setIpCountry(null);
      }
    };
    detect();
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(" ", "-")}${basePath}`;
  };

  const SOCIALS = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/amassmiddleeast/", Icon: FaLinkedinIn },
    { name: "Facebook", href: "https://www.facebook.com/Amassmiddleeast?mibextid=ZbWKwL", Icon: FaFacebookF },
  ];

  // Desktop class helper (with red underline + red text for active)
  const getDesktopNavClass = (targetPath: string) => {
    const active = isActive(targetPath);
    const base =
      "nav-link relative inline-flex items-center font-medium text-base xl:text-lg transition-colors";
    if (active) {
      return `${base} active-nav text-[#BC0018]`;
    }
    return `${base} ${isScrolled ? "text-gray-900" : "text-[#BC0018]"}`;
  };

  // Mobile class helper (you can keep underline here as well)
  const getMobileNavClass = (targetPath: string) => {
    const active = isActive(targetPath);
    const base =
      "nav-link relative font-medium py-2 text-lg transition-colors";
    if (active) {
      return `${base} active-nav text-[#BC0018]`;
    }
    return `${base} text-gray-900`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-4 lg:py-[18px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/haixun-logo.svg"
                alt="Haixun Global Co., Ltd"
                className="h-8 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* 1. Home */}
            <Link to="/" className={getDesktopNavClass("/")}>
              {t("nav.home")}
            </Link>

            {/* 2. About Us */}
            <Link to="/about-us" className={getDesktopNavClass("/about-us")}>
              {t("nav.about")}
            </Link>

            {/* 3. Our Services */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`nav-link relative inline-flex items-center gap-1 font-medium text-base xl:text-lg transition-colors ${
                  location.pathname.includes("/services")
                    ? "active-nav text-[#BC0018]"
                    : isScrolled
                    ? "text-gray-900"
                    : "text-[#BC0018]"
                }`}
              >
                {t("nav.services")} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border-gray-200 shadow-lg z-[100]">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.allServices")}
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/services/lcl" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.lcl.title")}
                  </Link>
                </DropdownMenuItem>

                {/* CFS -> FCL CHANGE */}
                <DropdownMenuItem asChild>
                  <Link to="/services/fcl" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.fcl.title")}
                  </Link>
                </DropdownMenuItem>

                {/* Air Freight */}
                <DropdownMenuItem asChild>
                  <Link to="/services/air-freight" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.air.title")}
                  </Link>
                </DropdownMenuItem>

                {/* Import Services */}
                <DropdownMenuItem asChild>
                  <Link to="/services/import-services" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.import.title")}
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/services/warehousing" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.warehouse.title")}
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/services/project-cargo" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.projectCargo.title")}
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    to="/services/customs-clearance"
                    className="w-full cursor-pointer hover:bg-gray-100"
                  >
                    {t("services.customs.title")}
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/services/consolidation" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.consolidation.title")}
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/services/liquid-cargo" className="w-full cursor-pointer hover:bg-gray-100">
                    {t("services.liquidCargo.title")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 4. Advantage */}
            <Link to="/advantages" className={getDesktopNavClass("/advantages")}>
              {t("nav.advantage")}
            </Link>

            {/* 5. Global Presence */}
            <Link to="/global-presence" className={getDesktopNavClass("/global-presence")}>
              {t("nav.globalPresence")}
            </Link>

            {/* 6. News */}
            <Link to="/blog" className={getDesktopNavClass("/blog")}>
              {t("nav.news")}
            </Link>

            {/* 7. Contact Us */}
            <Link to="/contact" className={getDesktopNavClass("/contact")}>
              {t("nav.contact")}
            </Link>

            {/* 8. Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className={isScrolled ? "text-gray-900" : "text-[#BC0018]"} size={24} />
              ) : (
                <Menu className={isScrolled ? "text-gray-900" : "text-[#BC0018]"} size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white py-4 shadow-md animate-fade-in border-t max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {/* 1. Home */}
              <Link
                to="/"
                className={getMobileNavClass("/")}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>

              {/* 2. About Us */}
              <Link
                to="/about-us"
                className={getMobileNavClass("/about-us")}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>

              {/* 3. Our Services (collapsible) */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                  className="nav-link relative flex items-center justify-between font-medium py-2 text-lg transition-colors text-gray-900"
                >
                  {t("nav.services")}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isCompanyDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCompanyDropdownOpen && (
                  <div className="flex flex-col pl-4 space-y-2 mt-2">
                    <Link
                      to="/services"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.allServices")}
                    </Link>

                    <Link
                      to="/services/lcl"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.lcl.title")}
                    </Link>

                    {/* CFS -> FCL CHANGE (MOBILE) */}
                    <Link
                      to="/services/fcl"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.fcl.title")}
                    </Link>

                    {/* Air Freight (MOBILE) */}
                    <Link
                      to="/services/air-freight"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.air.title")}
                    </Link>

                    {/* Import Services (MOBILE) */}
                    <Link
                      to="/services/import-services"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.import.title")}
                    </Link>

                    <Link
                      to="/services/warehousing"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.warehouse.title")}
                    </Link>

                    <Link
                      to="/services/project-cargo"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.projectCargo.title")}
                    </Link>

                    <Link
                      to="/services/customs-clearance"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.customs.title")}
                    </Link>

                    <Link
                      to="/services/consolidation"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.consolidation.title")}
                    </Link>

                    <Link
                      to="/services/liquid-cargo"
                      className="py-2 text-base hover:text-[#BC0018] transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("services.liquidCargo.title")}
                    </Link>
                  </div>
                )}
              </div>

              {/* 4. Advantage */}
              <Link
                to="/advantages"
                className={getMobileNavClass("/advantages")}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.advantage")}
              </Link>

              {/* 5. Global Presence */}
              <Link
                to="/global-presence"
                className={getMobileNavClass("/global-presence")}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.globalPresence")}
              </Link>

              {/* 6. News */}
              <Link
                to="/blog"
                className={getMobileNavClass("/blog")}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.news")}
              </Link>

              {/* 7. Contact Us */}
              <Link
                to="/contact"
                className={getMobileNavClass("/contact")}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>

              {/* 8. Language Switcher */}
              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
