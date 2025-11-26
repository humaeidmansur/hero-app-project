import React from 'react';
import download from "./assets/download.png"
import star from "./assets/star.png"

const Installation = () => {
    return (
        <div>
            
<div className='p-5'>

  <h1 className='font-bold text-4xl flex justify-center items-center mb-4'>Your Installed Apps</h1>
  <p className='text-[#627382] flex justify-center items-center '>Explore All Trending Apps on the Market developed by us</p>
</div>

<div className='flex justify-between p-5 '>
    <h1 className='font-bold text-xl mb-4 ml-25'>(132) Apps Found</h1>
   
   <select defaultValue="Sort By Size" className="select select-xs w-30 mr-25">
  <option disabled={false}>Sort By Size</option>
  </select>
</div>


 

   
    <div className="flex items-center justify-between bg-white rounded-md shadow-sm border border-slate-100 px-4 py-3 m-4">
      
      <div className="flex items-center gap-4">
       
        <div className="w-12 h-12 rounded-md bg-slate-200"></div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-900">
            Forest: Focus For Productivity
          </span>
       
          <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
            <span className="flex items-center gap-1">
              
              <img src={download} className="w-13" alt="" />
              
            </span>
            <span className="flex items-center gap-1">
               
            <img src={star} className="w-12 h-6" alt="" />
            </span>
            <span className='font-bold'>256 MB</span>
          </div>
        </div>
      </div>

       
      <button
        className="text-xs font-semibold text-white bg-emerald-500 hover:bg-emerald-600 px-4 py-1.5 rounded-md">
        Uninstall
      </button>
    </div>
    </div>
        
    );
};

export default Installation;