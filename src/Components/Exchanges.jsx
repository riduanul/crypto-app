import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { server } from "../main";
import { useState } from "react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard.jsx";
import Error from "../Components/Error.jsx";

function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchExchanges();
  }, []);
  if (error) return <Error message={"Error While Fetching exchanges..."} />;
  return (
    <div className="bg-slate-700 ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" flex flex-wrap justify-center">
            {exchanges?.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default Exchanges;
