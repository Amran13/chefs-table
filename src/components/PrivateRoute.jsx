import React, { useContext } from 'react';
import {Navigate} from 'react-router-dom';
import { authContext } from './AuthProver';

const PrivateRoute = ({children}) => {
    const authInfo = useContext(authContext)
    const {user} = authInfo;
    return (
        <div>
            {
                user ? children : <Navigate to="/login"></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;