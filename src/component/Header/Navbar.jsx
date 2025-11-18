import React from 'react';
import logo from '../../assets/logo.png'
import github from '../../assets/github.png'


const Navbar = () => {
    return (
<div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start ml-0 md:ml-10">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><a className='bg-gradient-to-r from-[#632EE3] to-[#632EE3] bg-clip-text text-transparent'>Home</a></li>
      <li><a>Apps</a></li>
      <li><a>Installation</a></li>
      </ul>
    </div>
    <img src={logo} className='w-8 h-8' alt="" />
    <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#632EE3] bg-clip-text text-transparent">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">

    <ul className="menu menu-horizontal px-1 font-bold">
      <li><a className='bg-gradient-to-r from-[#632EE3] to-[#632EE3] bg-clip-text text-transparent'>Home</a></li>
      <li><a>Apps</a></li>
      <li><a>Installation</a></li>
    </ul>
  </div>
       <div className="navbar-end mr-0 md:mr-10">
    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#632EE3] w-27 h-10 sm:w-30 text-white"><img src={github} alt=""/>Contribute</a>
       </div>
</div>
    );
};

export default Navbar;