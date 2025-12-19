import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import downloads from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Appdetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  const data = [
    { rating: "5 star", value: 9800 },
    { rating: "4 star", value: 7600 },
    { rating: "3 star", value: 4500 },
    { rating: "2 star", value: 3200 },
    { rating: "1 star", value: 1600 },
  ];

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === Number(id));
        setApp(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load apps.json", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!app) return;

    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setIsInstalled(installedApps.includes(app.id));
  }, [app]);

  const handleInstall = () => {
    if (!app) return;

    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));

      toast.success(`${app.title} installed successfully!`);
    }

    setIsInstalled(true);
  };

  if (loading) return <div className="p-4">Loading...</div>;
  

  return (
    <div>
   
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

      <div className="mx-20 my-10 p-4 md:p-5 md:justify-start md:flex md:items-start">
        <div className="mt-4 p-6 flex flex-col md:flex-row gap-6">
          {/* LEFT BIG ICON/IMAGE */}
          <div className="flex justify-center items-start">
            <img
              src={app.image}
              alt={app.title}
              className="w-60 h-55 object-contain p-4 border border-slate-300 rounded-xl"
            />
          </div>

          {/* RIGHT DETAILS */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{app.title}</h1>
            <p className="text-sm">
              Developed by{" "}
              <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {app.companyName}
              </span>
            </p>

            <div className="flex flex-wrap gap-10 mt-6 text-sm">
              <div>
                <img src={downloads} alt="" />
                <p className="text-2xl font-bold">
                  {app.downloads.toLocaleString()}
                </p>
              </div>
              <div>
                <img src={star} alt="" />
                <p className="text-2xl font-bold">{app.ratingAvg}</p>
              </div>
              <div>
                <img src={review} alt="" />
                <p className="text-2xl font-bold">
                  {app.reviews.toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className="mt-6 bg-[#00D390] text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-600 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Rating Graph */}
      <div className="mx-20 my-10">
        <h2 className="font-bold text-xl mb-4">Ratings</h2>

        <div className="w-full h-72 border border-slate-200 rounded-xl p-4">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 10, right: 20, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="rating" type="category" width={70} />
              <Tooltip />
              <Bar dataKey="value" fill="#FF8A00" radius={[0, 5, 5, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mx-20 my-10">
        <h1 className="font-bold text-xl">Description</h1>
        <p className="mt-2">
          This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles.
          Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and
          maximizing concentration. Users can create custom work and break intervals, track how many sessions they
          complete each day, and review detailed statistics about their focus habits over time...
        </p>
      </div>
    </div>
  );
};

export default Appdetails;
