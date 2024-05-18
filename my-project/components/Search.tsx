"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("searchQuery") as string;
    // Redirect to the search page with the search query
    router.push(`/search/${searchQuery}`);
  };

  return (
    <div className="container flex flex-col justify-center items-center h-full z-10">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full z-20"
      >
        <input
          name="searchQuery" // Make sure to include the name attribute for FormData
          type="text"
          className="bg-white focus:outline-none focus:shadow-outline border border-blue-700 rounded-lg py-2 px-4 block w-full mb-4"
          placeholder="What's on your mind..."
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
