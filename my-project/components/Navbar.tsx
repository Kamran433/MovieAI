"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter, usePathname } from "next/navigation";
import { ProfileImage } from "./ProfileImage";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("searchQuery") as string;
    router.push(`/search/${searchQuery}`);
  };

  const handleRedirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/AskAI");
  };

  return (
    <nav className="bg-gray-800 z-20 fixed w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" flex-shrink-0 flex items-center">
              <Link
                href="/"
                passHref
                className="hidden md:flex  items-center space-x-2"
              >
                <Image
                  className="rounded-md"
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/movies"
                  passHref
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Movies
                </Link>
                <Link
                  href="/tv-shows"
                  passHref
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  TV Shows
                </Link>
                <Link
                  href="src/app/AskAI"
                  onClick={handleRedirect}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  AskAI
                </Link>
                <Link
                  href="/upgrade"
                  passHref
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Upgrade
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Show search form only on the search page */}
            {pathname &&
              (pathname.startsWith("/AskAI") ||
                pathname.startsWith("/search")) && (
                <form onSubmit={handleSubmit} className="ml-4 flex">
                  <input
                    type="text"
                    name="searchQuery"
                    placeholder="Search"
                    className="bg-gray-200 rounded-md py-1 px-2 text-black"
                  />
                  <button
                    type="submit"
                    className="ml-3 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-blue-600"
                  >
                    Search
                  </button>
                </form>
              )}
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white hover:bg-gray-700 
              hover:rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-2 z-20"
            >
              <ProfileImage />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            href="/movies"
            passHref
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Movies
          </Link>
          <Link
            href="/tv-shows"
            passHref
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            TV Shows
          </Link>
          <Link
            href="src/app/AskAI"
            onClick={handleRedirect}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            AskAI
          </Link>
          <Link
            href="/upgrade"
            passHref
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
