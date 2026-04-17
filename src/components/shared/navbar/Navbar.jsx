import React from 'react';
import logo from "../../../assets/logo.png"
import btlogo from "../../../assets/Vector.png"
import timelogo from "../../../assets/time.png"
import statlogo from "../../../assets/ChartLine.png"

const Navbar = () => {
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-bold">
      <li><a> <img src={btlogo} alt="" />Home</a></li>
       <li><a> <img src={timelogo} alt="" />Timeline</a></li>
        <li><a> <img src={statlogo} alt="" />Stats</a></li>
    
    </ul>
  </div>
</div>
  );
};

export default Navbar;