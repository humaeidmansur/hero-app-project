import React from 'react';
import { Link } from "react-router-dom";

const Rating = () => {
    return (
      <div>
<div className="footer footer-horizontal footer-center  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-primary-content p-10">
  <aside>
 
    <p className="font-bold text-[20px] md:text-[30px]">
    Trusted by Millions, Built for You </p>

     

  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
            <p>Total Downloads</p>
            <h1 className='font-bold text-[40px] mb-5 mt-5'>29.6M</h1>
            <p>21% more than last month</p>
 
      </a>
      <a>
            <p>Total Reviews</p>
            <h1 className='font-bold text-[40px] mb-5 mt-5'>906K</h1>
            <p>46% more than last month</p>
      </a>
      <a>
            <p>Active Apps</p>
            <h1 className='font-bold text-[40px] mb-5 mt-5'>132+</h1>
            <p>31 more will Launch</p>
      </a>
    </div>
  </nav>

</div>
<div>
    <h2 className="text-3xl md:text-4xl font-bold text-sky-800 text-center mb-7 mt-10">
      Trending Apps
    </h2>
    <p className='flex justify-center items-center text-center'>Explore All Trending Apps on the Market developed by us</p>
</div>


<div className='flex justify-center items-center mb-6 mt-6'>
  <Link
  to="/apps"
  className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white "
>
  Show All
</Link>
</div>

      </div>

 

    );
};

export default Rating;