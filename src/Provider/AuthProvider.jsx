import { createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // use state
  const [user, setUser] = useState(null);

  // google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user by email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user by email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user sign out
  const userLogout = () => {
    return signOut(auth);
  };

  // authentication observer onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // all authentication
  const authInfo = {
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    userLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
