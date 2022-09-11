import React from "react";

const VideoBg = () => {
  return (
    <header className="mt-16 relative flex items-center justify-center h-96 overflow-hidden bg-black">
      <div className="relative z-20 p-5 text-6xl text-white rounded-xl">
        Web Development & Cyber Security
      </div>
      <video autoPlay loop muted className="absolute z-10 opacity-60">
        <source src="/assets/dna.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default VideoBg;
