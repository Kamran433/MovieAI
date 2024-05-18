"use client";
import Navbar from "../../../../components/Navbar";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div>
      <Navbar />
      <div className="jagga z-10">
        <div className="z-20">
          <h1>Search Results</h1>
          <p>Search query: {query}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
