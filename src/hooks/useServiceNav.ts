import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getCurrentCountryFromPath } from '@/services/countryDetection';

export const useServiceNav = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const detected = getCurrentCountryFromPath(location.pathname);
  const currentCountry = detected ?? { code: "SG", name: "Singapore" };

  const getNavLink = (basePath: string) => {
    if (currentCountry.code === "SG") return basePath;
    return `/${currentCountry.name.toLowerCase().replace(/\s+/g, "-")}${basePath}`;
  };

  const servicesNav = [
    { labelKey: "services.seeAllServices", path: "/services" },
    { labelKey: "services.lcl.title", path: "/services/lcl" },
    { labelKey: "services.fcl.title", path: "/services/fcl" },
    { labelKey: "services.warehouse.title", path: "/services/warehousing" },
    { labelKey: "services.projectCargo.title", path: "/services/project-cargo" },
    { labelKey: "services.air.title", path: "/services/air-freight" },
    { labelKey: "services.customs.title", path: "/services/customs-clearance" },
    { labelKey: "services.import.title", path: "/services/import" },
    { labelKey: "services.consolidation.title", path: "/services/consolidation" },
    { labelKey: "services.oog.title", path: "/services/oog-shipments" },
  ];

  return {
    t,
    pathname: location.pathname,
    getNavLink,
    servicesNav,
    currentCountry
  };
};
