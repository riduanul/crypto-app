import React from "react";
import img from "../assets/btc-min.png";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="bg-black w-full h-screen md:shrink-0">
      <motion.div
        className="div"
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img
          src={img}
          alt=""
          className=" object-contain h-screen w-screen md:w-screen sepia"
        />
      </motion.div>
    </div>
  );
}

export default Home;
