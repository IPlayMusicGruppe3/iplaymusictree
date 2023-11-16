import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import walkthroughLogo from "../images/walkthroughLogo.svg";

const Heading = ({ headingText, paragraphText, className }) => {
  const defaultStyles = "text-3xl font-bold text-secondary ml-4 mb-4";

  return (
    <div>
      <img
        src={walkthroughLogo}
        alt={"Player button"}
        className=" h-full w-full"
      />
      <div className="flex flex-col items-center justify-center mt-20 text-secondary">
        <div className="text-secondary">
          <h1 className={defaultStyles}>{headingText}</h1>
          <p className="text-xl p-5">{paragraphText}</p>
        </div>
        <div className="mt-4">
          <FontAwesomeIcon
            icon={faUser}
            className="text-secondary hover:text-pink-500 cursor-pointer mx-4"
            size="4x"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="text-secondary hover:text-pink-500 cursor-pointer mx-4"
            size="4x"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="text-secondary hover:text-pink-500 cursor-pointer mx-4"
            size="4x"
          />
        </div>
        <div className="mt-8">
          <p>SKIP</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
