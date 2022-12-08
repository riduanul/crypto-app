import React from "react";
import { Link } from "react-router-dom";
function CoinCard({ id, name, img, price, symbol, currencySymbol = "৳" }) {
  return (
    <div className="text-center ">
      <Link to={`/coin/${id}`} target={"blank"}>
        <div className="w-52 shadow-lg p-5 m-3 text-center flex flex-col gap-2 items-center justify-center">
          <img src={img} alt="exchange" width={"40"} height={"40"} />
          <div>{name}</div>
          <div>{symbol}</div>
          <div>{price ? `${currencySymbol} ${price}` : "NA"}</div>
        </div>
      </Link>
    </div>
  );
}

export default CoinCard;
