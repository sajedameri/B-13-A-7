import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';

const Mainlayout = () => {
  return (
    <div>
       <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Mainlayout;