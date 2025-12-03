import { Link } from "react-router-dom";
import { useServiceNav } from "@/hooks/useServiceNav";

const ServiceSidebar = () => {
  const { t, pathname, getNavLink, servicesNav } = useServiceNav();

  return (
    <aside className="space-y-10">
      <div>
        <h2 className="text-sm font-semibold tracking-[0.15em] text-gray-900 mb-2 uppercase">
          {t("services.ourServices")}
        </h2>
        <div className="w-12 h-[2px] bg-[#BC0018] mb-5" />

        <div className="border border-slate-200 rounded-md overflow-hidden bg-slate-50">
          {servicesNav.map((item) => {
            const to = getNavLink(item.path);
            const isActive =
              pathname === to ||
              (item.path !== "/services" && pathname.startsWith(to));

            return (
              <Link
                key={item.path}
                to={to}
                className={`block px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#BC0018] text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
