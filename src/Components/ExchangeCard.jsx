import React from "react";

function ExchangeCard({ name, img, rank, url }) {
  return (
    <div className="text-center ">
      <a href={url} target={"_blank"}>
        <div className="w-52 shadow-lg p-5 m-3 text-center flex flex-col gap-2 items-center justify-center">
          <img src={img} alt="exchange" width={"25"} height={"25"} />
          <div>{rank}</div>
          <div>{name}</div>
        </div>
      </a>
    </div>
  );
}

export default ExchangeCard;
