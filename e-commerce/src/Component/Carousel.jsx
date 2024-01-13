import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class SimpleSlider extends Component {
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
      <div className="mt-4">
        <div className="flex  justify-between text-lg font-medium capitalize">
          <div className="">
            <h1 className="px-4 text-lg font-medium capitalize">New Year New Arrivals</h1>
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
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_586,c_limit/a8317dc5-7ce1-42ff-b1da-71f08ff93ad4/court-vision-low-next-nature-shoes-N2fFHb.png"
                className=" "
              />
            </div>
            <div className=" text-left">
              <h1 className="text-lg font-medium capitalize">Nike air force 1'07</h1>
              <h2 className="font-light ">Men's shoe</h2>
              <h1 className="text-lg font-medium mt-3">
                MRP: ₹ 10,782
               
              </h1>
            </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_447,c_limit/871ea72c-a2f4-493c-a6f4-3be31a86c73b/air-force-1-07-shoes-dpNPj1.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-lg font-medium capitalize">Nike air max 90 SE</h1>
            <h2 className="font-light">Men's shoe</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 12,782
             
            </h1>
          </div>
          </div>

          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_447,c_limit/1e91e13c-f515-45c2-9c30-25f634e49d6c/air-max-90-se-shoes-FQ39pC.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-lg font-medium capitalize">Nike air force 1'07</h1>
            <h2 className="font-light capitalize">Women's shoe</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 10,782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_447,c_limit/bbe92ccc-9d8d-4268-9f7c-337342da026a/club-fleece-long-sleeve-crew-neck-sweatshirt-zQgDT8.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-orange-800 text-lg font-medium ">Member product</h1>
            <h1 className="text-lg font-medium">Nike Club Fleece</h1>
            <h2 className="font-light capitalize">Men's Long-sleeve crew-neck sweatshirt</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 3 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_447,c_limit/a8317dc5-7ce1-42ff-b1da-71f08ff93ad4/court-vision-low-next-nature-shoes-N2fFHb.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-orange-800 text-lg font-medium ">Member product</h1>
            <h1 className="text-lg font-medium capitalize">Nike court vision low next nature</h1>
            <h2 className="font-light">Men's shoe</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 4 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_434,c_limit/66f70b5f-5093-468b-ad5e-514eaa10d8b7/air-max-systm-shoes-KPKWF4.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-lg font-medium capitalize">Nike sportwear essential</h1>
            <h2 className="font-light capitalize">women's oversized long-sleeve polo</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 2 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_434,c_limit/0314ecb4-a96e-4b0a-81a6-d61ecaef7cab/air-force-1-07-lx-shoes-mj705n.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-lg font-medium capitalize">Nike air max SYSTM</h1>
            <h2 className="font-light capitalize">women's shoe</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 8 782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_434,c_limit/2794c624-f9b6-42db-8773-e034460a83f9/jordan-flight-mvp-mesh-shorts-d8RwZ7.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-lg font-medium capitalize">Nike air force 1'07 LX</h1>
            <h2 className="font-light capitalize">wpmen's shoe</h2>
            <h1 className=" text-lg font-medium mt-3">
              MRP: ₹ 11,782
             
            </h1>
          </div>
          </div>
          <div className="p-4">
            <div className="">
              <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_434,c_limit/3d36f334-853c-4db5-8d28-f47ce07e92bf/sb-skate-t-shirt-PqQBwM.png" />
            </div>
            <div className=" text-left">
            <h1 className="text-orange-800 text-lg font-medium ">Member product</h1>
            <h1 className="text-lg font-medium capitalize">Jordan flight MVP</h1>
            <h2 className="font-light capitalize">Men's mesh shoe</h2>
            <h1 className="text-lg font-medium mt-3">
              MRP: ₹ 2 782
             
            </h1>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}
