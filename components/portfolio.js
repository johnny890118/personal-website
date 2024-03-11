import { motion } from "framer-motion";
import PortfolioShow from "./portfolioShow";
import UiComponentsShow from "./uiComponentsShow";

const Portfolio = () => {
  const portfolioCards = [
    {
      name: "智慧倉儲派車系統",
      url: "https://wcs-demo.vercel.app/",
      img: "/wcs.png",
    },
    { name: "MuPho", url: "https://mu-pho.vercel.app/", img: "/mupho.png" },
    {
      name: "To Do List",
      url: "https://johnny890118.github.io/toDoList.github.io/toDoList-demo/index.html",
      img: "/toDoList.png",
    },
  ];
  const uiCards = [
    {
      name: "Alert",
      url: "https://johnny890118.github.io/alert-ui.github.io/alert-ui/index.html",
      img: "/alert.png",
    },
    {
      name: "Toast",
      url: "https://johnny890118.github.io/toast-ui.github.io/toast-ui/index.html",
      img: "/toast.png",
    },
    {
      name: "QA",
      url: "https://johnny890118.github.io/collapse-ui.github.io/QA/index.html",
      img: "/QA.png",
    },
  ];

  return (
    <div className="h-auto pt-28 font-bold text-black" id="portfolio">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
          className="mb-5 border-b-4 border-cyan-400 text-center text-2xl"
        >
          作品集
        </motion.p>
        {portfolioCards.map((items, index) => (
          <PortfolioShow
            key={index}
            portfolioName={items.name}
            portfolioURL={items.url}
            portfolioImg={items.img}
            order={index}
          />
        ))}

        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
          className="mb-5 border-b-4 border-cyan-400 pt-28 text-center text-2xl"
        >
          UI組件
        </motion.p>
        <div className="flex w-[90%] flex-wrap items-center justify-center md:w-[70%]">
          {uiCards.map((items, index) => (
            <UiComponentsShow
              key={index}
              portfolioName={items.name}
              portfolioURL={items.url}
              portfolioImg={items.img}
              order={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
