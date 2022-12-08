import React from "react";
import img from "../assets/img.jpg";
function Home() {
  return (
    <div className="bg-slate-800 w-full h-screen md:shrink-0">
      <img src={img} alt="" className="h-screen w-full md:w-screen" />
      <h3 className="text-3xl text-center font-bold text-orange-400 mt-[-150px]">
        Xcrypto
      </h3>
    </div>
  );
}

export default Home;
