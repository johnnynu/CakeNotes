import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { firebaseApp } from "./firebase";
import { useState, useEffect } from "react";

// Define the UseAuth interface
// UseAuth is an interface that describes the shape of our authentication object.
// It ensures any object conforming to this interface will have specific methods for user authentication.
// Each method in this interface represents a different authentication strategy.
interface UseAuth {
  // signInWithGoogle method:
  // This is an asynchronous function that returns a Promise.
  // When called, it triggers the sign-in process using Google's OAuth service.
  signInWithGoogle: () => Promise<void>;
  authSignOut: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

// useAuth function:
// This function implements the UseAuth interface.
// It provides the actual logic for each authentication method declared in the UseAuth interface.
const UseAuth = (): UseAuth => {
  const auth: Auth = getAuth(firebaseApp);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // useEffect is used to set up a listener for changes to the authentication state.
  // onAuthStateChanged is a Firebase method that observes the user's sign-in state.
  useEffect(() => {
    // Listener that keeps track of the user's authentication status
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true);
        setUser(user);
      } else {
        // User is signed out
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [auth]);

  // Google authentication logic
  const signInWithGoogle = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      // SSO success creates a Google Access Token that we can use.
      const credentials = GoogleAuthProvider.credentialFromResult(res);
      const googleToken = credentials?.accessToken;
      // Signed-in user info
      const user = res.user;
    } catch (error) {
      console.log("Google SSO Failed");
    } finally {
      setIsLoading(false);
    }
  };

  const authSignOut = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { signInWithGoogle, authSignOut, isLoading, isAuthenticated, user };
};

export default UseAuth;
