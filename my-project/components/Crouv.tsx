"use client";
import React from "react";
import BootstrapCarousel from "../carousels/Bootstrap";
import ResponsiveCarousel from "../carousels/Responsive";

const Crouv: React.FC = () => {
  return (
    <div className="relative mt-[25vh] h-40 w-50 flex justify-center items-center">
      <BootstrapCarousel />
      {/* <ResponsiveCarousel /> */}
    </div>
  );
};

export default Crouv;
