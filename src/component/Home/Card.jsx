import React from 'react';
import download from "../../assets/download.png"
import star from "../../assets/star.png"
import { Link } from "react-router-dom";
 

const Card = ({ item }) => {
   
        
 // if no item is passed, avoid crashing
  if (!item) {
    return null;  
  }

  return (

<Link to="/apps"  >
  <div className="">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="rounded-xl border p-4 border-slate-200 overflow-hidden">
           
          <img
            src={item.image}
            alt={item.title}
            className="h-40 w-full rounded-xl object-cover"
          />

          <div>
           
            <div className="flex justify-around mt-5 gap-19">
              <div className="flex items-center gap-1">
                <img className="w-15" src={download} alt="" />
                <span className="text-sm font-semibold">
                  {item.downloads?.toLocaleString?.() ?? 0}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <img className="w-12" src={star} alt="" />
                <span className="text-sm font-semibold">
                  {item.ratingAvg ?? 0}
                </span>
              </div>
            </div>

           
           
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {item.title}
            </p>
          </div>
        </div>
      </div>
    </div>
</Link>
  
  );
};

        

export default Card;