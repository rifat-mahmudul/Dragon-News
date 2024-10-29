/* eslint-disable react/prop-types */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    //provider
    const googleProvider = new GoogleAuthProvider();

    //sign in method
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log(currentUser);
                setLoading(false);
            } 
        })
    }, [])

    const authInfo = {
        signInWithGoogle,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
