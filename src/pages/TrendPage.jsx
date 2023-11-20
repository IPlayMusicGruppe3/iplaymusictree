import React from 'react';
import iPlayMusicTree from "../assets/logos/iPlayMusic-w-bg.png";

const TrendPage = () => {
  return (
    <div>
        <div className="text-3xl font-bold mt-6 ml-6">
            Latest Trends
        </div>
        <div className="flex justify-center mt-6">
            <img className="h-100"src={iPlayMusicTree} alt="Latest Trends"/>
        </div>
    </div>
  );
};

export default TrendPage;
