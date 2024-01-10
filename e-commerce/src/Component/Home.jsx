import React from "react";
import Nav from "./Nav";
import Nikebanner from "./Nikebanner.png";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="  md:text-center bg-gray-100 text-black">
        <h4 className="">Move,Shop,Customise & Celebrate With Us.</h4>
        <p className="">
          No matter what you feel like doing today, It's better as a member .
        </p>
        <a className="underline">
          <span>Join Us.</span>
        </a>
      </div>

      <div className="Banner mx-20 border-black-800 ">
        <img src={Nikebanner}></img>
      </div>
      <div className=" text-center mt-12">
        <h4 className=" text-lg font-medium ">Nike Invincible 3</h4>
        <h1 className="uppercase text-6xl font-black break-normal">feel it to believe it</h1>
        <h4 className="mt-3 text-lg font-medium mb-3">
          Take cushion for a run with new colors in the invincible 3.{" "}
        </h4>

        <button className="bg-black text-teal-50 rounded-2xl w-20 h-8 hover:bg-slate-600 font-medium">
          Shop
        </button>
      </div>
      <div className="">
      <Carousel/>
      </div>
    </React.Fragment>
  );
};

export default Home;
