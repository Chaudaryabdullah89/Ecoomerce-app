import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import assets from '../assets/assets.js';
const Navbar = () => {

const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-semibold text-md ' style='display: flex;
    justify-content: space-between;
  }' >
      <img src={assets.logo} alt="Logo" className="w-36" /> 
      <ul className='hidden sm:flex gap-10 text-sm text-gray-700 '>
        <NavLink to='/'>
            <p>Home</p>
            <hr className='bg-gray-700 w-full border-none h-[1.5px] hidden' />
        </NavLink>
        <NavLink to='/collection'>
            <p>Collection</p>
            <hr className='bg-gray-700 w-full border-none h-[1.5px] hidden' />
        </NavLink>
        <NavLink to='/About'>
            <p>About</p>
            <hr className='bg-gray-700 w-full border-none h-[1.5px] hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <p>Contact</p>
            <hr className='bg-gray-700 w-full border-none h-[1.5px] hidden' />
        </NavLink>
       
      </ul>
      <div className="flex items-center gap-5">
        <img src={assets.search_icon} alt="search" className='w-5' />
        <div className="relative group">
<img src={assets.profile_icon} alt="" className='w-5 cursor-pointer'  />
<div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-500">
    <p className="curser-pointer hover:text-black">My Profile</p>
    <p className="curser-pointer hover:text-black">Order</p>
    <p className="curser-pointer hover:text-black">LogOut</p>
</div>

</div>
        </div>
<Link to='/cart'>
<img src={assets.cart_icon} alt="Cart Icon"  className='w-5'/>
</Link>
<img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='sm:hidden w-5 cursor-pointer' />
      </div>
      {/*side Menu For the smaller screen  */}
      <div className={`absolute top-0 right-0  bottom-0 overflow-hidden bg-white  transition-all ${visible ? 'w-full' : 'w-0'}`}>
       <div className="flex flex-col text-gray-600">
        <div  onClick={() => setVisible(false)} className='flex  items-center gap-4 p-3'>
            <img src={assets.dropdown_icon} alt="Logo" className=" h-4 rotate-180" />
            <p>back</p>
        </div>
       </div>
      </div>
      </div>
  );
};

export default Navbar;