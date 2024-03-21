import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioShow = ({
  portfolioName,
  portfolioURL,
  portfolioImg,
  portfolioVideo,
  portfolioContent,
  order,
  type,
}) => {
  return (
    <motion.div
      target="_blank"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        delay: order * 0.3,
      }}
      className="mb-5 flex w-[90%] flex-col items-center justify-center rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 p-8 backdrop-blur-md backdrop-filter md:w-[70%]"
    >
      <div className="handwriting border-b-4 border-[#002fa7] text-center text-2xl">
        {portfolioName}
      </div>
      <br />
      <div className="flex w-full flex-col items-center justify-between lg:flex-row lg:items-start">
        <div className="mb-4 w-full lg:mb-0 lg:w-[45%] xl:w-[30%]">
          {type === "video" ? (
            <iframe
              width="560"
              height="315"
              src={portfolioVideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="aspect-video h-auto w-full rounded-xl"
            ></iframe>
          ) : (
            <Image
              alt=""
              src={portfolioImg}
              width={400}
              height={400}
              className="aspect-video h-auto w-full rounded-xl"
            />
          )}
        </div>
        <div className="lg:w-[55%] lg:pl-4 xl:w-[65%]">
          <div>{portfolioContent}</div>
          <div className="mt-8 flex items-center justify-center xl:justify-start">
            <a href={`${portfolioURL}`} target="_blank">
              <button class="btn">See More</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioShow;
