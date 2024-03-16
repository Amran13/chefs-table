import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-x-6 shadow bg-base-100 rounded-box w-52">
                        <Link className='text-lg hover:underline font-bold' to="/">Home</Link>
                        <Link className='text-lg hover:underline font-bold' to="/recipe">Recipe</Link>
                        <Link className='text-lg hover:underline font-bold' to="/about">About</Link>

                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    <Link className='text-lg hover:underline font-bold' to="/">Home</Link>
                    <Link className='text-lg hover:underline font-bold' to="/recipe">Recipe</Link>
                    <Link className='text-lg hover:underline font-bold' to="/about">About</Link>
                </ul>
            </div>
            <div className="navbar navbar-end dropdown dropdown-end">
                    <div className="form-control mr-4">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;