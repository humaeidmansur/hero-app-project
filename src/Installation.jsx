import React, { useEffect, useMemo, useState } from "react";
import download from "./assets/download.png";
import star from "./assets/star.png";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LS_KEY = "installedApps";

const Installation = () => {
  const [allApps, setAllApps] = useState([]); // all apps from apps.json
  const [installedIds, setInstalledIds] = useState([]); // ids from localStorage
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("none"); // none | size-asc | size-desc

  // 1) Read localStorage installed ids
  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    setInstalledIds(ids);
  }, []);

  // 2) Fetch all apps from json
  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setAllApps(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load apps.json", err);
        setLoading(false);
      });
  }, []);

  // 3) Build installed app objects from ids + sort
  const installedApps = useMemo(() => {
    const filtered = allApps.filter((a) => installedIds.includes(a.id));

    if (sortBy === "size-asc") {
      return [...filtered].sort((a, b) => Number(a.size) - Number(b.size));
    }
    if (sortBy === "size-desc") {
      return [...filtered].sort((a, b) => Number(b.size) - Number(a.size));
    }
    return filtered;
  }, [allApps, installedIds, sortBy]);

  // 4) Uninstall
  const handleUninstall = (appId, appTitle) => {
    const updatedIds = installedIds.filter((id) => id !== appId);

    localStorage.setItem(LS_KEY, JSON.stringify(updatedIds));
    setInstalledIds(updatedIds);

    toast.info(`${appTitle} uninstalled`, { theme: "light" });
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div>
      {/* ✅ Toastify container (your config) */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="p-5">
        <h1 className="font-bold text-4xl flex justify-center items-center mb-4">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] flex justify-center items-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between p-5">
        <h1 className="font-bold text-xl mb-4 ml-25">
          ({installedApps.length}) Apps Found
        </h1>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-xs w-36 mr-25"
        >
          <option value="none">Sort By Size</option>
          <option value="size-asc">Size: Small → Large</option>
          <option value="size-desc">Size: Large → Small</option>
        </select>
      </div>

      {/* ✅ Empty state */}
      {installedApps.length === 0 ? (
        <div className="mx-20 my-10 p-6 border border-slate-200 rounded-xl text-slate-600">
          No installed apps yet. Install an app to see it here.
        </div>
      ) : (
        installedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-white rounded-md shadow-sm border border-slate-100 px-4 py-3 m-4"
          >
            <div className="flex items-center gap-4">
              {/* App image (if you have it) */}
              <img
                src={app.image}
                alt={app.title}
                className="w-12 h-12 rounded-md object-contain bg-slate-100 p-1"
              />

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900">
                  {app.title}
                </span>

                <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1">
                    <img src={download} className="w-13" alt="" />
                    <span className="font-semibold">
                      {Number(app.downloads || 0).toLocaleString()}
                    </span>
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={star} className="w-12 h-6" alt="" />
                    <span className="font-semibold">{app.ratingAvg}</span>
                  </span>

                  <span className="font-bold">{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id, app.title)}
              className="text-xs font-semibold text-white bg-emerald-500 hover:bg-emerald-600 px-4 py-1.5 rounded-md"
            >
              Uninstall
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Installation;
