import React from 'react';
import banner from "../assets/hero.png"
import play_store from "../assets/play_store.png"
import app_store from "../assets/App.png"

const Banner = () => {
    return (
        <div  className='flex justify-center items-center mt-5'>
            <div>
                <h1 className='flex justify-center items-center font-bold text-[40px]'>We Build</h1> 
                 <h1 className='flex justify-center items-center font-bold text-[40px]'> 
                    <span className='mr-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='flex justify-center items-center text-center mt-5 mb-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
             
                <div className=" mr-0 md:mr-10 flex justify-center items-center gap-5">
                  <a className="btn"><img src={play_store} alt=""/>Contribute</a>
                  <a className="btn"><img src={app_store} alt=""/>Contribute</a>
                </div>

                <img className='mt-5' src={banner} alt="" />
              </div>
        </div>
    );
};

export default Banner;