import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='h-105 bg-[#244D3F] text-white text-center pt-20 mt-20'>
            <div className='container mx-auto'>

                <div className='space-y-5'>
                    <h1 className='text-6xl font-extrabold'>KeenKeeper</h1>
                    <p className='opacity-80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className='text-[20px] font-medium'>Social Links</p>
                    <div className='flex justify-center gap-2'>
                        <FaInstagram className='text-[40px]'></FaInstagram>
                        <FaFacebook className='text-[40px]'></FaFacebook>
                        <FaSquareXTwitter className='text-[40px]'></FaSquareXTwitter>
                    </div>
                </div>

                <hr className='opacity-20 h-px mt-10 '></hr> 

                <div className='opacity-50 flex justify-between py-8'>
                    <h1>© 2026 KeenKeeper. All rights reserved.</h1>
                    <ul className='flex gap-8'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Footer;