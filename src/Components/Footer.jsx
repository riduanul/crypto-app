import React from "react";
import avatarimg from "../assets/pp.jpg";
const Footer = () => {
  return (
    <div className=" border-t-2 border-neutral-300 px-10 py-10 bg-slate-900 text-white w-full text-orange-500">
      <div className="  h-full flex flex-col md:flex-row  justify-between items-center">
        <div className="text-">
          <p className="font-bold">About Us</p>
          <small className="font-small">
            We are the best crypto trading app in Bangladesh, We provide our
            guidance at a very cheap price.
          </small>{" "}
          <br />
          <small>Contact: +8801700000000</small>
        </div>
        <div className="text-center ">
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={avatarimg}
            alt="avatar-img"
          />
          <h4 className="font-bold">Our Founder</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
