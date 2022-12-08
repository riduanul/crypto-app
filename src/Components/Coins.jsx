import React, { useState, useEffect } from "react";
import Error from "./Error.jsx";
import Loader from "./Loader";
import axios from "axios";
import CoinCard from "./CoinCard.jsx";
import { server } from "../main";

function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  const currencySymbol =
    currency === "bdt" ? "৳" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
        // console.log(currency);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency, page]);

  if (error) return <Error message={"Error While Fetching coins..."} />;
  return (
    <div className="bg-slate-700 ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" text-center flex flex-row gap-3 justify-center">
            <label htmlFor="radiobtn1">
              BDT
              <input
                type="radio"
                className="accent-pink-500"
                id="radiobtn1"
                name="radiobtn"
                value="bdt"
                checked
                onChange={(e) => setCurrency(e.target.value)}
              />
            </label>
            <label htmlFor="radiobtn2">
              EUR
              <input
                type="radio"
                name="radiobtn"
                className="accent-pink-500 "
                id="radiobtn2"
                value="eur"
                onChange={(e) => setCurrency(e.target.value)}
              />
            </label>

            <label htmlFor="radiobtn3">
              USD
              <input
                type="radio"
                name="radiobtn"
                className="accent-pink-500"
                id="radiobtn3"
                value="usd"
                onChange={(e) => setCurrency(e.target.value)}
              />
            </label>
          </div>
          <div className=" flex flex-wrap justify-center">
            {coins?.map((c) => (
              <CoinCard
                key={c.id}
                id={c.id}
                name={c.name}
                img={c.image}
                price={c.current_price}
                symbol={c.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </div>

          <div className="  p-8 overflow-x-auto ">
            {btns.map((item, index) => (
              <button
                key={index}
                onClick={() => changePage(index + 1)}
                className="bg-slate-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-1"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Coins;
