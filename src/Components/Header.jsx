import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex justify-between bg-slate-900 font-bold gap-5  shadow-md p-2 w-full flex gap-2">
      <div className="text-xl text-orange-500 font-bold md:ml-10">Xcryto</div>
      <div className=" flex flex-row gap-3 md:mr-10">
        <button className="btn  text-orange-500 border p-2 rounded hover:bg-slate-800  ">
          <Link to="/">Home</Link>
        </button>
        <button className="btn  text-orange-500 border p-2 rounded hover:bg-slate-800">
          <Link to="/exchanges">Exchanges</Link>
        </button>
        <button className="btn  text-orange-500 border p-2 rounded hover:bg-slate-800">
          <Link to="/coins">Coins</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
