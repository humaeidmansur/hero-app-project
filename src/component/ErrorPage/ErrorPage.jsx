import React from 'react';
import Error from "../../assets/error-404.png"
import { Link, useNavigate } from "react-router-dom";


const ErrorPage = () => {
   const navigate = useNavigate();
    return (
        <div>
          <img src={Error} alt="" className='w-full sm:w-[1200px] sm:ml-150 '/> 
        
        <div className='flex justify-center items-center mt-6 mb-6'> 
  
  <Link to="/">    
<button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[white] p-10 text-2xl" onClick={() => {
        navigate("/");
      }}> Back to Home </button>
  </Link>
       </div>
       

        </div>


    );
};

export default ErrorPage;