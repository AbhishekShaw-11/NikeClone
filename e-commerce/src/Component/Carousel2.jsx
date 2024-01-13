import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Carousel2 extends Component {

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
            <h1 className="px-4 text-lg font-medium capitalize">New Workout Essentials</h1>
          </div>
          <div className="">
            <h1 className=" px-4 text-lg font-medium capitalize">Shop</h1>
          </div>
        </div>
        <Slider
          {...settings}
          className=" w-full flex justify-around "
        >
          <div className=" p-4">
            <div className="pb-4">
              <img
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_573,c_limit/dc02d244-b021-477d-be1c-10767023ce39/air-zoom-tr-1-workout-shoes-Zq4r1h.png"
                className=" "
              />
            </div>
            <div className=" text-left">
              <h1 className="text-lg font-medium capitalize">Nike air Zoom TR 1</h1>
              <h2 className="font-light capitalize">Men's workout shoes</h2>
              <h1 className="text-lg font-medium mt-3">
                MRP: ₹ 10,782
               
              </h1>
            </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/51c619ce-a95e-487a-9059-9b841baaaec0/metcon-9-amp-workout-shoes-Dwx2GX.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-orange-800 text-lg font-medium ">Member product</h1>
            <h1 className="text-lg font-medium capitalize">Nike Metcon 90 AMP</h1>
            <h2 className="font-light capitalize">Men's workout shoes</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 12,782
             
            </h1>
          </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/093b48d0-e8df-460f-a05c-f67bcfad2704/dri-fit-ready-short-sleeve-fitness-top-nvkds0.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-lg font-medium capitalize">Nike dri-FIT ready</h1>
            <h2 className="font-light capitalize">men's short-sleeve fitness top</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 2 495
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/389b3a49-27f5-4e59-8824-acd93268980d/form-dri-fit-hooded-versatile-jacket-Bz3WcP.png" />
            </div>
            <div className=" text-left">
            
            <h1 className="text-lg font-medium capitalize">Nike form </h1>
            <h2 className="font-light capitalize">Men's dri-FIT hooded versatile jacket</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 3 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/af505af4-6324-4a10-9820-a5acd8100bdf/repel-unlimited-water-repellent-tapered-leg-versatile-trousers-G51Sn8.png" />
            </div>
            <div className=" text-left">
            
            <h1 className="text-lg font-medium capitalize">Nike repel unlimited</h1>
            <h2 className="font-light capitalize">Men's water-repellent trapered-leg versatile  trousers</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 4 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/b3eb0d56-64d1-477d-9d8e-4ac2f668feee/metcon-9-workout-shoes-ldMsxB.png" />
            </div>
            <div className=" text-left"> 
            <h1 className="text-lg font-medium capitalize">Nike metcon 9</h1>
            <h2 className="font-light capitalize">men's workout shoes</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 12 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/0cf8fa9a-2f80-4695-9bb9-fc773ad970b2/dri-fit-uv-hyverse-short-sleeve-fitness-top-mpJDvR.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-lg font-medium capitalize">Nike dri-FIT UV hyverse</h1>
            <h2 className="font-light capitalize">men's short-sleeve Fitness top</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 1 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/119c0b56-f253-4a74-b0c4-7e8fb6d76dbb/dri-fit-fitness-t-shirt-j8x6rq.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-lg font-medium capitalize">Nike Dri-FIT</h1>
            <h2 className="font-light capitalize">men's fitness T-Shirt</h2>
            <h1 className=" text-lg font-medium mt-3">
              MRP: ₹ 1 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/a40503c6-f906-4c1a-b5fd-350602cfc73a/metcon-9-amp-workout-shoes-M3DVFs.png" />
            </div>
            <div className=" text-left">
            
            <h1 className="text-lg font-medium capitalize">Nike metcon 9 AMP</h1>
            <h2 className="font-light capitalize">Women's workout shoes </h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 12 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
          <div className="">
            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_448,c_limit/ea93d4db-1e95-481f-b168-de2c6ea86073/zenvy-rib-dri-fit-short-sleeve-cropped-top-6L2Q9g.png" />
          </div>
          <div className=" text-left">
          
          <h1 className="text-lg font-medium capitalize">Nike Zenvy rib</h1>
          <h2 className="font-light capitalize">women's Dri-FIT short-sleeve cropped top</h2>
          <h1 className="text-lg font-medium mt-3">
            MRP: ₹ 3 782
           
          </h1>
        </div>
        </div>
        </Slider>
      </div>
    );
  }
}
