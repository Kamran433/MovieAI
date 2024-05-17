import auth from "../config/firebase-server";
import { User } from "firebase/auth";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const ProfileImage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Update user state to reflect logout
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout errors (optional: display error message)
    }
  };

  const profilePictureUrl = user?.photoURL;

  return (
    <div>
      {user ? ( // Display profile image and logout button if user is logged in
        <>
          <Link href="/">
            <Image
              src={profilePictureUrl || "/logo.png"}
              className="user-image"
              alt="User Profile Picture"
              width={40}
              height={40}
            />
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleGoogleLogin}>Login</button>
      )}
    </div>
  );
};

export default ProfileImage;
