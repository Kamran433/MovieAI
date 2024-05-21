"use client";
import React from "react";
import BootstrapCarousel from "../carousels/BootstrapMovies";

const Movies: React.FC = () => {
  return (
    <div className=" justify-center items-center">
      <BootstrapCarousel />
    </div>
  );
};

export default Movies;
