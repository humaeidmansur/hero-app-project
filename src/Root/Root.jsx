import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const routeLoading = navigation.state === "loading";

  const [manualLoading, setManualLoading] = useState(false);

  // ✅ Make global functions available everywhere
  useEffect(() => {
    window.showGlobalLoader = () => setManualLoading(true);
    window.hideGlobalLoader = () => setManualLoading(false);

    return () => {
      delete window.showGlobalLoader;
      delete window.hideGlobalLoader;
    };
  }, []);

  const isLoading = routeLoading || manualLoading;

  return (
    <>
      <Navbar />

      {/* ✅ Global loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <span className="loading loading-ring loading-xl text-[#00D390]"></span>
        </div>
      )}

      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
