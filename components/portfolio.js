import React from "react";

const Portfolio = () => {
  return (
    <div className="h-[40rem] pt-28 font-bold text-black md:h-dvh">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p className="mb-5 border-b-4 border-cyan-400 text-center text-2xl">
          作品集
        </p>
        <div className="w-[90%] rounded-3xl p-12 shadow-2xl backdrop-blur-3xl md:w-1/2">
          <p>智慧倉儲派車系統</p>
          <p>MuPho</p>
          <p>UI組件</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
