import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getIdToken,
} from "firebase/auth";
import { auth } from "../auth/firebase.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const googleSignOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubsrcibe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const tokenId = await getIdToken(currentUser);
        console.log("userid", tokenId);
        setUser({ ...currentUser, tokenId });
      } else setUser(null);

      console.log("user", currentUser);
    });
    return () => {
      unsubsrcibe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, googleSignOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
