import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";
import { server } from "../main";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import Chart from "./Chart";

function CoinDetails() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("bdt");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const params = useParams();

  const currencySymbol =
    currency === "bdt" ? "৳" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoin();
  }, [params.id, currency, days]);

  const switchChartStates = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("6d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
    }
  };
  if (error) <Error message={"Error while fetching Coin"} />;
  return (
    <div className="container w-full h-full mt-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="  flex justify-center items-center ">
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </div>

          <div className="p-4 overflow-x-auto flex flex-row justify-center items-center">
            {btns.map((i) => (
              <button
                key={i}
                onClick={() => switchChartStates(i)}
                className=" p-2 m-2 border rounded hover:bg-slate-800 hover:text-white "
              >
                {i}
              </button>
            ))}
          </div>

          <div className=" text-slate-600 mb-5 flex flex-row gap-3 justify-center ml-10">
            <label htmlFor="radiobtn1">
              BDT
              <input
                type="radio"
                className="accent-pink-500 ml-1"
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
                className="accent-pink-500 ml-1 "
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
                className="accent-pink-500 ml-1"
                id="radiobtn3"
                value="usd"
                onChange={(e) => setCurrency(e.target.value)}
              />
            </label>
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <p className="text-center text-slate-500">
              Last Updated on:{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </p>
            <img
              src={coin.image.large}
              alt="image"
              className="w-16 h-16 objectFit-[contain]"
            />
            <p className="font-bold text-xl">{coin.name}</p>
            <p className="text-2xl font-bold">
              {currencySymbol}
              {coin.market_data.current_price[currency]}
            </p>
            <p className="flex flex-row gap-1">
              <span>
                {coin.market_data.price_change_percentage_24h > 0 ? (
                  <AiFillCaretUp className="text-green-800 text-2xl" />
                ) : (
                  <AiFillCaretDown className="text-red-800 text-2xl" />
                )}
              </span>
              {coin.market_data.price_change_percentage_24h}%
            </p>
            <div className="text-2xl bg-black font-bold text-white">
              <p>{`#${coin.market_cap_rank}`}</p>
            </div>
            <div className="w-[250px] h-full">
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-red-800 ">{`${currencySymbol}${coin.market_data.low_24h[currency]}`}</p>
                <p>24H Range</p>
                <p className="text-green-800">{`${currencySymbol}${coin.market_data.high_24h[currency]}`}</p>
              </div>
            </div>
          </div>
          <div className="mx-10">
            <div className="flex justify-between w-full my-4 ">
              <p className="font-bold">Max Supply</p>
              <p className="text-xl">{`${currencySymbol} ${coin.market_data.max_supply}`}</p>
            </div>
            <div className="flex justify-between w-full my-4 ">
              <p className="font-bold">Cuirculating Supply</p>
              <p className="text-xl">{`${currencySymbol} ${coin.market_data.circulating_supply}`}</p>
            </div>
            <div className="flex justify-between w-full my-4 ">
              <p className="font-bold">Market Cap</p>
              <p className="text-xl">{`${currencySymbol} ${coin.market_data.market_cap[currency]}`}</p>
            </div>
            <div className="flex justify-between w-full my-4 ">
              <p className="font-bold">
                All Time <span className="text-red-600"> Low</span>
              </p>
              <p className="text-xl">{`${currencySymbol} ${coin.market_data.atl[currency]}`}</p>
            </div>
            <div className="flex justify-between w-full my-4 ">
              <p className="font-bold">
                All Time <span className="text-green-600"> High</span>
              </p>
              <p className="text-xl">{`${currencySymbol} ${coin.market_data.ath[currency]}`}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CoinDetails;
