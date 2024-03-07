import React from "react";

const Portfolio = () => {
  return (
    <div className="h-[40rem] bg-[url('/bg1.jpg')] bg-cover bg-center md:h-dvh">
      <div className="flex h-full w-full flex-col items-center justify-center backdrop-blur-sm">
        <p className="mb-5 text-center">作品集</p>
        <div className="w-[90%] rounded-3xl bg-white p-12 shadow-2xl md:w-1/2">
          <p>智慧倉儲派車系統</p>
          <p>MuPho</p>
          <p>UI組件</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
