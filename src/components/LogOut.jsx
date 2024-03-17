import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from './AuthProver';
import Swal from 'sweetalert2';
import { FaSignInAlt } from "react-icons/fa";

const LogOut = () => {
    const authInfo = useContext(authContext)
    const navigate = useNavigate()
    const { logOut } = authInfo
    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                navigate('/login')

            }
        }
        );
    }
return (
    <div>
        <button className='btn' onClick={handleLogOut}>LogOut <FaSignInAlt /></button>
    </div>
);
};

export default LogOut;