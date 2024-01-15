import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel3 extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };

    return (
      <div className="mt-20">
        <div className="flex  justify-between text-lg font-medium capitalize">
          <div className="">
            <h1 className="px-4 text-lg font-medium capitalize">
              Always Iconic
            </h1>
          </div>
        </div>
        <Slider {...settings} className=" w-full flex justify-around ">
          <div className=" p-4">
            <div className="pb-4">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/46f55604-0c16-43d7-8d74-05b379c140dc/air-jordan-1-mid-shoes-7cdjgS.png"
                className=" "
              />
            </div>
            <div className=" text-left  ">
              <h1 className="text-lg capitalize  hover:text-inherit font-medium">
                air jordan 1
              </h1>
            </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fe30fc4-2645-4d1e-b3f8-70da145e0f74/air-max-97-shoes-EBZrb8.png" />
            </div>
            <div className=" text-left">
              <h1 className=" text-lg  capitalize hover:text-inherit font-medium">
                air max
              </h1>
            </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a0d3a009-8c8f-42f3-ba13-c9e8998ac01d/dunk-low-se-shoes-7fnM7D.png" />
            </div>
            <div className=" text-left ">
              <h1 className="text-lg  capitalize hover:text-inherit font-medium">
                Dunk
              </h1>
            </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-shoes-dNWPTj.png" />
            </div>
            <div className=" text-left ">
              <h1 className="text-lg font-medium capitalize  hover:text-inherit ">
                Nike blazer{" "}
              </h1>
            </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/b3eb0d56-64d1-477d-9d8e-4ac2f668feee/metcon-9-workout-shoes-ldMsxB.png" />
            </div>
            <div className=" text-left ">
              <h1 className="text-lg font-medium capitalize  hover:text-inherit ">
                Nike metcon 9
              </h1>
            </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86da9a05-d0f1-4327-876e-a2069edbdb5d/pegasus-40-road-running-shoes-Cx28kb.png" />
            </div>
            <div className=" text-left">
              <h1 className="text-lg font-medium capitalize hover:text-inherit">pegasus</h1>
            </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f153b4e4-9069-44ae-bf86-f70ae8ecbaa1/air-force-1-07-easyon-shoes-lpjTWM.png" />
            </div>
            <div className=" text-left">
              <h1 className="text-lg font-medium capitalize hover:text-inherit">air force 1</h1>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
