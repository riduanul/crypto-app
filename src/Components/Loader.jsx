import React from "react";

function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="   animate-spin h-20 w-20  border  border-black rounded-full ">
        <div className=" border w-15 h-20 rounded"></div>
      </div>
    </div>
  );
}

export default Loader;
