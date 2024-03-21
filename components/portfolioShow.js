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
      href={`${portfolioURL}`}
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
      <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
        <div className="mb-4 lg:mb-0 lg:w-[30%]">
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
              className="rounded-xl"
            />
          )}
        </div>
        <div className="lg:w-[55%] lg:pl-4">
          <div>{portfolioContent}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioShow;
