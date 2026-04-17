import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/footar/Footer';

const Mainlayout = () => {
  return (
    <div>
       <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Mainlayout;