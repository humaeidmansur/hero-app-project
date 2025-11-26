import React from 'react';
import { Link } from "react-router-dom"; 
import download from "../../assets/icon-downloads.png"
import star from "../../assets/icon-ratings.png"
// import review from "../../assets/icon-review.png"

const Appdata = ({application}) => {
    return (
    <Link to={`/apps/${application.id}`}> 
    <div className="">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="rounded-xl border p-4 border-slate-200 overflow-hidden">
           
          <img
            src={application.image}
            alt={application.title}
            className="h-40 w-full rounded-xl object-cover"
          />

          <div>
           
            <div className="flex justify-around mt-5 gap-40">
              <div className="flex items-center gap-1">
                <img className="w-5" src={download} alt="" />
                <span className="text-sm font-semibold">
                  {application.downloads?.toLocaleString?.() ?? 0}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <img className="w-5" src={star} alt="" />
                <span className="text-sm font-semibold">
                  {application.ratingAvg ?? 0}
                </span>
              </div>
            </div>

           
           
            <p className="mt-2 ml-5 text-sm font-semibold text-slate-900">
              {application.title}
            </p>
          </div>
        </div>
      </div>
    </div>
      </Link>
    );
};

export default Appdata;