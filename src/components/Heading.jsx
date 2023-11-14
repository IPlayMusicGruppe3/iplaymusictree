import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

const Heading = ({ headingText, paragraphText, className }) => {
  const defaultStyles = "text-3xl font-bold text-secondary ml-4 mb-4";
  const combinedStyles = `${defaultStyles} ${className || ""}`;

  return (
    <div className="flex flex-col items-start">
      <div className="text-white">
        <h1 className={combinedStyles}>{headingText}</h1>
        {paragraphText && <p className="text-xl">{paragraphText}</p>}
      </div>
      <div className="flex mt-4">
        <FontAwesomeIcon
          icon={faUser}
          className="text-gray-500 hover:text-blue-500 cursor-pointer mx-2"
          size="lg"
        />
        <FontAwesomeIcon
          icon={faStar}
          className="text-gray-500 hover:text-blue-500 cursor-pointer mx-2"
          size="lg"
        />
        <FontAwesomeIcon
          icon={faHeart}
          className="text-gray-500 hover:text-blue-500 cursor-pointer mx-2"
          size="lg"
        />
      </div>
    </div>
  );
};

export default Heading;
