import React from "react";
import { SiJordan, SiNike } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import SearchComponent from './Search';

const Nav = () => {
  return (
    <React.Fragment>
      <div className="  bg-gray-100 ">
        <div className=" lg:flex justify-between mx-4 sm:hidden  ">
          <div>
            <SiJordan />
          </div>
          <div className="flex justify-between gap-4">
            <a>
              <span>Find a Store</span>
            </a>
            |
            <a>
              <span>Help</span>
            </a>
            |
            <a>
              <span>Join Us</span>
            </a>
            |
            <a>
              <span>Sign In</span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="Sec-main flex justify-between ">
        <div className="Logo">
          <SiNike className="w-16 h-16 ml-8" />
        </div>
        <div className="Catergory lg:flex justify-between gap-4 m-4 sm:hidden">
          <h2>New & Featured</h2>
          <h2>Men</h2>
          <h2>Women</h2>
          <h2>Kids</h2>
          <h2>Sale</h2>
          <h2>Customise</h2>
          <h2>SNKRS</h2>
        </div>
        <div className=" flex justify-between gap-2  mx-5 mt-4">
        <SearchComponent/>
          <CiHeart  className="mt-2 h-6 w-8"/>
          <IoBagOutline  className="mt-2 h-6 w-8 "/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
