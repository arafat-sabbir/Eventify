import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const Context = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider()

    const signWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    const signUpUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = ()=>{
        return signOut(auth)
    }

    const contextValue = {
        signUpUser,
        signInUser,
        signWithGoogle,
        user,
        loader,
        signOutUser
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoader(false)
        });
        return unsubscribe;
      }, []);
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children:PropTypes.node
}
