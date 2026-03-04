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
                <button className='btn btn-primary ml-4'>+ New Ticket</button>
            </div>
            
        </div>
    );
};

export default Navbar;