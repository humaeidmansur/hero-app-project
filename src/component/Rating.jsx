import React from 'react';

const Rating = () => {
    return (
       <footer className="footer footer-horizontal footer-center  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-primary-content p-10">
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
</footer>
    );
};

export default Rating;