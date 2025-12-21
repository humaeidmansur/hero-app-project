import React from "react";
import { Outlet , useNavigation} from "react-router-dom";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer/Footer";

export default function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />

      {/* Loader overlay while navigating */}
      {isLoading && (
         <div className="fixed inset-0 z-50 flex justify-center bg-base-200/70">
<span className="loading loading-bars loading-xl"></span>
        </div>
      )}

      <div className="min-h-[80vh]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
