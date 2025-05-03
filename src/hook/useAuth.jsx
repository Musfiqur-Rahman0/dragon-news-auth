import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { use } from "react";
import { auth, gitProvider, googleProvider } from "../firebase/firebase.init";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { setUser, setIsLoading } = use(AuthContext);

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = async (email, password) => {
    try {
      // setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGithub = async () => {
    try {
      setIsLoading(true);
      await signInWithPopup(auth, gitProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.log(err.code);
    }
  };

  return {
    login,
    signIn,
    logout,
    signInWithGithub,
    signInWithGoogle,
  };
};

export default useAuth;
