import React, { FC, useState } from "react";
import Hexagon from "./hexagon";

interface LoadingPageProps {
  isLoading: boolean;
  isFaded: boolean;
}

const LoadingPage: FC<LoadingPageProps> = ({ isLoading, isFaded }) => {
  return (
    <div
      className={`fixed loading-page overflow-hidden transition-opacity ease-in duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0"
      } ${isFaded ? "hidden" : ""}`}
    >
      <Hexagon />
    </div>
  );
};

export default LoadingPage;
