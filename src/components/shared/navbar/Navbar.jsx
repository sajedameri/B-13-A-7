import React from "react";
import logo from "../../../assets/logo.png";
import btlogo from "../../../assets/Vector.png";
import timelogo from "../../../assets/time.png";
import statlogo from "../../../assets/ChartLine.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            ` font-semibold mr-2 ${isActive ? "bg-[#244D3F] text-white " : ""}`
          }
        >
          <img src={btlogo} alt="" className="w-5 h-5" />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={"/timeline"} className={({ isActive }) =>
            `font-semibold mr-2 ${isActive ? "bg-[#244D3F] text-white " : ""}`
          }>
          <img src={timelogo} alt="" className="w-5 h-5" />
          Timeline
        </NavLink>
      </li>

      <li>
        <NavLink to={"/stats"}  className={({ isActive }) =>
          ` font-semibold ${  isActive ? "bg-[#244D3F] text-white " : ""
          }`
      }>
          <img src={statlogo} alt="" className="w-5 h-5" />
          Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" className="w-40" />
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
