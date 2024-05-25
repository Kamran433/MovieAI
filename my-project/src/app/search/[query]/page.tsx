"use client";
"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../../../components/Navbar";
import SideNav from "../../../../components/SideNav";

interface SearchResult {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  // Add other properties as needed
}

const SearchResults: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjRkNjk3ODk0YzdlNWRiMzQ0YmE2MmNjMWNiYjE2OSIsInN1YiI6IjY2NTFhNTc5MjJkNzA0ZGViNjI2ZjFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OG5gc4caaF6RIVd7oi09HbtO02BWKUKFq62DnU5GPfM",
          },
        };
        const need = "movie";
        const response = await fetch(
          `https://api.themoviedb.org/3/${need}/changes?query=${searchParams}`,
          options
        );
        const data = await response.json();
        setSearchResults(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false);
      }
    };

    if (searchParams) {
      fetchSearchResults();
    }
  }, [searchParams]);

  const fetchMovieDetails = async (movieId: number) => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjRkNjk3ODk0YzdlNWRiMzQ0YmE2MmNjMWNiYjE2OSIsInN1YiI6IjY2NTFhNTc5MjJkNzA0ZGViNjI2ZjFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OG5gc4caaF6RIVd7oi09HbtO02BWKUKFq62DnU5GPfM",
        },
      };
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  };

  const fetchPosterImage = (posterPath: string) => {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  };

  const cardsPerPage = 18;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentResults = searchResults.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(searchResults.length / cardsPerPage))
    );
  };

  return (
    <div>
      <Navbar />
      <div className="jagga z-10 flex">
        <SideNav />
        <div
          className="justify-center flex flex-wrap"
          style={{
            maxHeight: "calc(100vh - 64px)",
            marginLeft: "239px",
            marginTop: "64px",
          }}
        >
          <h1>Search Results</h1>
          {searchParams && <p>Search query: {searchParams}</p>}
          {loading && <p>Loading...</p>}
          {currentResults.map((result) => (
            <div
              key={result.id}
              className="card z-20"
              style={{ marginRight: "239px" }}
            >
              <img
                src={fetchPosterImage(result.poster_path)}
                alt={result.title || result.name}
              />
              <h2>{result.title || result.name}</h2>
            </div>
          ))}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button
              onClick={goToNextPage}
              disabled={endIndex >= searchResults.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
