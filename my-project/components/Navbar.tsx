// components/Navbar.tsx
"use client";
import ProfileImage from "./ProfileImage";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./navbar.css"; // Adjust the path if needed

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("searchQuery") as string;
    // Redirect to the search page with the search query
    router.push(`/search?q=${searchQuery}`);
  };
  return (
    <nav className="sticky top-0 z-50 bg-gray-800">
      <ul className="navbar flex justify-between items-center py-2 px-4">
        <li className="logo">
          <Link href="/">
            <Image
              src="/logo.png"
              className="user-image"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link href="/tv-shows">TV Shows</Link>
        </li>
        <li className="nav-item">
          <Link href="/ask-ai">AskAI</Link>
        </li>
        <li className="nav-item">
          <Link href="/upgrade">Upgrade</Link>
        </li>
        <li className="nav-item right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchQuery"
              placeholder="Whats on your mind..."
              className="bg-gray-200 rounded-md py-1 px-2 text-black"
            />
            <button
              type="submit"
              className="mr-2 bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Search
            </button>
          </form>
          <ProfileImage />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
