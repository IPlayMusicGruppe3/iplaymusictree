import React, { useState } from "react";
import Heading from "../components/Heading";
import { IoIosHeart, IoIosRadio, IoIosMusicalNote } from "react-icons/io";

const WalkthroughPage = () => {
  const [contentIndex, setContentIndex] = useState(0);

  const handleIconClick = (index) => {
    setContentIndex(index);
  };

  const slideContent = [
    {
      headingText: "Where Words Fail,",
      headingText2: "Music Speaks",
      paragraphText:
        "Fly me to the moon, let me play among the stars. And let me see what spring is like, On a-Juipter and Mars",
    },
    {
      headingText: "No Music,",
      headingText2: "No Life",
      paragraphText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget mattis sodales, tellus",
    },
    {
      headingText: "Peace, Love,",
      headingText2: "and Music",
      paragraphText:
        "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.",
    },
  ];

  return (
    <>
      <Heading
        headingText={slideContent[contentIndex].headingText}
        headingText2={slideContent[contentIndex].headingText2}
        paragraphText={slideContent[contentIndex].paragraphText}
      />
      <div className="flex justify-center mt-4">
        <IoIosRadio
          className={`text-secondary cursor-pointer mx-4 text-7xl rounded-full border-2 p-3 ${
            contentIndex === 0
              ? "bg-primary text-white  border-primary"
              : "bg-white text-black  border-secondary"
          }`}
          onClick={() => handleIconClick(0)}
        />

        <IoIosHeart
          className={`text-secondary cursor-pointer mx-4 text-7xl rounded-full border-2 border-secondary p-3 ${
            contentIndex === 1
              ? "bg-primary text-white  border-primary"
              : "bg-white text-black  border-secondary"
          }`}
          onClick={() => handleIconClick(1)}
        />

        <IoIosMusicalNote
          className={`text-secondary cursor-pointer mx-4 text-7xl rounded-full border-2 border-secondary p-3 ${
            contentIndex === 2
              ? "bg-primary text-white  border-primary"
              : "bg-white text-black  border-secondary"
          }`}
          onClick={() => handleIconClick(2)}
        />
      </div>
      <div className="mt-8 justify-center items-center flex mb-[40px]">
        <p onClick={() => (window.location.href = "/")}>SKIP</p>
        {/* SKIFT TIL "LINK" MED REACT ROUTER EFTER MERGE */}
      </div>
    </>
  );
};

export default WalkthroughPage;
