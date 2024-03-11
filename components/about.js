import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-auto pt-28 font-bold text-black" id="about">
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
          關於我
        </motion.p>
        <div className="flex w-[90%] flex-col rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 p-12 backdrop-blur-md backdrop-filter md:w-[70%] md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center pb-12 md:items-start md:pb-0 md:pr-12"
          >
            <Image
              alt=""
              src={"/me2.jpg"}
              width={700}
              height={700}
              className="rounded-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <p>哈囉您好，我是蔡政軒，對前端開發充滿熱情的人。</p>
            <br />
            <p>個性活潑開朗，喜歡帶給身邊的人歡樂，善於溝通及團隊合作。</p>
            <br />
            <p>1.畢業於義守大學通訊工程系（現已改名智慧網路工程系）</p>
            <p>2.於榮興自動化擔任軟體工程師，目前8個月工作經驗</p>
            <p>
              3.主要專精JavaScript，使用React框架，也有Python 及C++的實戰經驗
            </p>
            <br />
            <p>｜熱情旅程｜</p>
            <p>
              我從小就非常喜歡美術，對工程師的世界也抱有極大的興趣和好奇。當發現可以將這兩者結合時，我毫不猶豫地踏上了前端開發之旅。這段旅程不僅讓我深深愛上了前端技術，更享受將設計與技術融合的樂趣。
            </p>
            <br />
            <p>｜前端之愛｜</p>
            <p>
              我一直將前端開發視為一門藝術，代碼就像我的畫筆，構建出優雅而富有互動性的網頁。前端不僅是技術，更是創造力的展現。這種對前端的熱愛驅使我不斷學習新技術，追求更高水準的程式碼品質。
            </p>
            <br />
            <p>｜核心理念｜</p>
            <p>
              我深知使用者體驗的重要性，因此在每一次的開發過程中，努力追求優雅且直觀的界面設計，讓使用者能夠輕鬆愉悅地與網站互動。以用戶為中心的開發理念一直是我的工作核心價值。
            </p>
            <br />
            <p>｜未來展望｜</p>
            <p>
              我的未來展望是成為一名全端工程師，擁有跨足前後端的技能，能夠更好地應對不斷變化的技術環境。
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
