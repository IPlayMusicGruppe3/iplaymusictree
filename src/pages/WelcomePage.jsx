import React from "react";
import iPlayMusicTree from "../assets/logos/iPlayMusic-w-bg.png";

const Welcome = () => {
  return (
    <div className="font-poppins flex flex-col items-center justify-center h-screen">
      <div className="mb-4 mr-32">
        <img
          src={iPlayMusicTree}
          alt="iPlayMusicTree logo"
          className="w-40 h-auto"
        />
      </div>
      <h1 className="text-3xl font-bold ml-24">iPlayMusic</h1>
    </div>
  );
};

export default Welcome;
