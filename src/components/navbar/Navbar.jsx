import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar bg-base-100 shadow-md px-6'>

            <div className='flex-1'>
                <a className='text-xl font-bold text-primary' href="">CS — Ticket System</a>
            </div>

            {/* Right side: menu & button */}

            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button className='ml-4 px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-bold rounded-lg hover:from-[#4F46E5] hover:to-[#9333EA] transition-all shadow-lg'>+ New Ticket</button>
            </div>
            
        </div>
    );
};

export default Navbar;