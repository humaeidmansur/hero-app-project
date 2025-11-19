import './App.css'
import { useEffect, useState } from 'react';
import Appdata from './component/Appdata/Appdata';


function App() {
 
      const [app, setApps] = useState([]);
 
   useEffect(() => {
     fetch("/public/apps.json") 
       .then((res) => res.json())
       .then((data) => setApps(data))
             .catch((err) => {
         console.error("Failed to load Frontpage.json", err);})
       ;
   }, []);

  return (
    <>
 
<div>

  <div>

<div className='p-5'>

  <h1 className='font-bold text-4xl flex justify-center items-center mb-4'>Our All Applictions</h1>
  <p className='text-[#627382] flex justify-center items-center '>Explore All Apps on the Market developed by us. We code for Millions</p>
</div>

<div className='flex justify-between p-5 '>

  


  <h1 className='font-bold text-xl mb-4 ml-25'>(132) Apps Found</h1>

  <label className="input mr-25">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>

</div>



</div>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-0 sm:p-22">
         {app.map((application) => (

      <Appdata key={application.id} application={application} />
      
      ))}
      </div>

         

      
      
      
</div>

  

    </>
    
  );
}


export default App
