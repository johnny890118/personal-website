import PortfolioShow from "./portfolioShow";

const Portfolio = () => {
  return (
    <div className="h-auto pt-28 font-bold text-black">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p className="mb-5 border-b-4 border-cyan-400 text-center text-2xl">
          作品集
        </p>
        <PortfolioShow
          portfolioName={"智慧倉儲派車系統"}
          portfolioURL={"https://wcs-demo.vercel.app/"}
          portfolioImg={"/wcs.png"}
        />
        <PortfolioShow
          portfolioName={"MuPho"}
          portfolioURL={"https://mu-pho.vercel.app/"}
          portfolioImg={"/mupho.png"}
        />
        <PortfolioShow
          portfolioName={"UI組件"}
          portfolioURL={"/"}
          portfolioImg={"/alert.png"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
