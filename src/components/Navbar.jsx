import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './AuthProver';
import LogOut from './LogOut';
import { FaUser } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";



const Navbar = () => {
    const authInfo = useContext(authContext)
    const { user } = authInfo
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
                        {/* <Link className='text-lg hover:underline font-bold' to="/login">login</Link> */}
                        {/* <Link className='text-lg hover:underline font-bold' to="/register">Register</Link> */}

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
                    {/* <Link className='text-lg hover:underline font-bold' to="/login">Login</Link> */}
                    {/* <Link className='text-lg hover:underline font-bold' to="/register">Register</Link> */}
                </ul>
            </div>
            <div className="navbar navbar-end dropdown dropdown-end">
                <div className="form-control mr-4">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                {
                    user ?
                        <div>
                            <div className='w-12'>
                            <FaUser className='w-full text-2xl'></FaUser>
                            </div>
                            <LogOut></LogOut>
                        </div> : <Link to="/login" className='btn hover:underline'>LOGIN <FaSignInAlt />
 </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;