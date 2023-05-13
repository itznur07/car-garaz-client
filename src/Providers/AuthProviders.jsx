import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  /** Create user */
  const createUserWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /** Observer */

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user is", currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUserWithEmailPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
