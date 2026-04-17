import React from 'react';
import footerlogo from "../../../assets/logo-xl.png";
import socialicon from "../../../assets/Social Links.png"

const Footar = () => {
  return (
    <div className='bg-[#244D3F]  text-white'>
      <div className=''>
    <h2 className='text-5xl font-bold text-center pt-20'>Kinkeeper</h2>
        <p className='text-center py-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

      </div>
     <div className='flex justify-center items-center'>
       <div className=' '>
        <h2 className='text-xl font-bold text-center p'>Social Links</h2>
        <h2 className='w-20 h-20 rounded-full pt-3 '><img  src={socialicon } alt="" /></h2>
      </div>
     </div>

     <div className='border max w-[70%] mx-auto'>

     </div>
     <div className='flex justify-between max w-[70%] mx-auto py-20'>
      <p>© 2026 KeenKeeper. All rights reserved.</p>
      <p>Privacy Policy           Terms of Service           Cookies</p>
     </div>
    </div>
  );
};

export default Footar;