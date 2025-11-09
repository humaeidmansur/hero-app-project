import React from 'react';
import download from "../assets/download.png"
import star from "../assets/star.png"

const Card = () => {
    return (
        <div>
             
 <div class="max-w-6xl mx-auto p-4 md:p-6">
    
    <h2 class="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-6">
      Trending Apps
    </h2>

     
    <div class="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

 


 
      <div class="  rounded-xl border p-4 border-slate-200 overflow-hidden">

        <div class="h-40 rounded-xl bg-slate-200">

        </div>

        <div class="">
          <div class="flex justify-around mt-5 ">
            <img className='w-15 mr-30' src={download} alt="" />
            <img className='h-7 w-13'  src={star} alt="" />
          </div>
          <p class="mt-2 text-sm font-semibold text-slate-900">
            Focus Plant: Pomodoro Forest
          </p>
        </div>
        
      </div>


  </div>
  </div>

 <div className='flex justify-center items-center mb-6'>
<a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[white]"> Contribute</a>
 </div>


        </div>
    );
};

export default Card;