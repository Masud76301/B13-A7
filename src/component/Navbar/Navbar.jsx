import React from 'react';
import { NavLink } from 'react-router';
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="flex gap-2 items-center">
                        <NavLink to='/' className={({isActive})=>`p-2 ${isActive && "bg-green-800 text-white font-bold rounded-sm"}`} ><div className='flex items-center gap-2'><FaHome></FaHome> Home</div></NavLink>
                        <NavLink to='/timeline' className={({isActive})=>`p-2 ${isActive && "bg-green-800 text-white font-bold rounded-sm"}`}><div className='flex items-center gap-2'> <RiTimeLine></RiTimeLine> Timeline</div></NavLink>
                        <NavLink to='/stats' className={({isActive})=>`p-2 ${isActive && "bg-green-800 text-white font-bold rounded-sm"}`}><div className='flex items-center gap-2'> <BiStats></BiStats> Stats</div></NavLink>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;