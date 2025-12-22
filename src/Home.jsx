// src/component/Home/Home.jsx
import React from "react";
import Banner from "./component/Home/Banner";
import Card from "./component/Home/Card";
import Rating from "./component/Home/Rating";
import { useEffect, useState } from 'react';


const Home = () => {

     const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/frontpage.json") 
      .then((res) => res.json())
      .then((data) => setApps(data))
            .catch((err) => {
        console.error("Failed to load Frontpage.json", err);})
      ;
  }, []);
  
  return (
    <>
      <Banner />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-0 sm:p-22">
         {apps.map((item) => (

      <Card key={item.id} item={item} />
      
      ))}
      </div>

      <Rating />
    </>
  );
};

export default Home;

