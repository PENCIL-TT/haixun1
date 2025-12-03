import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getCurrentCountryFromPath, detectCountryByIP } from "@/services/countryDetection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/* -----------------------------------------------------------
   SMALL FLAG ICON
------------------------------------------------------------ */
function FlagIcon({
  code,
  className = "h-5 w-7 object-contain rounded-[2px]",
}: {
  code: string;
  className?: string;
}) {
  const iso = (code || "").toLowerCase();
  return (
    <img
      src={`/${iso}.svg`}
      alt=""
      aria-hidden="true"
      className={className}
      draggable={false}
      onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
    />
  );
}

/* -----------------------------------------------------------
   NAVIGATION
------------------------------------------------------------ */
const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [ipCountry, setIpCountry] = useState<{ code: string; name: string } | null>(null);

  const currentCountry = getCurrentCountryFromPath(location.pathname);

  /* Detect country by IP */
  useEffect(() => {
    const detect = async () => {
      try {
        const saved = localStorage.getItem("preferredCountry");
        if (saved) return setIpCountry(JSON.parse(saved));

        const c = await detectCountryByIP();
        setIpCountry({ code: c.code, name: c.name });
      } catch {
        setIpCountry(null);
      }
    };
    detect();
  }, []);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active link check */
  const isActive = (path: string) => location.pathname === path;

  /* Dynamic country nav link */
  const getNavLink = (path: string) => {
    if (currentCountry.code === "SG") return path;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${path}`;
  };

  /* Desktop link class */
  const desktopClass = (path: string) =>
    `nav-link ${
      isActive(path) ? "active-nav text-[#BC0018]" : isScrolled ? "text-gray-900" : "text-[#BC0018]"
    } font-medium text-base xl:text-lg transition-colors`;

  /* Mobile link class */
  const mobileClass = (path: string) =>
    `nav-link ${
      isActive(path) ? "active-nav text-[#BC0018]" : "text-gray-900"
    } font-medium text-lg py-2`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/">
          <img
            src="/haixun-logo.svg"
            className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
            alt="Haixun Logo"
          />
        </Link>

        {/* -----------------------------------------------------------
           DESKTOP NAVIGATION
        ------------------------------------------------------------ */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={desktopClass("/")}>
            {t("nav.home")}
          </Link>

          <Link to="/about-us" className={desktopClass("/about-us")}>
            {t("nav.about")}
          </Link>

          {/* SERVICES DROPDOWN */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`nav-link ${
                location.pathname.includes("/services")
                  ? "active-nav text-[#BC0018]"
                  : isScrolled
                  ? "text-gray-900"
                  : "text-[#BC0018]"
              } font-medium text-base xl:text-lg flex items-center gap-1`}
            >
              {t("nav.services")} <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-64 bg-white shadow-md border-gray-200">
              <DropdownMenuItem asChild>
                <Link to="/services">{t("services.allServices")}</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/services/lcl">{t("services.lcl.title")}</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/services/fcl">{t("services.fcl.title")}</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/services/air-freight">{t("services.air.title")}</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/services/import-services">{t("services.import.title")}</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/services/warehousing">{t("services.warehouse.title")}</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/services/project-cargo">{t("services.projectCargo.title")}</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/services/customs-clearance">{t("services.customs.title")}</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/services/consolidation">{t("services.consolidation.title")}</Link>
              </DropdownMenuItem>

              {/* ▶️ REPLACED LIQUID CARGO WITH OOG SHIPMENTS */}
              <DropdownMenuItem asChild>
                <Link to="/services/oog-shipments">OOG Shipments</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/advantages" className={desktopClass("/advantages")}>
            {t("nav.advantage")}
          </Link>

          <Link to="/global-presence" className={desktopClass("/global-presence")}>
            {t("nav.globalPresence")}
          </Link>

          <Link to="/blog" className={desktopClass("/blog")}>
            {t("nav.news")}
          </Link>

          <Link to="/contact" className={desktopClass("/contact")}>
            {t("nav.contact")}
          </Link>

          <LanguageSwitcher />
        </div>

        {/* -----------------------------------------------------------
           MOBILE BUTTON
        ------------------------------------------------------------ */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
          {isMenuOpen ? (
            <X size={28} className={isScrolled ? "text-gray-900" : "text-[#BC0018]"} />
          ) : (
            <Menu size={28} className={isScrolled ? "text-gray-900" : "text-[#BC0018]"} />
          )}
        </button>
      </div>

      {/* -----------------------------------------------------------
         MOBILE MENU
      ------------------------------------------------------------ */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link to="/" className={mobileClass("/")} onClick={() => setIsMenuOpen(false)}>
              {t("nav.home")}
            </Link>

            <Link
              to="/about-us"
              className={mobileClass("/about-us")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>

            {/* SERVICES COLLAPSE */}
            <button
              className="nav-link font-medium text-lg flex justify-between items-center"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              {t("nav.services")}
              <ChevronDown
                className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isServicesOpen && (
              <div className="ml-4 flex flex-col space-y-3">
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                  {t("services.allServices")}
                </Link>
                <Link to="/services/lcl" onClick={() => setIsMenuOpen(false)}>
                  {t("services.lcl.title")}
                </Link>
                <Link to="/services/fcl" onClick={() => setIsMenuOpen(false)}>
                  {t("services.fcl.title")}
                </Link>
                <Link to="/services/air-freight" onClick={() => setIsMenuOpen(false)}>
                  {t("services.air.title")}
                </Link>
                <Link to="/services/import-services" onClick={() => setIsMenuOpen(false)}>
                  {t("services.import.title")}
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

                {/* ▶️ MOBILE: OOG SHIPMENTS */}
                <Link to="/services/oog-shipments" onClick={() => setIsMenuOpen(false)}>
                  OOG Shipments
                </Link>
              </div>
            )}

            <Link
              to="/advantages"
              className={mobileClass("/advantages")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.advantage")}
            </Link>

            <Link
              to="/global-presence"
              className={mobileClass("/global-presence")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.globalPresence")}
            </Link>

            <Link
              to="/blog"
              className={mobileClass("/blog")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.news")}
            </Link>

            <Link
              to="/contact"
              className={mobileClass("/contact")}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>

            <LanguageSwitcher />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
