import React from "react";
import { SiJordan } from "react-icons/si";
const Nav = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between mx-4">
        <div>
          <SiJordan />
        </div>
        <div className="flex justify-between gap-4">
          <a>
            <span>Find a Store</span>
          </a>|
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
      <hr/>
    </React.Fragment>
  );
};

export default Nav;
