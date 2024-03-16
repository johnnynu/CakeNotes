import {
  Auth,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect, // Changed from signInWithPopup
  signOut,
  User,
} from "firebase/auth";
import { firebaseApp } from "./firebase";
import { useState, useEffect } from "react";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const auth: Auth = getAuth(firebaseApp);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // useEffect is used to set up a listener for changes to the authentication state.
  // onAuthStateChanged is a Firebase method that observes the user's sign-in state.
  useEffect(() => {
    const handleRedirect = async () => {
      setIsLoading(true);
      try {
        const result = await getRedirectResult(auth); // Capture the sign-in result
        if (result) {
          // Process successful login
          const credentials = GoogleAuthProvider.credentialFromResult(result);
          const googleToken = credentials?.accessToken;
          const user = result.user;
          setUser(user);
          router.push("/home");
        }
      } catch (error) {
        //  Handle errors
      } finally {
        setIsLoading(false);
      }
    };

    handleRedirect(); // Call the function to handle the result
  }, [auth, router]);

  // This useEffect is used to set up a listener for changes to the authentication state.
  // onAuthStateChanged is a Firebase method that observes the user's sign-in state.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // Google authentication logic
  const signInWithGoogle = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      setIsLoading(false); // Set isLoading to false
      if (error instanceof FirebaseError) {
        if (error.code === "auth/popup-closed-by-user") {
          console.log("Google SSO Popup Closed by User");
        }
      } else {
        console.log("Google SSO Failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const authSignOut = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { signInWithGoogle, authSignOut, isLoading, isAuthenticated, user };
};

export default UseAuth;
