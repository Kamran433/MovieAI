"use client";
import "regenerator-runtime/runtime";
import React from "react";
import { useRouter } from "next/navigation";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("searchQuery") as string;
    // Redirect to the search page with the search query
    router.push(`/search/${searchQuery}`);
  };

  const onMicrophoneClick = () =>
    SpeechRecognition.startListening({ language: "en-IN" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container flex justify-center items-center h-full">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full z-20 mt-[-18vh]"
      >
        <div className="relative w-full mb-4">
          <input
            name="searchQuery"
            type="text"
            className="bg-white focus:outline-none focus:shadow-outline border border-blue-700 rounded-lg py-2 px-4 block w-full pr-12"
            placeholder="What's on your mind..."
            value={transcript}
            onChange={(e) => e.preventDefault()} // Prevent input from being edited
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
            aria-label="Activate voice search"
            onClick={onMicrophoneClick}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm4-3a4 4 0 11-8 0V5a4 4 0 018 0v6z" />
              <path d="M19 11a7 7 0 01-14 0H3a9 9 0 0018 0h-2z" />
              <path d="M12 18v3m-4 0h8" />
            </svg>
          </button>
        </div>
        <button
          type="submit"
          className="px-6 py-2 text-white rounded-md w-40 hover:bg-blue-500 bg-green-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
