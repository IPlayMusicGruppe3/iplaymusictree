import React from "react";
import walkthroughLogo from "../images/walkthroughLogo.svg";

const Heading = ({ headingText, headingText2, paragraphText }) => {
  return (
    <div>
      <img
        src={walkthroughLogo}
        alt={"Player button"}
        className=" h-full w-full"
      />
      <div className="flex flex-col items-center justify-center mt-20 text-secondary">
        <div className="text-secondary">
          <h1 className={"text-2xl font-bold text-secondary text-center"}>
            {headingText}
            <br></br>
            {headingText2}
          </h1>
          <p className="text-xl p-3 text-center px-6">{paragraphText}</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
