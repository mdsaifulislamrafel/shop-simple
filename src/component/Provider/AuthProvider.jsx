import { auth } from "../../Firebase/firebase.config";
/* eslint-disable react/prop-types */
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);


    const GoogleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const upDateProfile = (fullName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: photoURL
        })
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        return signOut(auth);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
    };
    const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, FacebookProvider);
    };
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GithubProvider);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const verifyYourEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [reload])

    const authInfo = { user, createUser, signIn, logOut, googleSignIn, facebookSignIn, githubSignIn, resetPassword, loading, upDateProfile, setReload, verifyYourEmail };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;