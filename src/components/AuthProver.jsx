import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from './firebase.config';


export const authContext = createContext(null)

const AuthProver = ( {children} ) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () => {
        return signOut(auth)
    }
    useEffect( () => {
        const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user: ', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscirbe()
        }
    } ,[])

    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        logOut
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProver;