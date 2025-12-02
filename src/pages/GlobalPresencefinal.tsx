
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactMapContainer from "@/components/ContactMapContainer";
import ContactSidebar from "@/components/ContactSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Globe, MapPin } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
};

const Global = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showMap, setShowMap] = useState(true);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [sidebarH, setSidebarH] = useState<number>(640);

  // === Equal height sync (desktop only) ===
  useEffect(() => {
    const el = sidebarRef.current;
    if (!el || isMobile) return;
    const syncHeight = () => {
      const h = Math.max(520, Math.round(el.getBoundingClientRect().height));
      setSidebarH(h);
    };
    const ro = new ResizeObserver(syncHeight);
    ro.observe(el);
    window.addEventListener("resize", syncHeight);
    syncHeight();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setShowMap(true);
      setIsSidebarOpen(false);
    } else {
      setShowMap(true);
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleMobileView = () => {
    if (!isMobile) return;
    setShowMap((prev) => !prev);
    setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navigation />

      <main className="flex-1">
        <div className="relative flex flex-col md:flex-row w-full pt-20 md:pt-28">
          {/* ===== MAP SECTION ===== */}
          {(!isMobile || (isMobile && showMap)) && (
            <section
              className="relative md:w-[65%] w-full border-b md:border-b-0 md:border-r border-gray-200"
              style={!isMobile ? { height: `${sidebarH}px` } : {}}
            >
              <div className="map-equal h-full">
                <ContactMapContainer />
              </div>
            </section>
          )}

          {/* ===== SIDEBAR SECTION ===== */}
          {(!isMobile || (isMobile && !showMap)) && (
            <aside
              className="relative md:w-[35%] w-full bg-white"
              ref={sidebarRef}
            >
              <ContactSidebar
                isOpen={isSidebarOpen}
                onClose={() => {
                  setIsSidebarOpen(false);
                  if (isMobile) setShowMap(true);
                }}
              />
            </aside>
          )}
        </div>

        {/* ===== MOBILE TOGGLE BUTTON ===== */}
        {isMobile && (
          <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
            <Button
              onClick={toggleMobileView}
              className="flex items-center gap-2 bg-[#0B4CAB] hover:bg-[#083b8a] text-white shadow-lg px-5 py-4 rounded-full"
            >
              {showMap ? (
                <>
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-semibold">View Locations</span>
                </>
              ) : (
                <>
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-semibold">View Map</span>
                </>
              )}
            </Button>
          </div>
        )}
      </main>

      <Footer />

      {/* Equal map height enforcement */}
      <style>{`
        .map-equal,
        .map-equal > * { height: 100%; }
        .map-equal iframe { height: 100% !important; width: 100% !important; display: block; border: none; }
      `}</style>
    </div>
  );
};

export default Global;
