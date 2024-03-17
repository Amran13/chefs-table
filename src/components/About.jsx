import React, { useContext } from 'react';
import { authContext } from './AuthProver';

const About = () => {
    const authInfo = useContext(authContext)
    
    return (
        <div>
            <h2 className='text-center text-3xl font-medium'>About Page </h2>
        </div>
    );
};

export default About;