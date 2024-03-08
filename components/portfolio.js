import PortfolioShow from "./portfolioShow";
import UiComponentsShow from "./uiComponentsShow";

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
        <p className="mb-5 border-b-4 border-cyan-400 pt-28 text-center text-2xl">
          UI組件
        </p>
        <div className="flex w-[90%] flex-wrap items-center justify-center md:w-[70%]">
          <UiComponentsShow
            portfolioName={"Alert"}
            portfolioURL={"/"}
            portfolioImg={"/alert.png"}
          />
          <UiComponentsShow
            portfolioName={"Toast"}
            portfolioURL={"/"}
            portfolioImg={"/toast.png"}
          />
          <UiComponentsShow
            portfolioName={"QA"}
            portfolioURL={"/"}
            portfolioImg={"/QA.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
