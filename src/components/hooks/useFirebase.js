import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from "react";
import app from "../../firebase.init";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const[user,setUser]=useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result)=>{
                const user=result.user;
                setUser(user);
                console.log(user)
            }).catch((error)=>{
                console.error(error)
            });
    };

    const handleSignOut=()=>{
        signOut(auth)
            .then(()=>{
                console.log('Sign-out successful')
            }).catch((error)=>{
                console.error(error,'An error happened.')
            });
    };

    useEffect( ()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user);
        })
    },[]);

    return {
        user,
        handleSignOut,
        signInWithGoogle
    }
};
export default useFirebase;
        
