import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-900 font-bold gap-5  shadow-md p-2 w-full flex gap-2">
      <button className="btn  text-white border p-2 rounded hover:bg-slate-800  ">
        <Link to="/">Home</Link>
      </button>
      <button className="btn  text-white border p-2 rounded hover:bg-slate-800">
        <Link to="/exchanges">Exchanges</Link>
      </button>
      <button className="btn  text-white border p-2 rounded hover:bg-slate-800">
        <Link to="/coins">Coins</Link>
      </button>
    </div>
  );
}

export default Header;
