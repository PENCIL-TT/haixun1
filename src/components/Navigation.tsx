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

function FlagIcon({ code, className = "h-5 w-7 object-contain rounded-[2px]" }) {
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

  const currentCountry = getCurrentCountryFromPath(location.pathname);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-4 lg:py-[18px]">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/">
            <img
              src="/haixun-logo.svg"
              alt="Haixun Global Co., Ltd"
              className="h-8 sm:h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`nav-link font-medium text-base xl:text-lg transition-colors ${
                isActive("/") ? "text-red-600" : isScrolled ? "text-gray-900" : "text-red-600"
              }`}
            >
              {t("nav.home")}
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`nav-link font-medium text-base xl:text-lg flex items-center gap-1 transition-colors ${
                  location.pathname.includes("/services")
                    ? "text-red-600"
                    : isScrolled
                    ? "text-gray-900"
                    : "text-red-600"
                }`}
              >
                {t("nav.services")} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 bg-white border-gray-200 shadow-lg z-[100]">

                {/* All Services */}
                <DropdownMenuItem asChild>
                  <Link to="/services" className="hover:bg-gray-100">
                    {t("services.allServices")}
                  </Link>
                </DropdownMenuItem>

                {/* LCL */}
                <DropdownMenuItem asChild>
                  <Link to="/services/lcl" className="hover:bg-gray-100">
                    {t("services.lcl.title")}
                  </Link>
                </DropdownMenuItem>

                {/* FCL */}
                <DropdownMenuItem asChild>
                  <Link to="/services/fcl" className="hover:bg-gray-100">
                    {t("services.fcl.title")}
                  </Link>
                </DropdownMenuItem>

                {/* Warehousing */}
                <DropdownMenuItem asChild>
                  <Link to="/services/warehousing" className="hover:bg-gray-100">
                    {t("services.warehouse.title")}
                  </Link>
                </DropdownMenuItem>

                {/* Project Cargo */}
                <DropdownMenuItem asChild>
                  <Link to="/services/project-cargo" className="hover:bg-gray-100">
                    {t("services.projectCargo.title")}
                  </Link>
                </DropdownMenuItem>

                {/* Customs */}
                <DropdownMenuItem asChild>
                  <Link to="/services/customs-clearance" className="hover:bg-gray-100">
                    {t("services.customs.title")}
                  </Link>
                </DropdownMenuItem>

                {/* Consolidation */}
                <DropdownMenuItem asChild>
                  <Link to="/services/consolidation" className="hover:bg-gray-100">
                    {t("services.consolidation.title")}
                  </Link>
                </DropdownMenuItem>

                {/* Liquid Cargo */}
                <DropdownMenuItem asChild>
                  <Link to="/services/liquid-cargo" className="hover:bg-gray-100">
                    {t("services.liquidCargo.title")}
                  </Link>
                </DropdownMenuItem>

                {/* REMOVED:
                    Ocean Freight
                    3PL Services (Third-Party Logistics)
                    Liner Agency 
                */}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about-us"
              className={`nav-link font-medium text-base xl:text-lg transition-colors ${
                isActive("/about-us") ? "text-red-600" : isScrolled ? "text-gray-900" : "text-red-600"
              }`}
            >
              {t("nav.about")}
            </Link>

            <Link
              to="/blog"
              className={`nav-link font-medium text-base xl:text-lg transition-colors ${
                isActive("/blog") ? "text-red-600" : isScrolled ? "text-gray-900" : "text-red-600"
              }`}
            >
              {t("nav.news")}
            </Link>

            <Link
              to="/advantages"
              className={`nav-link font-medium text-base xl:text-lg transition-colors ${
                isActive("/advantages") ? "text-red-600" : isScrolled ? "text-gray-900" : "text-red-600"
              }`}
            >
              {t("nav.advantage")}
            </Link>

            <Link
              to="/global-presence"
              className={`nav-link font-medium text-base xl:text-lg transition-colors ${
                isActive("/global-presence") ? "text-red-600" : isScrolled ? "text-gray-900" : "text-red-600"
              }`}
            >
              {t("nav.globalPresence")}
            </Link>

            <Link
              to="/contact"
              className={`nav-link font-medium text-base xl:text-lg transition-colors ${
                isActive("/contact") ? "text-red-600" : isScrolled ? "text-gray-900" : "text-red-600"
              }`}
            >
              {t("nav.contact")}
            </Link>

            <LanguageSwitcher />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? "text-gray-900" : "text-red-600"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-gray-900" : "text-red-600"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4 border-t">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">

              <Link
                to="/"
                className={`text-lg font-medium ${
                  isActive("/") ? "text-red-600" : "text-gray-900"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>

              {/* Mobile Services */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                  className="flex justify-between items-center text-lg font-medium text-gray-900"
                >
                  {t("nav.services")}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isCompanyDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCompanyDropdownOpen && (
                  <div className="pl-4 mt-2 flex flex-col space-y-2">

                    <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                      {t("services.allServices")}
                    </Link>

                    <Link to="/services/lcl" onClick={() => setIsMenuOpen(false)}>
                      {t("services.lcl.title")}
                    </Link>

                    <Link to="/services/fcl" onClick={() => setIsMenuOpen(false)}>
                      {t("services.fcl.title")}
                    </Link>

                    <Link to="/services/warehousing" onClick={() => setIsMenuOpen(false)}>
                      {t("services.warehouse.title")}
                    </Link>

                    <Link to="/services/project-cargo" onClick={() => setIsMenuOpen(false)}>
                      {t("services.projectCargo.title")}
                    </Link>

                    <Link to="/services/customs-clearance" onClick={() => setIsMenuOpen(false)}>
                      {t("services.customs.title")}
                    </Link>

                    <Link to="/services/consolidation" onClick={() => setIsMenuOpen(false)}>
                      {t("services.consolidation.title")}
                    </Link>

                    <Link to="/services/liquid-cargo" onClick={() => setIsMenuOpen(false)}>
                      {t("services.liquidCargo.title")}
                    </Link>

                    {/* REMOVED the 3 unwanted items in mobile also */}
                  </div>
                )}
              </div>

              <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
                {t("nav.about")}
              </Link>

              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                {t("nav.news")}
              </Link>

              <Link to="/advantages" onClick={() => setIsMenuOpen(false)}>
                {t("nav.advantage")}
              </Link>

              <Link to="/global-presence" onClick={() => setIsMenuOpen(false)}>
                {t("nav.globalPresence")}
              </Link>

              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                {t("nav.contact")}
              </Link>

              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
