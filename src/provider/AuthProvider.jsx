/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState("");

    //provider
    const googleProvider = new GoogleAuthProvider();

    //sign in method
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //sign out method
    const logOut = () => {
        return signOut(auth);
    }

    //Register
    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser);
            console.log(currentUser);
        });
        
        return () => unsubscribe();

    }, [])

    const authInfo = {
        signInWithGoogle,
        users,
        logOut,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
