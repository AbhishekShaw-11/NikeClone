"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Foot = () => {
  return (
    <Footer bgDark>
      <div className="w-full  bg-gray-600">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className="">
            <Footer.Title title="Company" />
            <Footer.LinkGroup className=" flex flex-col w-full gap-4 px-6 py-8 md:grid-cols-4 " >
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="">
            <Footer.Title title="help center" />
            <Footer.LinkGroup className=" flex flex-col w-full gap-4 px-6 py-8 md:grid-cols-4">
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="">
            <Footer.Title title="legal" />
            <Footer.LinkGroup className=" flex flex-col w-full gap-4 px-6 py-8 md:grid-cols-4 ">
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="">
            <Footer.Title title="download" />
            <Footer.LinkGroup className=" flex flex-col w-full gap-4 px-6 py-8 md:grid-cols-4 ">
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <hr></hr>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};
export default Foot;
