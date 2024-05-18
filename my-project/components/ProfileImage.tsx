import auth from "../config/firebase-server";
import { User } from "firebase/auth";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const ProfileImage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [logstate, setLogState] = useState(false); // Manage log state // Assuming user state indicates if the user is logged in or not
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLogState(!!currentUser); // Update log state based on user existence
    });

    return unsubscribe;
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      setLogState(true); // User is logged in
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Update user state to reflect logout
      setLogState(false); // User is logged out
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const profilePictureUrl = user?.photoURL;

  return (
    <div className="relative z-10">
      {user ? ( // Display profile image and logout button if user is logged in
        <>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer focus:outline-none z-20focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Image
              src={profilePictureUrl || "/logo.png"}
              className="user-image rounded-full"
              alt="User Profile Picture"
              width={40}
              height={40}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
              <button
                onClick={handleLogout}
                className="group flex items-center w-full px-4 py-2 z-20 text-sm text-gray-700 hover:bg-gray-300 hover:rounded-full"
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <button
          onClick={handleGoogleLogin}
          className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-blue-600 z-20"
        >
          Login
        </button>
      )}
    </div>
  );
};
const logstate = true;
export { ProfileImage, logstate }; // Export ProfileImage and logstate together
