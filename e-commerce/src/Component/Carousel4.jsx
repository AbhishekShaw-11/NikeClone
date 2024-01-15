import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nikebasketball from "./Pics/Nikebasketball.jpg";
import Nikefootball from "./Pics/Nikefootball.jpg";
import Niketennis from "./Pics/Niketennis.jpg";
import Niketrail from "./Pics/Niketrail.jpg";
import Nikegolf from "./Pics/Nikegolf.jpg";

export default class Carousel4 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };

    return (
      <div className="mt-20">
        <div className="flex  justify-between text-lg font-medium capitalize">
          <div className="">
            <h1 className="px-4 text-lg font-medium capitalize">
              New Workout Essentials
            </h1>
          </div>
          <div className="">
            <h1 className=" px-4 text-lg font-medium capitalize">Shop</h1>
          </div>
        </div>
        <Slider {...settings} className=" w-full flex justify-around ">
          <div className=" p-4">
            <div className="pb-4">
              <img src={Nikebasketball} className=" " />
            </div>
            <div className=" text-left">
              <h1 className="text-lg font-medium capitalize">
                Nike air Zoom TR 1
              </h1>
              <h2 className="font-light capitalize">Men's workout shoes</h2>
              <h1 className="text-lg font-medium mt-3">MRP: ₹ 10,782</h1>
            </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src={Nikefootball} />
            </div>
            <div className=" text-left">
              <h1 className="text-orange-800 text-lg font-medium ">
                Member product
              </h1>
              <h1 className="text-lg font-medium capitalize">
                Nike Metcon 90 AMP
              </h1>
              <h2 className="font-light capitalize">Men's workout shoes</h2>
              <h1 className="text-lg font-medium mt-3">MRP: ₹ 12,782</h1>
            </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src={Niketennis} />
            </div>
            <div className=" text-left">
              <h1 className="text-lg font-medium capitalize">
                Nike dri-FIT ready
              </h1>
              <h2 className="font-light capitalize">
                men's short-sleeve fitness top
              </h2>
              <h1 className="text-lg font-medium mt-3">MRP: ₹ 2 495</h1>
            </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src={Nikegolf} />
            </div>
            <div className=" text-left">
              <h1 className="text-lg font-medium capitalize">Nike form </h1>
              <h2 className="font-light capitalize">
                Men's dri-FIT hooded versatile jacket
              </h2>
              <h1 className="text-lg font-medium mt-3">MRP: ₹ 3 782</h1>
            </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src={Niketrail} />
            </div>
            <div className=" text-left">
              <h1 className="text-lg font-medium capitalize">
                Nike repel unlimited
              </h1>
              <h2 className="font-light capitalize">
                Men's water-repellent trapered-leg versatile trousers
              </h2>
              <h1 className="text-lg font-medium mt-3">MRP: ₹ 4 782</h1>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
