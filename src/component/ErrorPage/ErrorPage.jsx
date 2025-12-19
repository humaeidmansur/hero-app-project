import React from 'react';
import Error from "../../assets/error-404.png"
const ErrorPage = () => {
    return (
        <div>
          <img src={Error} alt="" className='w-full sm:w-[1200px] sm:ml-150 '/> 
        </div>
    );
};

export default ErrorPage;