import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2 className='text-center text-3xl font-medium'> 404! Not Found</h2>
            <Link className='btn' to="/">Go To Home</Link>
            <button onClick={() => navigate('/about')}>Navigate</button>
        </div>
    );
};

export default Error;