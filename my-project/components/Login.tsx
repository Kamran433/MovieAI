"use client";
// ... (your login logic using firebase/auth)
import auth from "../config/firebase-server";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from "react";

const Login: React.FC = () => {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user; // Access user data
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error gracefully (e.g., display error message)
    }
  };

  return <button onClick={handleGoogleLogin}>Sign in with Google</button>;
};
export async function getServerSideProps() {
  const user = await auth.currentUser; // Check for logged-in user

  return {
    props: { user }, // Pass data to the component
  };
}

export default Login;
