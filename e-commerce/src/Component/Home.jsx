import React from "react";
import Nav from "./Nav";
import Nikebanner from "./Nikebanner.png";
import Add from "./Add.mp4";
import SimpleSlider from "./Carousel";
import "./Css/Banner.css";
import Carousel2 from "./Carousel2";
import Add1 from "./Add1.mp4";
import Carousel3 from "./Carousel3";
import Carousel4 from "./Carousel4";

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
        <h1 className="uppercase text-6xl font-black break-normal">
          feel it to believe it
        </h1>
        <h4 className="mt-3 text-lg font-medium mb-3">
          Take cushion for a run with new colors in the invincible 3.{" "}
        </h4>

        <button className="bg-black text-teal-50 rounded-2xl w-20 h-8 hover:bg-slate-600 font-medium">
          Shop
        </button>
      </div>

      <div className=" mb-8">
        <SimpleSlider />
      </div>
      <br />
      <div className="Banner ">
        <div className="Banner2 ">
          <h3
            className="capitalize text-2xl font-medium
         break-normal mt-96 mx-4 "
          >
            early member access
          </h3>
          <h3
            className=" capitalize text-xl font-medium
         break-normal mt-2 mx-4"
          >
            New phantom GX
          </h3>
          <button className="bg-black text-teal-50 rounded-2xl w-20 h-8 mx-4 my-2 hover:bg-slate-600 font-medium">
            Shop
          </button>
        </div>
        <div className="Banner1 ">
          <h3
            className="capitalize text-2xl font-medium
         break-normal mt-96 mx-4 "
          >
            Retro Running Shoes
          </h3>
          <button className="bg-black text-teal-50 rounded-2xl w-20 h-8 mt-4 mx-4 hover:bg-slate-600 font-medium">
            Shop
          </button>
        </div>
      </div>

      <div>
        <video id="" controls autoPlay className="w-full aspect-video mt-12 ">
          <source src={Add} type="video/mp4"></source>
        </video>
      </div>

      <div className=" text-center mt-20">
        <h1 className=" uppercase text-6xl font-black ">nike g.t cut 3</h1>
        <p className="mt-3  font-medium mb-3">
          Built for players who are constantly cutting, stopping on a dime and
          changing the game.
        </p>
        <button className=" rounded-full bg-black text-teal-50  w-20 h-8 mt-4  hover:bg-slate-600 font-medium ">
          Explore
        </button>
      </div>

    <div className="">
    <Carousel2/>
    </div>


    <div className="mt-20">
    <h1 className="ml-12 text-xl font-semibold mb-3">Don't Miss</h1>
    <video id="" controls autoPlay className="w-full aspect-video mt-12 mx-12">
      <source src={Add1} type="video/mp4"></source>
    </video>
  </div>

  <div className=" text-center mt-20">
  <p className="mt-3  font-medium mb-3">
  Nike Dynamo 2 EasyOn
</p>
        <h1 className=" uppercase text-6xl font-black ">nike easyon and go</h1>
        <p className="mt-3  font-medium mb-3">
          Nike EasyOn-Designed to put on and get going.
        </p>
        <button className=" rounded-full bg-black text-teal-50  w-20 h-8 mt-4  hover:bg-slate-600 font-medium ">
          Shop
        </button>
      </div>

      <div>
      <Carousel3/>
      </div>
      <div>
      <Carousel4/>
      </div>
    </React.Fragment>
  );
};

export default Home;
