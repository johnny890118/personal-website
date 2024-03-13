import { motion } from "framer-motion";
import PortfolioShow from "./portfolioShow";
import UiComponentsShow from "./uiComponentsShow";

const Portfolio = () => {
  const portfolioCards = [
    {
      name: "智慧倉儲派車系統",
      url: "https://wcs-demo.vercel.app/",
      img: "/wcs.png",
      content: (
        <p>
          派車系統的前端開發。
          <br />
          <br />
          使用者能夠派發任務給車輛，且實現將車輛資訊、位置、倉儲資訊以及任務狀況即時更新顯示在前端畫面上，並結合動畫使網頁與使用者互動性增加。
          <br />
          <br />
          使用RWD設計可以兼容手機與電腦。
        </p>
      ),
    },
    {
      name: "MuPho",
      url: "https://mu-pho.vercel.app/",
      img: "/mupho.png",
      content: (
        <p>
          一個人夜深人靜的時候，總是容易emo。
          <br />
          <br />
          這個作品呢，就是為了當你腦袋突然浮現一首歌時，可以快速地使用歌名搜尋，並找到歌詞意境的相關圖片，然後再發文給你朋友們看，告訴大家你的情緒，快速討個拍，節省您一個一個關鍵字搜尋的時間。
          <br />
          <br />
          不使用歌名的時候，他就是個普通的圖片搜尋網。
        </p>
      ),
    },
    {
      name: "To Do List",
      url: "https://johnny890118.github.io/toDoList.github.io/toDoList-demo/index.html",
      img: "/toDoList.png",
      content: (
        <p>
          輸入即將待辦的事項。
          <br />
          <br />
          選擇待辦種類:一般、重要、緊急，輸入框「+」會依選擇種類變色，分別是藍、橘、紅。
          <br />
          <br />
          輸入後，會出現輸入內容、✓、X <br />
          <br />
          輸入內容會依代辦種類變色。
          <br />
          <br />
          ✓為完成標記，點一下可打勾，再點一下可以取消。 <br />
          <br />
          X為刪除事項。
          <br />
          <br />
          點擊匯出文字後，會匯出文字在網頁，有先後順序，及根據選擇種類變化，一般不變，重要於文字頭尾加上*，緊急於文字頭尾加上**。
        </p>
      ),
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
            portfolioContent={items.content}
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
